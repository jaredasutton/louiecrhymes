import React from 'react';
import VideoProvider from './VideoProvider.jsx';
import Header from './Header.jsx';
import VideoList from './VideoList.jsx';
import withIcons from './withIcons.jsx';
import BannerAd from './BannerAd.jsx';

const PlatformList = withIcons('platform', 'icon-list flex-container');
const SocialList = withIcons('social', 'icon-list flex-container');

export default function AppBody() {
  return (
    <div id="app-body">
      <VideoProvider value={{ videos: [] }}>
        <Header />
        <SocialList />
        <PlatformList />
        <BannerAd d={3} />

        <VideoList />
      </VideoProvider>
    </div>
  );
}
