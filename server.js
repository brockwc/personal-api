// require express and modules
const express = require('express');
const app = express();

// parse form data and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//===========
// DATABASE
//===========

// const db = require('/models');

//===========
// ROUTES
//===========


const brock = {
    name: "Brock Whitbread-Cole",
    githubUsername: "brockwc",
    githubLink: "https://github.com/brockwc",
    githubProfileImage: "https://avatars1.githubusercontent.com/u/5716196?s=400&v=4",
    personalSiteLink: "http://brockwc.github.io/",
    currentCity: "San Francisco, CA",
    pets: [
        {
            name: "Fern",
            species: "Cat",
            dateOfBirth: "April 2017"
        },
        {
            name: "Wilbur",
            species: "Cat",
            dateOfBirth: "April 2018"
        }
    ]
}

// Set up server
app.listen(process.env.PORT || 3000);
