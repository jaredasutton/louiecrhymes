import React from 'react';

export default function HeadlineVideo({}) {
  return (
    <div
      className="lgal-item headline-video video-list-entry"
      style={{
        backgroundImage: `url(${process.env.CURRENT_HEADLINE_SINGLE_IMG})`
      }}
      data-src={process.env.CURRENT_HEADLINE_SINGLE_HREF}
    >
      <div>
        <span className="text">Louie C's Newest Single</span>
      </div>
      <div>
        <span className="text">
          {process.env.CURRENT_HEADLINE_SINGLE_TITLE}
        </span>
      </div>
    </div>
  );
}
