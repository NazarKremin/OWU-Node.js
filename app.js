const express = require('express');
const mongoose = require('mongoose');

const app = express();

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
