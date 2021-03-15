const dotenv = require('dotenv');
const experess = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config({ path: path.join(process.cwd(), '.env') });

const { MONGO_DB, PORT } = require('./config/config');

const app = experess();

_connectDb();

const { apiRouter } = require('./router');

app.use(fileUpload);
app.use(experess.json());
app.use(experess.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.listen(PORT, () => console.log('Server work'));

function _connectDb() {
    mongoose.connect(MONGO_DB, { useNewUrlParser: true, useUnifiedTopology: true });

    const { connection } = mongoose;

    connection.on('error', (err) => console.log(err));
}
