import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                    }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
                >
                    <div className="relative flex flex-col items-center">
                        {/* Luxury Logo/Initials */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white text-3xl font-serif font-black mb-8 shadow-2xl relative"
                        >
                            <motion.div 
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 rounded-full bg-accent/30 -z-10"
                            />
                            AS
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-center"
                        >
                            <h2 className="text-xl md:text-2xl font-serif font-black text-dark tracking-[0.2em] mb-2 uppercase">
                                Anisha <span className="text-accent">Makeover</span>
                            </h2>
                            <p className="text-[10px] font-black tracking-[0.4em] text-dark/30 uppercase">
                                Loading Artistry...
                            </p>
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="mt-12 w-48 h-[2px] bg-dark/5 rounded-full overflow-hidden relative">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                className="absolute top-0 left-0 h-full bg-accent"
                            />
                        </div>
                        
                        <div className="mt-4 font-sans text-[10px] font-black text-accent tracking-widest">
                            {Math.round(progress)}%
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-10 left-10 text-[10px] text-dark/10 font-black tracking-[0.5em] rotate-90 origin-left">
                        EST. 2024
                    </div>
                    <div className="absolute bottom-10 right-10 text-[10px] text-dark/10 font-black tracking-[0.5em]">
                        PREMIUM BRIDAL SERVICE
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
