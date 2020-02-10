import React from 'react';
import EmailSignup from './EmailSignup.jsx';
import isPartOfModalBody from '../helper/isPartOfModalBody.js';

export default function Modal({ children, setVisibility }) {
  return (
    <div
      id="modal"
      onClick={e => {
        setVisibility(isPartOfModalBody(e.target));
      }}
    >
      <div id="modal-body">
        <div id="modal-header">
          <img
            src="/img/louiecbanners7.png"
            className="modal-header-banner-img"
          />
        </div>
        <div id="modal-content">
          <EmailSignup closeModal={() => setVisibility(false)} />
        </div>
      </div>
    </div>
  );
}
