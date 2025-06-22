import { PlayCircle } from 'lucide-react';
import React from 'react'

const Video: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [showOverlay, setShowOverlay] = React.useState(true);

    React.useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handlePlay = () => setShowOverlay(false);
        const handlePause = () => setShowOverlay(true);

        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
        };
    }, []);

    return (
        <>
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-contain"
                controls
                poster="/video-thumbnail.jpg"
            >
                <source src="/videos/collaboration.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {showOverlay && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg">
                        <PlayCircle className="w-16 h-16 text-green-600" />
                    </div>
                </div>
            )}
        </>
    );
};

export default Video
