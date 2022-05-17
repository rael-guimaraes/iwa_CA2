const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParcer = require("body-parser"),
        mongoose = require("mongoose");
        cors = require("cors");

let app = express();
let port = process.env.PORT || 8000;

app.use(bodyParcer.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(require('./routes'));
app.use(logger("tiny"));
app.use(cors({origin: '*'}));

const dbURI = "mongodb://localhost/test";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err)); 

app.listen(port, function(err){
    console.log("Listening on port: " + port)
});