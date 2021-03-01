const express = require('express');
const mongoose = require('mongoose');

const app = express();

const apiRouter = require('./route/api.router');

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('Server work');
});

function _connectDB() {
    mongoose.connect('mongodb://localhost:27017/my-app', { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (error) => {
        console.log(error);
    });
}
