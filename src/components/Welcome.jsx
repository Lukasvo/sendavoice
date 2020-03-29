import React from 'react';
import ShadowIcon from './ShadowIcon';
import phone from '../img/phone.svg';
import bubbleSpeak from '../img/bubble-speak.svg';
import handWash from '../img/hand-wash.svg';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Welcome = () => {
  return <>
    <h1>Share a recording to elderly people</h1>

    <ul className="features">
      <li>
        <ShadowIcon>
          <img src={phone} alt="Phone" />
        </ShadowIcon>
        Introduce yourself and tell them why you are cheering them up
      </li>
      <li>
        <ShadowIcon>
          <img src={bubbleSpeak} alt="Conversation" />
        </ShadowIcon>
        Talk slowly, clearly and politely so that can hear and understand every word
      </li>
      <li>
        <ShadowIcon>
          <img src={handWash} alt="Wash" />
        </ShadowIcon>
        Help them stay safe by sharing good measures on confinement (e.g., wash your hand regularly)
      </li>
    </ul>

    <div style={{ textAlign: 'center' }}>
      <Button
        color="primary"
        component={Link}
        to="/chooseLanguage">Send a voice now !</Button>
    </div>
  </>
};

export default Welcome;
