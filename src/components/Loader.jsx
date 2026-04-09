import { motion } from 'framer-motion';
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
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0,
                y: '-100%',
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
            }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center p-6 overflow-hidden"
        >
            <div className="relative flex flex-col items-center max-w-md w-full z-10">
                {/* Luxury Initials */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-24 h-24 rounded-full border border-secondary/20 flex items-center justify-center text-secondary text-4xl font-serif font-black mb-12 relative group"
                >
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1], 
                            opacity: [0.2, 0.1, 0.2] 
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 rounded-full bg-secondary -z-10"
                    />
                    <span className="relative z-10 italic">AM</span>
                </motion.div>

                {/* Brand Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-black text-white tracking-tighter mb-4">
                        ANISHA <span className="text-secondary italic">Makeover</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <span className="h-[1px] w-6 bg-white/10"></span>
                        <p className="text-[9px] font-black tracking-[0.6em] text-white/30 uppercase">
                            Premium Artistry Studio
                        </p>
                        <span className="h-[1px] w-6 bg-white/10"></span>
                    </div>
                </motion.div>

                {/* Elegant Progress Container */}
                <div className="mt-20 w-full max-w-[280px]">
                    <div className="flex justify-between items-end mb-4 px-1">
                        <motion.span 
                            key={Math.round(progress)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-[10px] font-black text-secondary tabular-nums tracking-widest"
                        >
                            {Math.round(progress)}%
                        </motion.span>
                        <span className="text-[8px] font-black tracking-[0.3em] text-white/20 uppercase">REFINING DETAILS</span>
                    </div>
                    <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="absolute top-0 left-0 h-full bg-secondary"
                        />
                    </div>
                </div>
                
                {/* Status Messages */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-[8px] font-black tracking-[0.4em] text-white/20 uppercase text-center italic"
                >
                    {progress < 25 && "Preparing the Canvas..."}
                    {progress >= 25 && progress < 50 && "Selecting Premium Palettes..."}
                    {progress >= 50 && progress < 75 && "Perfecting Lighting & Aura..."}
                    {progress >= 75 && "Finalizing the Masterpiece..."}
                </motion.div>
            </div>

            {/* Background Decorative Touches */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-serif font-black text-[50vw] leading-none pointer-events-none select-none italic select-none">
                AM
            </div>

            <div className="absolute top-10 left-10 w-20 h-20 border-l border-t border-white/5" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-r border-b border-white/5" />
        </motion.div>
    );
};

export default Loader;
