
import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Plyr | null>(null);

  useEffect(() => {
    if (videoRef.current && !playerRef.current) {
      playerRef.current = new Plyr(videoRef.current, {
        controls: [
          'play-large', 
          'play', 
          'progress', 
          'current-time', 
          'mute', 
          'volume', 
          'captions', 
          'settings', 
          'pip', 
          'airplay', 
          'fullscreen'
        ],
        storage: { enabled: true, key: 'streamvista-player' },
        autopause: true,
        tooltips: { controls: true, seek: true },
        keyboard: { focused: true, global: false },
        blankVideo: 'https://cdn.plyr.io/static/blank.mp4'
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
      <video
        ref={videoRef}
        src={videoUrl}
        poster={poster}
        className="plyr-react plyr"
        controls
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
