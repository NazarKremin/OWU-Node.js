const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const app = express();

dotenv.config({ path: path.join(process.cwd(), '../.env') });

const apiRouter = require('./route/api.router');
const { PORT, MONGO_DB } = require('./config/config');

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

app.listen(PORT, () => {
    console.log(`Server Work ${PORT}`);
});

function _connectDB() {
    mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
