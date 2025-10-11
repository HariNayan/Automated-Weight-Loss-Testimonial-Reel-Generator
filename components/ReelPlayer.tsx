
import React from 'react';
import { DownloadIcon, ReplayIcon } from './icons';

interface ReelPlayerProps {
    videoUrl: string;
    onReset: () => void;
}

const ReelPlayer: React.FC<ReelPlayerProps> = ({ videoUrl, onReset }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Your Reel is Ready!</h2>
            <p className="text-slate-400 mb-6 text-center">Preview your AI-generated testimonial below.</p>
            
            {/* Phone Mockup */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[520px] w-[260px] shadow-xl mb-8">
                <div className="w-[140px] h-[14px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[72px] rounded-s-lg"></div>
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -start-[13px] top-[124px] rounded-s-lg"></div>
                <div className="h-[48px] w-[3px] bg-gray-800 absolute -end-[13px] top-[120px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-full h-full bg-slate-950">
                    <video
                        src={videoUrl}
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        loop
                        playsInline
                    />
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a
                    href={videoUrl}
                    download="testimonial-reel.mp4"
                    className="flex items-center justify-center gap-2 w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Download Reel
                </a>
                <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                    <ReplayIcon className="w-5 h-5" />
                    Create Another
                </button>
            </div>
        </div>
    );
};

export default ReelPlayer;
