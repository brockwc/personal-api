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
};



//===========
// ROUTES
//===========
// serve static files from the public dir
app.use(express.static('public'));

// HTML Endpoints
app.get('/', homepage = (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// JSON API Endpoints
// endpoint for general API instructions
app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to my personal api! Here's what you need to know!",
        documentationUrl: "https://github.com/brockwc/personal-api",
        baseUrl: "https://obscure-hollows-79375.herokuapp.com/",
        endpoints: [
            {method: "GET", path: "/api", description: "Describes all available endpoints"},
            {method: "GET", path: "/api/profile", description: "Data about me"},
            {method: "GET", path: "/api/bonsai", description: "Data collection containing all of my trees"},
            {method: "POST", path: "/api/bonsai", description: "Create a new campsite bonsai document"},
            {method: "PUT", path: "/api/bonsai/:id", description: "Edit a previous bonsai entry and update it"},
            {method: "DELETE", path: "/api/bonsai/:id", description: "Remove a bonsai"}
        ]
    });
});

// profile endpoint
app.get('/api/profile', (req, res) => {
    res.json(brock);
});

// bonsai index endpoint
app.get('/api/bonsai', (req, res) => {
    // find all bonsai

    // return as json
});

//===========
// SERVER
//===========
app.listen(process.env.PORT || 3000, () => {
    console.log("Express server is up and running...");
});
