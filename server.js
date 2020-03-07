// Dependencies
const express = require("express");
const path = require("path");

// Sets up the Express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Object containing reservations and waitlist entries
const customers = {
    reservations: [],
    waitListed: [],
}


// Routes
//===========================================================================

// Basic route to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route to go to add reservation page
app.get("/reserve", function(req,res) {
    res.sendFile(path.join(__dirname, "views" ,"reserve.html"));
});

// Route to go to booked reservations
app.get("/booked", function(req, res) {
    res.sendFile(path.join(__dirname, "views", "booked.html"));
});

app.get("/api/customers", function(req, res) {
    return res.json(customers);
  });

// Create a new reservation
app.post("/api/reservations", function(req, res) {
    let newReservation = req.body;
    console.log(newReservation);
    if (customers.reservations.length < 5) {
        customers.reservations.push(newReservation);
    } else {
        customers.waitListed.push(newReservation);
    };
    res.json(newReservation);
    console.log(customers.reservations)
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });  