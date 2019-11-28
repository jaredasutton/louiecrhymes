import React, { useState, useEffect } from 'react';
import { get } from 'axios';
import imageToURL from '../helper/imageToURL.json';

export default linkFamily => props => {
  let [imagePaths, setImagePaths] = useState([]);
  useEffect(() => {
    get(`/links/${linkFamily}`).then(({ data }) => {
      setImagePaths(data);
    });
  }, []);
  return (
    <div className={`icon-list flex-container`}>
      {imagePaths.map(path => (
        <a href={imageToURL[path]}>
          <img key={path} alt={path} src={`/img/${linkFamily}/${path}`} />
        </a>
      ))}
    </div>
  );
};
