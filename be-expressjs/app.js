const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/route.js');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
var cors = require('cors')

app.use(cors())

app.use(express.json());

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
