import React, { useEffect } from 'react';
import withVideos from './withVideos.jsx';
import VideoListEntry from './VideoListEntry.jsx';
import HeadlineVideo from './HeadlineVideo.jsx';

const VideoList = ({ videos, handleVideoTitleClick }) => {
  useEffect(() => {
    if (videos.length > 0) {
      lightGallery(document.getElementById('video-list'), {
        selector: '.lgal-item'
      });
    }
  }, [videos.length]);

  let videoListEntries = videos.map((video, vi, videos) => {
    return <VideoListEntry key={video.id.videoId} video={video} />;
  });

  return (
    <div id="video-list" className="video-list">
      {videos.length > 0 && <HeadlineVideo video={videos[0]} />}
      <div className={'grid-container'}>{videoListEntries}</div>
    </div>
  );
};

export default withVideos(props => <VideoList {...props} />);
