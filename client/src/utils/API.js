import axios from "axios";

export default {
  // Gets all books
  getUser: function(userId) {
    return axios.get(`/user/${userId}`);
  },
  
  // Saves a book to the database
  createUser: function(name) {
    return axios.post("/user", { name: name })
  },
  updateUser: function(userId, artist, song) {
    return axios.put("/user/addSearch", { userId: userId, artist: artist, song: song })
  },
  
};
