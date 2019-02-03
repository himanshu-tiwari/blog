const express = require('express');

const app = express();

// initialize routes
app.use('/api', require('./routes/index'));

app.listen(process.env.port || 4000, () => {
    console.log("Listening to requests!");
});