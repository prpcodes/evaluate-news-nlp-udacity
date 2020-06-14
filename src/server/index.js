const path = require('path')
const express = require('express')
const cors = require("cors") // import cors
const app = express()
const aylien  = require('aylien_textapi');
let apiResponseP = "";
let apiResponseS = "";


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
//get API Key
const dotenv = require('dotenv');
dotenv.config();

// set aylien API credentias
const textapi = new aylien ({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});
console.log(`::: API key is ${process.env.API_ID}`);
console.log(`::: API key is ${process.env.API_KEY}`);

app.use(cors()) // Use it as the middleware
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/

app.post('/article', function (req, res){
    textapi.sentiment({
        url: req.body.text
    },function(error, response){
        res.send(response);
    });
})
