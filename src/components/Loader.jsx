import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 10;
            });
        }, 120);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                y: -100,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
            className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center p-6"
        >
            <div className="relative flex flex-col items-center max-w-md w-full">
                {/* Luxury Logo/Initials Icon */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-accent flex items-center justify-center text-white text-2xl md:text-3xl font-serif font-black mb-10 shadow-[0_20px_50px_rgba(197,160,89,0.3)] relative group"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-accent -z-10"
                    />
                    AS
                </motion.div>

                {/* Brand Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-2xl md:text-4xl font-serif font-black text-dark tracking-tighter mb-2">
                        Anisha <span className="text-accent underline decoration-dark/5 underline-offset-8">Makeover</span>
                    </h2>
                    <p className="text-[10px] md:text-xs font-black tracking-[0.5em] text-dark/30 uppercase mt-4">
                        Defining Excellence in Artistry
                    </p>
                </motion.div>

                {/* Elegant Progress Container */}
                <div className="mt-16 w-full max-w-[240px]">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-[9px] font-black tracking-widest text-dark/40 uppercase">Preparation</span>
                        <span className="text-[11px] font-black text-accent tabular-nums">{Math.round(progress)}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-dark/5 rounded-full overflow-hidden relative">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="absolute top-0 left-0 h-full bg-accent"
                        />
                    </div>
                </div>
                
                {/* Status Messages */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-[9px] font-black tracking-[0.3em] text-accent/60 uppercase text-center"
                >
                    {progress < 30 && "Initializing 3D Space..."}
                    {progress >= 30 && progress < 60 && "Loading Portfolio Assets..."}
                    {progress >= 60 && progress < 90 && "Perfecting Lighting & Textures..."}
                    {progress >= 90 && "Almost Ready..."}
                </motion.div>
            </div>

            {/* Luxurious Background Touches */}
            <div className="absolute top-12 left-12 flex flex-col gap-2">
                <div className="w-12 h-[1px] bg-dark/10" />
                <div className="w-6 h-[1px] bg-dark/10" />
            </div>
            <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2">
                <div className="w-6 h-[1px] bg-dark/10" />
                <div className="w-12 h-[1px] bg-dark/10" />
            </div>
            
            {/* Subtle floating aura blobs in background */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -z-10" />
        </motion.div>
    );
};

export default Loader;
