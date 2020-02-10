import React, { useState } from 'react';
import isValidEmail from '../helper/isValidEmail.js';
import { post } from 'axios';
export default function EmailSignup({ closeModal }) {
  let [emailValidity, setEmailValidity] = useState(false);
  let [emailInput, setEmailInput] = useState('');
  let [signupCompletion, setSignupCompletion] = useState(false);
  return (
    <div id="email-signup-box">
      {signupCompletion ? (
        <div>Success! You're a Louie C Rockstar.</div>
      ) : (
        <div>
          Join the mailing list and get access to exclusive videos, freestyles,
          and new Louie C content before public release:
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
                  .then(() => {
                    localStorage.setItem('emailSubscribed', true);
                    setSignupCompletion(true);
                    setTimeout(closeModal, 2000);
                  })
                  .catch(err => {
                    console.error(err);
                  })
              }
            >
              Sign Me Up
            </button>
          )}
        </div>
      )}
    </div>
  );
}
