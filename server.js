// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Reserved tables data
const reservations = [];

// Waitlist data
const waitListed = [];

// Routes
//===========================================================================

// Basic route to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route to go to add reservation page
app.get("/add", function(req,res) {
    res.sendFile(path.join(__dirname, "views" ,"reserve.html"));
});

// Route to go to booked reservations
app.get("/booked", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "booked.html"));
});

// Create a new reservation
app.post("/api/reservations", function(req, res) {
    let newReservation = req.body;
    console.log(newReservation);
    if (reservations.length < 5) {
        reservations.push(newReservation);
    } else {
        waitListed.push(newReservation);
    };
    res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });  