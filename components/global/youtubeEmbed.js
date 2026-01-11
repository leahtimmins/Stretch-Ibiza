'use client'
import React, { useRef, useMemo } from 'react';
import ReactPlayer from 'react-player';
import screenfull from 'screenfull'
import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'

const VideoComponent = ({ videoUrl, videoTitle }) => {
    const player = useRef(null);
    const containerRef = useRef(null);

    const handleClickFullscreen = () => {
        if (screenfull.isEnabled && containerRef.current) {
            screenfull.request(containerRef.current);
        }
    };

    const processedVideoUrl = useMemo(() => {
        if (!videoUrl) return videoUrl;

        try {
            const url = new URL(videoUrl);
            const params = url.searchParams;

            // Check and add modestbranding if missing
            if (!params.has('modestbranding')) {
                params.set('modestbranding', '1');
            }

            // Check and add playsinline if missing
            if (!params.has('playsinline')) {
                params.set('playsinline', '1');
            }

            return url.toString();
        } catch (error) {
            // If URL parsing fails, return original
            console.error('Invalid video URL:', error);
            return videoUrl;
        }
    }, [videoUrl]);

    return (
        <>
            <div 
                ref={containerRef}
                className="mb-1" 
                style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%' }}
            >
                <ReactPlayer
                    ref={player}
                    src={processedVideoUrl}
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