import React from 'react';
import mic from '../img/microphone.svg';
import Button from '@material-ui/core/Button';

const RecordButton = ({ children, isRecording, onClick }) => {
  return <>
    <Button onClick={onClick}>
      {isRecording ?
        <div style={{ background: '#fff', borderRadius: 20, width: 65, height: 65 }} /> :
        <img src={mic} alt="Record with a microphone" />
      }
    </Button>
    {children}
  </>
};

export default RecordButton;
