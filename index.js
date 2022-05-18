const   http = require("http"),
        logger = require("morgan"),
        express = require("express"),
        bodyParcer = require("body-parser"),
        mongoose = require("mongoose"),
        dotenv = require("dotenv");     
        cors = require("cors");

let app = express();
let port = process.env.PORT || 8000;

dotenv.config();

app.use(bodyParcer.json());
app.use(function (req, res, next) {

    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});
app.use(require('./routes'));
app.use(logger("tiny"));
app.use(cors({origin: '*'}));

mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err)); 

app.listen(port, function(err){
    console.log("Listening on port: " + port)
});