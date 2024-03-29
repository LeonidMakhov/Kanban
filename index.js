const express = require('express'); // import express from 'express'; (можно установить бабаель)
const routes = require('./routes');
const bodyParser = require('./bodyParser');

const app = express()
const PORT = process.env.PORT || 5000;

bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
