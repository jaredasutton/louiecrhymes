import React from 'react';
import VideoProvider from './VideoProvider.jsx';
import Header from './Header.jsx';
import VideoList from './VideoList.jsx';
import PlatformList from './PlatformList.jsx';

export default props => (
  <VideoProvider value={{ videos: [] }}>
    <Header />
    <PlatformList />
    <VideoList />
  </VideoProvider>
);
