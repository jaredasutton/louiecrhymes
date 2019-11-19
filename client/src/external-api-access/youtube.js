import { get } from 'axios';
export default options => {
  let queryData = {
    key: process.env.YT_KEY,
    part: 'snippet',
    type: 'video',
    videoEmbeddable: 'true',
    channelId: process.env.YT_CHANNELID,
    order: 'date',
    maxResults: 10
  };
  if (options.pageToken) queryData.pageToken = options.pageToken;
  return get('https://www.googleapis.com/youtube/v3/search', {
    params: queryData
  }).then(({ data }) => data.items);
};
