import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
// import axios from "axios";
// function getLyrics(){

//   var artistSearch = document.getElementById("artistSearch").value;
//   console.log("article search: " +artistSearch);
//   document.getElementById("lyrics").textContent = "";
//     $.ajax({
//       type: "GET",
//       data: {
//           apikey:"44841837f851469f3b5b537d381f89006",
//           q_artist: artistSearch,
//           format:"jsonp",
//           callback:"jsonp_callback"
//       },
//       url: "https://api.musixmatch.com/ws/1.1/track.search",
//       dataType: "jsonp",
//       jsonpCallback: 'jsonp_callback',
//       contentType: 'application/json',
//       success: function(data) {
//           console.log(data); 
//           console.log(data.message.body.track_list[0].track.album_coverart_350x350)
//           console.log(data.message.body.track_list[0].track.lyrics_id)
//           var rand = data.message.body.track_list[Math.floor(Math.random() * data.message.body.track_list.length)];
//           console.log(rand.track.track_id)
//           var thisTrack = (rand.track.track_id)
//           var thisPic = rand.track.album_coverart_350x350;
//           console.log(thisPic)
  
//           var p = document.createElement("p");
//           p.textContent = thisTrack;
//           p.id = thisTrack;
  
//           var img = document.createElement("img")
//           img.setAttribute("src",thisPic)
  
//           document.getElementById("lyrics").appendChild(p).style.opacity = 0;
//           document.getElementById("lyrics").appendChild(img);
//           document.getElementById("ghost").click();
  
//       },
//       error: function(jqXHR, textStatus, errorThrown) {
//           console.log(jqXHR);
//           console.log(textStatus);
//           console.log(errorThrown);
//       }    
//     });
//    };
  
  
//    function getLyricsNow(){
//       var trackId = document.getElementById("lyrics").textContent;
//       console.log(trackId)
//     $.ajax({
//       type: "GET",
//       data: {
//           apikey:"4841837f851469f3b5b537d381f89006",
//           track_id: trackId,
//           format:"jsonp",
//           callback:"jsonp_callback"
//       },
//       url: "https://api.musixmatch.com/ws/1.1/track.lyrics.get",
//       dataType: "jsonp",
//       jsonpCallback: 'jsonp_callback',
//       contentType: 'application/json',
//       success: function(data) {
//          console.log(data); console.log(data.message.body.lyrics.lyrics_body); 
//         var lyricsBody = data.message.body.lyrics.lyrics_body.split(/\s+/).slice(0,100).join(" ")+ "...";
         
//           var j = document.createElement("p")
//           j.textContent = lyricsBody
//           document.getElementById("lyrics").appendChild(j)
//       },
//       error: function(jqXHR, textStatus, errorThrown) {
//           console.log(jqXHR);
//           console.log(textStatus);
//           console.log(errorThrown);
//       }    
//     });
//    };