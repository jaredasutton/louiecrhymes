import React from 'react';

const VideoListEntry = ({ video, handleVideoTitleClick }) => (
  <a
    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
    className="video-list-entry media"
  >
    <img
      className="media-object"
      src={video.snippet.thumbnails.high.url}
      alt={video.snippet.title}
    />
    <br />
    <div>{video.snippet.title}</div>
  </a>
);

export default VideoListEntry;
