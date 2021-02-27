const express = require('express');

const app = express();

const apiRouter = require('./route/api.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRouter);

app.listen(5000, () => {
    console.log('Server work');
});
