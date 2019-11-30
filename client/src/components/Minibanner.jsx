import React from 'react';
import withIcons from './withIcons.jsx';
const IconsList = withIcons('social', 'minibanner-icons');
const PlatformList = withIcons('platform', 'minibanner-icons');

export default function Minibanner({ show }) {
  return (
    <div className={`minibanner show-${show}`}>
      <IconsList />
      <div>LOUIE C RHYMES</div>
      <PlatformList />
    </div>
  );
}
