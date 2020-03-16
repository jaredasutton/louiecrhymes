import React, { useState, useEffect } from 'react';
import { get } from 'axios';

export default function BannerAd() {
  let [imgSrcArr, setImgSrcArr] = useState([]);
  let [href, setHref] = useState('#');
  let [imgSrcI, setImgSrcI] = useState(0);
  useEffect(() => {
    async function getAndUpdateBannerSrcArr() {
      let i = 0;
      const { data: gottenAd } = await get('/banner-ad').catch(err => {
        console.error(err);
        return { data: { href: '#', imgSrcArr: [] } };
      });
      setImgSrcArr(gottenAd.imgSrcArr);
      setHref(gottenAd.href);
      if (gottenAd.imgSrcArr.length > 0) {
        setInterval(function() {
          setImgSrcI(++i % gottenAd.imgSrcArr.length);
        }, 1000);
      }
    }
    getAndUpdateBannerSrcArr();
  }, []);
  return (
    <>
      {imgSrcArr.length > 0 ? (
        <div className="flex-container banner-ad">
          <a href={href} target="blank">
            <img src={`/banner-ad/${imgSrcArr[imgSrcI]}`} />
          </a>
        </div>
      ) : null}
    </>
  );
}
