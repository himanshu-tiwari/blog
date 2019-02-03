const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/index'));

app.listen(process.env.port || 4000, () => {
    console.log("Listening to requests!");
});