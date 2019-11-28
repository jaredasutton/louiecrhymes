import React, { useState, useEffect } from 'react';
import { get } from 'axios';
import imageToURL from '../helper/imageToURL.json';

export default props => {
  let [platformImagePaths, setPlatformImagePaths] = useState([]);
  useEffect(() => {
    get('/platforms').then(({ data }) => {
      setPlatformImagePaths(data);
    });
  }, []);
  return (
    <div className="platform-list flex-container">
      {platformImagePaths.map(path => (
        <a key={path} href={imageToURL[path]}>
          <img key={path} alt={path} src={`/img/platforms/${path}`} />
        </a>
      ))}
    </div>
  );
};
