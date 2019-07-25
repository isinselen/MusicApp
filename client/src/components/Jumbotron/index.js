import React, { useState } from "react";
import YouTube from 'react-youtube'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'


function Jumbotron({ children }) {
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
    <div class="jumbotron jumbotron-fluid text-white">
    <div class="container text-center">
      <h2 class="display-4 pt-5 pb-3 animated fadeInLeftBig">
        Find the <strong>Music</strong> and the <strong>Video</strong> you're looking for! 
      </h2>
      <a href="#1"><button class="btn btn-primary">Artist</button></a> <a href="/post"><button class="btn btn-primary">Song</button></a>
    </div>
    <div class="container text-center pt-5">
      <i class="fas fa-angle-double-down fa-3x animated swing delay-1s"></i>
    </div>
  
  </div>
  <section style={{background: '#EBF8FD',  'min-height' : '500px'}}>
    
  
    <div class="container">
      <div class="row">
        <div class="col-12 text-center pt-3">
          <h3  id="1">MELODY Music App</h3>

          {
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
      <button onClick={ handleArtistSearch }><strong>SEARCH</strong></button>

        </div>
      </div>
  
  
 
    </div>
    </section>
</div>
  );
}

export default Jumbotron; 

