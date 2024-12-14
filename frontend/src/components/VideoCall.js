import React, { useRef, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const VideoCall = ({ roomId }) => {
  const [stream, setStream] = useState();
  const myVideo = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    socket.emit('joinRoom', roomId);

    return () => socket.disconnect();
  }, [roomId]);

  return (
    <div>
      <h2 className="text-2xl font-bold">Video Call</h2>
      <video ref={myVideo} autoPlay playsInline className="rounded-lg" />
    </div>
  );
};

export default VideoCall;
