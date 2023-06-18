const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// create express app
const app = express();

// Enable CORS
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Defining some mock data for the purpose of example
const secrets = {
    apiSecret: "hidden_secret",
    userCredentials: {
        username: "user",
        password: "pass"
    },
    adminCookie: "admin_cookie",
    sourceCode: "source_code",
    awsCredentials: {
        accessKeyId: "access_key_id",
        secretAccessKey: "secret_access_key"
    }
};

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to CTF challenge application."});
});

app.post('/api/secret', (req, res) => {
    // Check for the correct request here
    res.json(secrets.apiSecret);
});

app.get('/user/login', (req, res) => {
    // Implement the login functionality here
});

app.post('/xss', (req, res) => {
    // Implement the XSS vulnerability here
});

app.get('/ssrf', (req, res) => {
    // Implement the SSRF vulnerability here
});

app.post('/api/deserialization', (req, res) => {
    // Implement the deserialization vulnerability here
});

app.get('/metadata', (req, res) => {
    // Implement the AWS metadata exposure here
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
