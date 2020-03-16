require('dotenv').config();
const Subscriber = require('../../db/models/Subscriber.js');
const sendMail = require('../mail-notifications/index.js');
const {
  SUBSCRIBER_WELCOME_VIDEO_URL,
  SUBSCRIBER_WELCOME_VIDEO_TITLE
} = process.env;

const insert = function(req, res) {
  let { emailAddress } = req.body;
  Subscriber.insertOne(emailAddress)
    .then(async () => {
      res.sendStatus(201);
      const currentSubscriberList = await Subscriber.retrieveAll();
      sendMail({
        subject: 'New Mailing List Subscriber',
        html: `<h1>New Subscriber: <strong>${emailAddress}</strong></h1>
        <h3>Current Subscriber List:</h3>
        <p>${currentSubscriberList
          .map((sub, sI, sArr) => sub.emailAddress)
          .toString()}</p>
        `
      });
      sendMail({
        to: emailAddress,
        subject: 'Welcome to the Louie C Rhymes Fan Club!',
        html: `<h1>Enjoy your exclusive preview of the next Louie C Rhymes single:</h1>
        <b><a style="font-size:20px;" href="${SUBSCRIBER_WELCOME_VIDEO_URL}">${SUBSCRIBER_WELCOME_VIDEO_TITLE}</a></b>
        <br/>
        <div >
          <div>
            <p  style="margin:0in 0in 8pt;line-height:107%;font-size:11pt;font-family:&quot;Calibri&quot;,sans-serif">
              Thank you for supporting me and be sure to check my Instagram page every week for a new freestyle!<span>&nbsp; </span>Nothing but love homie!
              <span></span>
            </p>

            <p  style="margin:0in 0in 8pt;line-height:107%;font-size:11pt;font-family:&quot;Calibri&quot;,sans-serif">
              <span>&nbsp;</span>
            </p>

            <p  style="margin:0in 0in 8pt;line-height:107%;font-size:11pt;font-family:&quot;Calibri&quot;,sans-serif">
              Louis C Rhymes<span></span>
            </p>
          </div>
          <div>
            <br>
          </div>
          <div>
            <i><b>Follow Louie C Rhymes on all platforms!</b></i>
          </div>
          <div><br></div>
          <div>
            <b>Instagram</b> - <a href="https://www.instagram.com/louiecrhymes" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/louiecrhymes&amp;source=gmail&amp;ust=1583702806551000&amp;usg=AFQjCNGjY1ZeEe7diY6TDxMwpML5e18C7A">https://www.instagram.com/<wbr>louiecrhymes</a> <br></div><div><b>Twitter</b> - <a href="https://twitter.com/louiecrhymes" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://twitter.com/louiecrhymes&amp;source=gmail&amp;ust=1583702806552000&amp;usg=AFQjCNElf4UMC-KCC7d2kJgOuTKfSEXBhw">https://twitter.com/<wbr>louiecrhymes</a></div><div>
            <b>Facebook</b> - <a href="https://www.facebook.com/LouieCRhymes/" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/LouieCRhymes/&amp;source=gmail&amp;ust=1583702806552000&amp;usg=AFQjCNFLu91D0yZ9e0O0QVtFzG-_0TAEoQ">https://www.facebook.com/<wbr>LouieCRhymes/</a> <br></div><div><br></div><div><b>Spotify</b> - <a href="https://open.spotify.com/artist/66KoJjfcwO58ZfUmD0LxFe" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://open.spotify.com/artist/66KoJjfcwO58ZfUmD0LxFe&amp;source=gmail&amp;ust=1583702806552000&amp;usg=AFQjCNHN3sTrYajAFHSG6uRkFQlt_wragg">https://open.spotify.com/<wbr>artist/66KoJjfcwO58ZfUmD0LxFe</a> <br></div><div><b>SoundCloud</b> - <a href="https://soundcloud.com/louiecrhymes" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://soundcloud.com/louiecrhymes&amp;source=gmail&amp;ust=1583702806552000&amp;usg=AFQjCNE5ucqmWBZ2jJqP20QOA85MTSZ0rg">https://soundcloud.com/<wbr>louiecrhymes</a></div><div><b>Apple Music</b> - <a href="https://music.apple.com/us/artist/louie-c-rhymes/1481175799" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://music.apple.com/us/artist/louie-c-rhymes/1481175799&amp;source=gmail&amp;ust=1583702806552000&amp;usg=AFQjCNFXMljGwvACQoOHt07RH-lPIDS4JQ">https://music.apple.com/us/<wbr>artist/louie-c-rhymes/<wbr>1481175799</a>
          </div>
        </div>
        `
      });
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
};

module.exports = { insert };
