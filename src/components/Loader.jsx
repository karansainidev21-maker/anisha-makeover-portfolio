import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background Grain/Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")' }} />

            {/* Logo Animation */}
            <div className="relative mb-8 overflow-hidden">
                <motion.div 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-serif font-black text-white tracking-tighter"
                >
                    ANISHA <span className="text-accent underline decoration-white/10">MAKEOVER</span>
                </motion.div>
                <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-accent"
                />
            </div>

            {/* Floating Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/20 rounded-full blur-[120px] -z-10" />

            {/* Quote Animation */}
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-accent font-sans font-bold tracking-[0.4em] text-[10px] md:text-sm uppercase"
            >
                Defining Elegance Since 2026
            </motion.p>

            {/* Dynamic Counter or Progress (Visual only) */}
            <div className="absolute bottom-20 left-20">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="text-white font-serif italic text-6xl md:text-9xl tracking-tighter"
                >
                    LUXURY
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Loader;
