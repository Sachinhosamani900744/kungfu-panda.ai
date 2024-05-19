"use client";

import React from 'react';
import ReactPlayer from 'react-player';

function VideoPlayer() {
  return (
    <div className="video-container">
    <ReactPlayer
      url="https://youtu.be/_YB1taxJPgk?si=0cdWp68r931-N7tI"
      width="100%"
      height="450px"
      controls
    />
    </div>
    
    
  );
}

export default VideoPlayer;