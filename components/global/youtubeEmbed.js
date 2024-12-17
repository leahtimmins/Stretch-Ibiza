'use client'
import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

const VideoComponent = ({ videoId, videoTitle }) => {
    const player = useRef(null);

    const handleClickFullscreen = () => {
        if (screenfull.isEnabled) {
            screenfull.request(player.current.wrapper);
        }
    };

    return (
        <>
            <div className="mb-1" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}>
                <ReactPlayer
                    ref={player}
                    url={`https://www.youtube.com/watch?fs=0&modestbranding=1&playsinline=1&rel=0&v=${videoId}`}
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen
                />
            </div>
            <div className={`relative flex justify-between`}>
                {videoTitle && <p className="text-md">{videoTitle}</p>}
                <button onClick={handleClickFullscreen}>
                    <span className="sr-only">Enlarge video fullscreen</span>
                    <ArrowsPointingOutIcon aria-hidden="true" className="h-6 w-6 text-gray-600"/>
                </button>
            </div>
            
        </>

    )
};

export default VideoComponent;

