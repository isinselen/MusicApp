const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function Music (music){
  var publicKey = 'AIzaSyCOrYDn-Rpq-DIqgvv5naHsrsCfjPcqby4'

  var queryURL = "https://www.googleapis.com/youtube/v3/search=" + music;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log("FINISH SEARCHING FOR MUSIC:",music);
    for (var i = 0; i < response.items.length; i++) {
      var musicInfo = {
        Type:"music",
        Song: response.items[i].volumeInfo.song,
        Singer: response.items[i].volumeInfo.singer,
        Album: response.items[i].volumeInfo.imageLinks.thumbnail,
        Year:response.items[i].volumeInfo.publishedDate
      }
      console.log("music Info: " +musicInfo);
      user.push(musicInfo);
    }
  })
}


const music = mongoose.model("Music", musicSchema);

module.exports = Music;
