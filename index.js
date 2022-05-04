const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParcer = require("body-parser"),
        mongoose = require("mongoose");
        cors = require("cors");

let app = express();
let port = process.env.PORT || 8000;

app.use(bodyParcer.json());
app.use(require('./routes'));
app.use(logger("tiny"));
app.use(cors({origin: 'http://localhost:4200'}));

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err)); 

app.listen(port, function(err){
    console.log("Listening on port: " + port)
});