const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

routes(app);

const server = app.listen(4000, function () {
    console.log(`Magic 8 Ball server listening at ${server.address().port}!`);
});