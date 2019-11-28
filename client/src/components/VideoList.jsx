import React, { useEffect } from 'react';
import withVideos from './withVideos.jsx';
import VideoListEntry from './VideoListEntry.jsx';

const VideoList = ({ videos, handleVideoTitleClick }) => {
  useEffect(() => {
    lightGallery(document.getElementById('video-list'));
  }, [videos.length]);

  let videoListEntries = videos.map((video, vi, videos) => (
    <VideoListEntry key={video.id.videoId} video={video} />
  ));

  return (
    <div id="video-list" className="video-list grid-container">
      {videoListEntries}
    </div>
  );
};

export default withVideos(props => <VideoList {...props} />);
