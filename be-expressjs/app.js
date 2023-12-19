const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/route.js');
const cors = require('cors');
const bodyParser = require('body-parser')

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
