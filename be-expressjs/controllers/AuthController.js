const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../models/index.js');
const nodemailer = require('nodemailer');


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({
            where: {
                email: email,
            },
        });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ email: user.email }, 'your-secret-key', { expiresIn: '1h' });

        res.json({ token: token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    auth: {
        user: "api",
        pass: "4b147883fc938b61951c668037bb0b86"
    }
});
exports.register = async (req, res) => {
    const { email, password, hp } = req.body;

    try {
        // Check if the user with the same email already exists
        const existingUser = await User.findOne({
            where: {
                email: email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user data into the database
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            hp: hp,
        });

        // Generate JWT token for the registered user
        const token = jwt.sign({ email: email }, 'your-secret-key', { expiresIn: '1h' });

        // Send registration confirmation email
        const mailOptions = {
            from: 'fauzan@example.com',
            to: email,
            subject: 'Registration Confirmation',
            text: 'Thank you for registering! Your account is now active.',
        };

        transporter.sendMail(mailOptions, (emailError, info) => {
            if (emailError) {
                console.error('Error sending registration confirmation email:', emailError);
            } else {
                console.log('Registration confirmation email sent', info.response);
            }
        });

        res.status(201).json({ message: 'User registered successfully', token: token });
    } catch (error) {
        console.error('Error register: ', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}