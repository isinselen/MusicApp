const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
db.User.create({ name: "Ernest Hemingway" })
  .then(function (dbUser) {
    console.log(dbUser);
  })
  .catch(function (err) {
    console.log(err.message);
  });

// Routes

// Route for retrieving all Notes from the db
app.get("/searches", function (req, res) {
  // Find all Notes
  db.Search.find({})
    .then(function (dbSearch) {
      // If all Notes are successfully found, send them back to the client
      res.json(dbSearch);
    })
    .catch(function (err) {
      // If an error occurs, send the error back to the client
      res.json(err);
    });
});

// Route for retrieving all Users from the db
app.post("/user", function (req, res) {
  const userInfo = req.body
  if (userInfo.userId) {
    // Find all Users
    db.User.findById({ _id:userInfo.userId })
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("searches")
      .then(function (dbUser) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser);
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  } else {
    db.User.create({ name: userInfo.name })
    .then(function (dbUser) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      console.log(dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
  }

});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

