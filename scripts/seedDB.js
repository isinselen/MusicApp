const mongoose = require("mongoose");
const db = require("../models");

// This file empties the music collection and inserts the music below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const musicSeed = [
  {
    song: "Yesterday",
    singer: "The Beatles",
    album:
      "Yesterday and Today",
    year: new Date(Date.now())
  },
];

db.music
  .remove({})
  .then(() => db.music.collection.insertMany(musicSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
