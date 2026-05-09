
import React from 'react';
import { DownloadIcon, ReplayIcon } from './icons';

interface ReelPlayerProps {
    videoUrl: string;
    onReset: () => void;
}

const ReelPlayer: React.FC<ReelPlayerProps> = ({ videoUrl, onReset }) => {
    return (
        <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-serif-display font-light text-center mb-3 text-white">
                Your <span className="italic text-[#ff4e00]">Reel</span> is Ready
            </h2>
            <p className="text-white/40 mb-10 text-center font-light tracking-wide">
                Preview your AI-crafted testimonial below
            </p>
            
            {/* Elegant Phone Mockup */}
            <div className="relative mx-auto border-white/10 bg-[#0a0a0a] border-[8px] rounded-[2.5rem] h-[520px] w-[260px] shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(255,78,0,0.1)] mb-12 overflow-hidden group">
                {/* Dynamic notch */}
                <div className="w-[120px] h-[24px] bg-[#0a0a0a] rounded-b-[1rem] absolute left-1/2 -translate-x-1/2 top-0 z-20 flex justify-center items-end pb-1.5">
                    <div className="w-12 h-1.5 rounded-full bg-white/5"></div>
                </div>
                
                {/* Hardware buttons */}
                <div className="h-[32px] w-[3px] bg-white/10 absolute -left-[11px] top-[72px] rounded-l-lg"></div>
                <div className="h-[60px] w-[3px] bg-white/10 absolute -left-[11px] top-[124px] rounded-l-lg"></div>
                <div className="h-[60px] w-[3px] bg-white/10 absolute -right-[11px] top-[120px] rounded-r-lg"></div>
                
                {/* Screen content */}
                <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-[#050505] relative">
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

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
                <a
                    href={videoUrl}
                    download="testimonial-reel.mp4"
                    className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-medium py-3.5 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Download Reel
                </a>
                <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-3 w-full sm:w-auto bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-medium py-3.5 px-8 rounded-full transition-all duration-300"
                >
                    <ReplayIcon className="w-5 h-5" />
                    Create Another
                </button>
            </div>
        </div>
    );
};

export default ReelPlayer;
