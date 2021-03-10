const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(process.cwd(), '.env') });

const app = express();

const apiRouter = require('./route/api.router');
const { PORT, MONGO_DB } = require('./config/config');

_connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

// eslint-disable-next-line no-unused-vars
// app.use('*', (err, req, res, next) => {
//     res
//         .status(err.status)
//         .json({
//             Error: err.message,
//         });
// });

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
