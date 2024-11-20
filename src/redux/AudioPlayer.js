import React from 'react';
import  { useEffect, useRef } from 'react';

const AudioPlayer = ({ playAudio }) => {
  const audioRef = useRef(new Audio('/path/to/your/audio/file.mp3'));

  useEffect(() => {
    if (playAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playAudio]);

  return null; // Render nothing as audio is controlled through code
};

export default AudioPlayer;
