import React, { useState } from 'react';
import VideoProvider from './VideoProvider.jsx';
import Header from './Header.jsx';
import VideoList from './VideoList.jsx';
import withIcons from './withIcons.jsx';

const PlatformList = withIcons('platform', 'icon-list flex-container');
const SocialList = withIcons('social', 'icon-list flex-container');

export default props => {
  return (
    <VideoProvider value={{ videos: [] }}>
      <Header />
      <SocialList />
      <PlatformList />
      <VideoList />
    </VideoProvider>
  );
};
