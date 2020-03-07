// Dependencies
let express = require("express");
let path = require("path");

// Sets up the Express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reserved tables data
let reservations = [];

// Waitlist data
let waitListed = [];