const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParcer = require("body-parser"),
        mongoose = require("mongoose");

let app = express();
let port = process.env.PORT || 8000;

app.use(require('./routes'));
app.use(bodyParcer.json());
app.use(logger("tiny"));

mongoose.connect('mongodb://localhost/test');

mongoose.connection.on('error', (err) => {
    console.log('Mongodb Error: ', err);
    process.exit();
});
mongoose.connection.on('connected', () => {
    console.log('Mongodb is connected');
})

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));

app.listen(port, function(err){
    console.log("Listening on port: " + port)
});