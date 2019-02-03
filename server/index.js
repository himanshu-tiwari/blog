const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// connect to mongodb
const { name, port, username, password, collection } = config.development.database;
mongoose.connect(`mongodb://${username}:${password}@${name}:${port}/${collection}`, { useNewUrlParser: true }).catch(err => console.log(err));
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes/index'));

// Error handling middleware
app.use((err, req, res, next) => res.status(422).send({error: err.message}));

app.listen(process.env.port || 4000, () => {
    console.log("Listening to requests!");
});