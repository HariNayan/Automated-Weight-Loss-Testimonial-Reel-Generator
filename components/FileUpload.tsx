
import React, { useState, useCallback, DragEvent } from 'react';
import { UploadIcon } from './icons';

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    isProcessing: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, isProcessing }) => {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            onFileSelect(event.target.files[0]);
        }
    };

    const handleDragEnter = useCallback((e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    }, []);
    
    const handleDragOver = useCallback((e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDrop = useCallback((e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFileSelect(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    }, [onFileSelect]);


    const baseClasses = "group flex flex-col items-center justify-center w-full h-64 border border-white/10 rounded-[20px] cursor-pointer transition-all duration-500 overflow-hidden relative";
    const inactiveClasses = "bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20";
    const draggingClasses = "border-[#ff4e00]/50 bg-[#ff4e00]/10";

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <label
                htmlFor="dropzone-file"
                className={`${baseClasses} ${isDragging ? draggingClasses : inactiveClasses}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]"></div>
                
                <div className="flex flex-col items-center justify-center pt-5 pb-6 relative z-10">
                    <div className="w-16 h-16 mb-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                        <UploadIcon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <p className="mb-3 text-lg font-light text-white/90">
                        <span className="font-medium text-white group-hover:text-[#ff4e00] transition-colors">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-white/40 tracking-wider uppercase">MP4, MOV, or AVI up to 500MB</p>
                </div>
                <input 
                    id="dropzone-file" 
                    type="file" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept="video/*"
                    disabled={isProcessing}
                />
            </label>
        </div>
    );
};

export default FileUpload;
