import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoList from './components/VideoList';
import VideoPage from './pages/VideoPage';
import './App.css';

const videos = [
  { id: 1, title: 'Video 1', magnetLink: 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent' },
  { id: 2, title: 'Video 2', magnetLink: 'magnet:?xt=urn:btih:E2469F0C86FB78B8F52CF68BA8F0D354829A0B00&dn=Animal%20Farm%20%281954%29%20%5bBluRay%5d%20%5b720p%5d%20%5bYTS.LT%5d&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969%2fannounce&tr=%2audp%3a%2f%2f9.rarbg.com%3a2710%2fannounce&tr=udp%3a%2f%2fp4p.arenabg.com%3a1337&tr=udp%3a%2f%2ftracker.internetwarriors.net%3a1337&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=wss%3a%2f%2fwstracker.online' },
  // Add more videos
];

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Pass the videos array to VideoList */}
          <Route path="/" element={<VideoList videos={videos} />} />
          {/* Use outlet to render VideoPage */}
          <Route path="/video/:videoId/*" element={<VideoPage videos={videos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
