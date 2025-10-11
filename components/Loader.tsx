
import React from 'react';

interface LoaderProps {
    messages: string[];
    currentStep: number;
}

const Loader: React.FC<LoaderProps> = ({ messages, currentStep }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-64">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
            <p className="mt-6 text-lg font-semibold text-slate-300 animate-pulse">
                {messages[currentStep] || 'Processing...'}
            </p>
        </div>
    );
};

export default Loader;
