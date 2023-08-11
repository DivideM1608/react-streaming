import React from 'react';
import { useParams } from 'react-router-dom';
import VideoStreamer from '../components/VideoStreamer';

function VideoPage({ videos }) {
  const { videoId } = useParams();
  const selectedVideo = videos.find(video => video.id === parseInt(videoId));
  const magnetLink = selectedVideo ? selectedVideo.magnetLink : '';

  return (
    <div>
      <h1>Video Streaming Page</h1>
      <h1>Video ID: {magnetLink}</h1>
      <VideoStreamer magnetLink={magnetLink} />
    </div>
  );
}

export default VideoPage;
