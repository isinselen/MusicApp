import axios from "axios";

export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/user");
  },
  
  // Saves a book to the database
  createUser: function(name) {
    return axios.post("/api/user", name);
  },
  saveSearch: function(artist,song) {
    return axios.post("api/search", {artist:artist, song:song})
  },
  
};
