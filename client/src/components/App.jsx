import React from 'react';
import VideoProvider from './VideoProvider.jsx';
import Header from './Header.jsx';
import VideoList from './VideoList.jsx';
import withIcons from './withIcons.jsx';

const PlatformList = withIcons('platform');
const SocialList = withIcons('social');

export default props => (
  <VideoProvider value={{ videos: [] }}>
    <Header />
    <SocialList />
    <PlatformList />
    <VideoList />
  </VideoProvider>
);
