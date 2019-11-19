import React from 'react';

const VideoListEntry = ({ video, handleVideoTitleClick }) => (
  <a
    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
    className="video-list-entry media"
  >
    <img
      className="media-object"
      src={video.snippet.thumbnails.default.url}
      alt={video.snippet.title}
    />
    {video.snippet.title}
  </a>
);

export default VideoListEntry;