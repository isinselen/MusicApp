import React, { useState } from "react";
import YouTube from 'react-youtube'
import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'
import API from "../../utils/API";
import "./style.css"

const Jumbotron = ({ user,updateSearches}) => {
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
    const promise1 = axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCOrYDn-Rpq-DIqgvv5naHsrsCfjPcqby4&q=${encodeURIComponent(song + ' - ' + artist)}&part=id`)

    const promise2 = axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get`, {
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
    

    return Promise.all([promise1, promise2])
      .then(results => {
        console.log('GOT SOME DATA FROM YOUTUBE', results[0])
        const firstVideoResult = results[0].data.items.find(item => item.id.kind === 'youtube#video')
        setVideoId(firstVideoResult.id.videoId)

        console.log('GOT MUSIXMATCH DATA', results[1].data.message.body.lyrics.lyrics_body)
        setVideoLyrics(results[1].data.message.body.lyrics.lyrics_body)
        console.log(artist)
        updateSearches(artist)
        if (user)
          API.updateUser(user._id, artist, song)
      })
  }

  return (
    <div>
      <div className="container text-center pt-5">
        <i className="fas fa-angle-double-down fa-3x animated swing delay-1s"></i>
      </div>

      <section style={{ background: '#EBF8FD', minHeight: '500px' }}>
        <div className="container">
          <div className="row">
            <div className="exampleClass col-12 text-center pt-3">
              <h3 id="1">MELODY Music App</h3>
              {
                videoId &&
                <YouTube
                  videoId={videoId}
                  opts={opts}
                  onReady={() => null}
                />
              }
              {
                videoLyrics &&
                <p>{videoLyrics}</p>
              }
              <input onChange={e => setArtist(e.target.value)} placeholder='artist' />
              <input onChange={e => setSong(e.target.value)} placeholder='song' />
              <button onClick={handleArtistSearch}><strong>SEARCH</strong></button>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Jumbotron;