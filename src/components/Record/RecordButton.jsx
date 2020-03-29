import React from 'react';
import mic from '../../img/microphone.svg';
import Button from '@material-ui/core/Button';
import './record.css';

const RecordButton = ({ mode, isRecording, onClick, blobURL, upload }) => {
  const Mode = {
    WAITING: 0,
    RECORDING: 1,
    RECORDED: 2
  };

  const GetModeText = () => {
    switch (mode) {
      case Mode.RECORDING:
        return <p>Tap to stop recording</p>;

      case Mode.RECORDED:
        return <p>Tap to record again</p>;

      case Mode.WAITING:
      default:
        return <p>Tap to record a message</p>;
    }
  };

  return (
    <>
      {mode === Mode.RECORDED && (
        <div className='send'>
          <audio src={blobURL} controls='controls' />
          <Button onClick={upload}>Send this voice! </Button>
        </div>
      )}
      <Button onClick={onClick}>
        {isRecording ? (
          <div
            style={{
              background: '#fff',
              borderRadius: 20,
              width: 65,
              height: 65
            }}
          />
        ) : (
          <img src={mic} alt='Record with a microphone' height={'48px'} />
        )}
      </Button>
      {GetModeText()}
    </>
  );
};

export default RecordButton;
