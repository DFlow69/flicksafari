
import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';

interface VideoPlayerProps {
  videoUrl: string;
  poster?: string;
}

// Helper function to determine the video type
const getVideoType = (url: string): 'youtube' | 'vimeo' | 'drive' | 'archive' | 'catbox' | 'direct' => {
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    return 'youtube';
  } else if (url.includes('vimeo.com')) {
    return 'vimeo';
  } else if (url.includes('drive.google.com')) {
    return 'drive';
  } else if (url.includes('archive.org')) {
    return 'archive';
  } else if (url.includes('catbox.moe')) {
    return 'catbox';
  } else {
    return 'direct';
  }
};

// Helper to extract YouTube video ID
const getYoutubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Helper to extract Vimeo video ID
const getVimeoId = (url: string): string | null => {
  const regExp = /vimeo\.com\/(?:.*\/)?(?:videos\/)?([0-9]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Transform Google Drive URL to embedded format
const getDriveEmbedUrl = (url: string): string => {
  const fileId = url.match(/[-\w]{25,}/);
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId[0]}/preview`;
  }
  return url;
};

// Transform Archive.org URL to embedded format
const getArchiveEmbedUrl = (url: string): string => {
  // For archive.org links, try to extract the identifier
  const identifier = url.match(/archive\.org\/(?:details|download)\/([^\/&?#]+)/);
  if (identifier) {
    return `https://archive.org/embed/${identifier[1]}`;
  }
  return url;
};

// For catbox.moe, just return the direct URL
const getCatboxEmbedUrl = (url: string): string => {
  return url;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Plyr | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoType, setVideoType] = useState<'youtube' | 'vimeo' | 'drive' | 'archive' | 'catbox' | 'direct'>('direct');
  const [embeddedUrl, setEmbeddedUrl] = useState<string>('');

  useEffect(() => {
    // Determine the video type
    const type = getVideoType(videoUrl);
    setVideoType(type);

    // Generate the appropriate embedded URL
    let url = videoUrl;
    if (type === 'youtube') {
      const youtubeId = getYoutubeId(videoUrl);
      if (youtubeId) {
        url = `https://www.youtube.com/embed/${youtubeId}`;
      }
    } else if (type === 'vimeo') {
      const vimeoId = getVimeoId(videoUrl);
      if (vimeoId) {
        url = `https://player.vimeo.com/video/${vimeoId}`;
      }
    } else if (type === 'drive') {
      url = getDriveEmbedUrl(videoUrl);
    } else if (type === 'archive') {
      url = getArchiveEmbedUrl(videoUrl);
    } else if (type === 'catbox') {
      url = getCatboxEmbedUrl(videoUrl);
    }
    
    setEmbeddedUrl(url);
  }, [videoUrl]);

  useEffect(() => {
    // Only initialize Plyr for direct video links
    if (videoType === 'direct' && videoRef.current && !playerRef.current) {
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
  }, [videoType, embeddedUrl]);

  if (videoType === 'direct') {
    return (
      <div ref={containerRef} className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          src={embeddedUrl}
          poster={poster}
          className="plyr-react plyr"
          controls
          playsInline
        />
      </div>
    );
  } else {
    // For embedded content (YouTube, Vimeo, Drive, etc.)
    return (
      <div ref={containerRef} className="aspect-video bg-black rounded-lg overflow-hidden shadow-xl">
        <iframe
          src={embeddedUrl}
          className="w-full h-full"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded content"
        />
      </div>
    );
  }
};

export default VideoPlayer;
