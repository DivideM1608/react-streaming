// src/VideoList.js
import React from 'react';
import { Link } from 'react-router-dom';


function VideoList({videos}) {
  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <Link to={`/video/${video.id}`}>{video.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
