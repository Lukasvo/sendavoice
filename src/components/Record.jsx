import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import RecordButton from './RecordButton';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Record = () => {
  const Mode = {
    WAITING: 0,
    RECORDING: 1,
    RECORDED: 2,
  };

  const [mode, setMode] = useState(Mode.WAITING);
  const [blobURL, setBlobUrl] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);

  const start = () => {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked(false);
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked(true);
      },
    );

    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          console.log('Set recording')
          setMode(Mode.RECORDING);
        }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setBlobUrl(URL.createObjectURL(blob));
        setMode(Mode.RECORDED);
      }).catch((e) => console.log(e));
  };

  const CurrentModeRender = () => {
    switch (mode) {
      case Mode.RECORDING:
        return <RecordButton onClick={stop} isRecording={true}>
          <p>Tap to stop recording</p>
        </RecordButton>;

      case Mode.RECORDED:
        return <audio src={blobURL} controls="controls" />;

      case Mode.WAITING:
      default:
        return <RecordButton onClick={start} isRecording={false}>
          <p>Tap to record a message</p>
        </RecordButton>;
    }
  };

  return <>
    <h1>Share a recording to elderly people and donate to support them</h1>

    <CurrentModeRender/>
  </>
};

export default Record;
