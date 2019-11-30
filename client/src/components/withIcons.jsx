import React, { useState, useEffect } from 'react';
import { get } from 'axios';
import imageToURL from '../helper/imageToURL.json';

export default function withIconsHOC(linkFamily, classes) {
  return function(props) {
    return (
      <div className={classes}>
        {Object.keys(imageToURL[linkFamily]).map(path => (
          <a key={path} href={imageToURL[linkFamily][path]}>
            <img alt={path} src={`/img/${linkFamily}/${path}`} />
          </a>
        ))}
      </div>
    );
  };
}
