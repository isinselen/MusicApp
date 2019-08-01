const axios = require ("axios");
const db = require("../models");

module.exports = {
    findAll: function(req, res){
        const params = Object.assign(
            {
                api_key: "4841837f851469f3b5b537d381f89006"
            },
            req.query
        );
        axios.get("https://api.musixmatch.com/ws/1.1/track.lyrics.get",{params})
        .then(response => {
            console.log("response from API: " +JSON.stringify(response));
        })
    }
}