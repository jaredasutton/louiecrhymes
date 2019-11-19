import React, { useState, useEffect } from 'react';
import Context from '../context/Context';
import getVideos from '../external-api-access/youtube';

export default ({ children }) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos({}).then(setVideos);
  }, []);
  return <Context.Provider value={videos}>{children}</Context.Provider>;
};
