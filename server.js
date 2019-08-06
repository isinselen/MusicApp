const express = require("express");
const mongoose = require("mongoose");
const path = require("path")
// const routes = require("./routes");

const db = require('./models')
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
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MusicApp");

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.get('/signup', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// Routes
app.get("/user/:userId", function (req, res) {
  const userId = req.params.userId
  db.User.findById({ _id: userId })
    // Specify that we want to populate the retrieved users with any associated notes
    .populate("searches")
    .then(function (dbUser) {
      // If able to successfully find and associate all Users and Notes, send them back to the client
      console.log('GOT USER', dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

app.post("/user", function (req, res) {
  const name = req.body.name
  db.User.create({ name: name })
    .then(function (dbUser) {
      // This should either return a full user object, or just the userId of the newly created user
      console.log('CREATED USER', dbUser)
      res.json(dbUser);
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

app.put("/user/addSearch", function (req, res) {
  const info = {
    userId: req.body.userId,
    artist: req.body.artist,
    song: req.body.song,
  }
  db.User.findById({ _id: info.userId })
    // Specify that we want to populate the retrieved users with any associated searches
    .populate("searches")
    .then(function (dbUser) {
      console.log('GOT USER TO UPDATE', dbUser)
      let user = dbUser
      user.searches.push({ artist: info.artist, song: info.song })
      db.User.findOneAndUpdate({ _id: info.userId }, { searches: user.searches }, { new: true })
        .then(result => {
          console.log('result', result)
          res.json(result);
        })
    })
    .catch(function (err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

