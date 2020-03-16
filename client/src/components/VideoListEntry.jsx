import React, { useEffect } from 'react';

const VideoListEntry = ({ video, isFirst }) => {
  // console.log('imhere');
  return (
    <div
      data-src={`https://www.youtube.com/watch?v=${video.id.videoId}`}
      className="video-list-entry media lgal-item"
    >
      <img
        className="media-object"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title}
      />
      <br />
      <div dangerouslySetInnerHTML={{ __html: `${video.snippet.title}` }} />
    </div>
  );
};

export default VideoListEntry;
