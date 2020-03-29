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

  const recordStyle = {
    border: '16px solid #d5d4fe',
    height: 172,
    width: 172,
    padding: 0,
  };

  const GetModeText = () => {
    switch (mode) {
      case Mode.RECORDING:
        return 'Tap to stop recording';

      case Mode.RECORDED:
        return 'Tap to record again';

      case Mode.WAITING:
      default:
        return 'Tap to record a message';
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
      <Button onClick={onClick} style={recordStyle}>
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
          <img src={mic} alt='Record with a microphone' style={{ height: 82 }} />
        )}
      </Button>
      <p style={{ fontWeight: 300, fontSize: 29 }}>{GetModeText()}</p>
    </>
  );
};

export default RecordButton;
