import React, { useState } from "react";
import YouTube from 'react-youtube'
import axios from 'axios'

import Books from "./pages/Books";
import Nav from "./components/Nav";

function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const [artist, setArtist] = useState('')
  const [videoId, setVideoId] = useState(null)

  const handleArtistSearch = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOrYDn-Rpq-DIqgvv5naHsrsCfjPcqby4&q=${encodeURIComponent(artist)}&part=id`)
      .then(res => {
        console.log('GOT SOME DATA FROM YOUTUBE', res)
        
      })
      .catch(err => console.log('Error trying to get Youtube data', err))
  }

  return (
    <div>
      <Nav />
      <Books />
      {
        videoId &&
        <YouTube
          videoId={ videoId }
          opts={opts}
          onReady={ () => null }
        />
      }
      
      <input onChange={ e => setArtist(e.target.value) } />
      <button onClick={ handleArtistSearch }>SEARCH FOR AN ARTIST</button>
    </div>
  );
}

export default App;