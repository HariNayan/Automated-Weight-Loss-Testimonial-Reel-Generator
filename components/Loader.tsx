
import React from 'react';

interface LoaderProps {
    messages: string[];
    currentStep: number;
}

const Loader: React.FC<LoaderProps> = ({ messages, currentStep }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-64 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,78,0,0.05)_0%,transparent_60%)] animate-pulse pointer-events-none"></div>
            
            <div className="relative w-16 h-16 mb-8">
                <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                <div className="absolute inset-0 border border-[#ff4e00]/50 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 bg-[#ff4e00]/10 rounded-full blur-md animate-pulse"></div>
            </div>
            
            <p className="text-xl font-light text-white/80 tracking-wide">
                {messages[currentStep] || 'Processing...'}
            </p>
            
            <div className="mt-8 flex gap-2">
                {messages.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={`h-1 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-8 bg-[#ff4e00]' : idx < currentStep ? 'w-3 bg-white/30' : 'w-3 bg-white/10'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Loader;
