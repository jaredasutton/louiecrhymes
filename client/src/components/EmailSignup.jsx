import React, { useState } from 'react';
import isValidEmail from '../helper/isValidEmail.js';
import { post } from 'axios';
export default function EmailSignup() {
  let [emailValidity, setEmailValidity] = useState(false);
  let [emailInput, setEmailInput] = useState('');
  return (
    <div id="email-signup-box">
      Join the mailing list and get access to exclusive videos, freestyles, and
      new Louie C content before public release:
      <br />
      <br />
      <input
        onChange={e => {
          setEmailValidity(isValidEmail(e.target.value));
          setEmailInput(e.target.value);
        }}
        type="email"
        placeholder="email@ddress.com"
      ></input>
      {emailValidity && (
        <button
          type="button"
          onClick={() =>
            post(`/email-subscription`, {
              emailAddress: emailInput
            })
          }
        >
          Sign Me Up
        </button>
      )}
    </div>
  );
}
