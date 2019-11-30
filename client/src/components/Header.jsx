import React, { useState } from 'react';
import Minibanner from './Minibanner.jsx';

export default function Header() {
  let [showMinibanner, setShowMinibanner] = useState(false);
  document.onscroll = function(e) {
    setShowMinibanner(
      window.scrollY > document.querySelector('header img').height
    );
  };
  return (
    <header>
      <Minibanner show={showMinibanner} />
      <img src="/img/louiecbanners7.png" className="header-banner-img" />
    </header>
  );
}
