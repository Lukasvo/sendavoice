import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import RecordButton from './Record/RecordButton';
import './Record/record.css';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const Record = () => {
  const Mode = {
    WAITING: 0,
    RECORDING: 1,
    RECORDED: 2
  };

  const [mode, setMode] = useState(Mode.WAITING);
  const [blobURL, setBlobUrl] = useState('');
  const [file, setFile] = useState('');
  const [isBlocked, setIsBlocked] = useState(false);
  const [isRecording, setRecording] = useState(false);

  const start = () => {
    setRecording(true);
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked(false);
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked(true);
      }
    );

    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder.start()
        .then(() => {
          console.log('Set recording');
          setMode(Mode.RECORDING);
        })
        .catch(e => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        setFile(new File(buffer, `recording-${Date.now()}.mp3`, {
          type: blob.type,
          lastModified: Date.now()
        }));
        setBlobUrl(URL.createObjectURL(blob));
        setMode(Mode.RECORDED);
      })
      .catch(e => console.log(e));
    setRecording(false);
  };

  const upload = () => {
    fetch("/.netlify/functions/uploadRecording", {
      method: 'POST',
      headers: {
        //"Content-Type": "You will perhaps need to define a content-type here"
      },
      body: file
    })
      .then(response => response.json())
      .then(json => {
        alert('🎤 Upload succeeded!')
      });
  };

  return (
    <div className='recording'>
      <h1>Share a recording to elderly people</h1>
      <RecordButton
        mode={mode}
        onClick={isRecording ? stop : start}
        isRecording={isRecording}
        blobURL={blobURL}
        upload={upload}
      />
    </div>
  );
};

export default Record;
