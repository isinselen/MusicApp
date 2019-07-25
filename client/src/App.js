import React, { useState } from "react";
import YouTube from 'react-youtube'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import Books from "./pages/Books";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron"

function App() {
  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  const [artist, setArtist] = useState('')
  const [song, setSong] = useState('')
  const [videoId, setVideoId] = useState(null)
  const [videoLyrics, setVideoLyrics] = useState('')

  const handleArtistSearch = () => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOrYDn-Rpq-DIqgvv5naHsrsCfjPcqby4&q=${encodeURIComponent(song + ' - ' + artist)}&part=id`)
      .then(res => {
        console.log('GOT SOME DATA FROM YOUTUBE', res)
        const firstVideoResult = res.data.items.find(item => item.id.kind === 'youtube#video')
        setVideoId(firstVideoResult.id.videoId)
      })
      .catch(err => console.log('Error trying to get Youtube data', err))

    axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get`, {
      params: {
        format: 'jsonp',
        callback: 'jsonp_callback',
        apikey: '4841837f851469f3b5b537d381f89006',
        q_artist: artist,
        q_track: song
      },
      headers: { 'content-type': 'application/javascript' },
      adapter: jsonpAdapter,
    })
      .then(res => {
        console.log('GOT MUSIXMATCH DATA', res.data.message.body.lyrics.lyrics_body)
        setVideoLyrics(res.data.message.body.lyrics.lyrics_body)
      })
      .catch(err => console.log('Error getting Musixmatch data', err))
  }

  return (
    <div>
      <Nav />
     <Jumbotron />
      {/* {
        videoId &&
        <YouTube
          videoId={ videoId }
          opts={opts}
          onReady={ () => null }
        />
      }
      {
        videoLyrics &&
        <p>{ videoLyrics }</p>
      }
      <input onChange={ e => setArtist(e.target.value) } placeholder='artist' />
      <input onChange={ e => setSong(e.target.value) } placeholder='song' />
      <button onClick={ handleArtistSearch }>SEARCH FOR AN ARTIST'S SONG</button>
      */}
    </div>
  );
}

export default App;