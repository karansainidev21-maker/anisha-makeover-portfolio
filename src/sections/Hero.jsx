import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/bridal_hero.jpg';

const Hero = () => {
    const { scrollY } = useScroll();
    
    // Parallax effects
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);
    const y2 = useTransform(scrollY, [0, 500], [0, -80]);
    
    // Fade content on scroll
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);

    return (
        <section id="home" className="relative min-h-screen overflow-hidden pt-24 md:pt-32 xl:pt-0 xl:flex xl:items-center">
            <div className="container mx-auto px-6 relative z-10 py-12 md:py-20 xl:py-0">
                <div className="flex flex-col xl:grid xl:grid-cols-12 gap-12 xl:gap-24 items-center">
                    
                    {/* Hero Image Section - Shown first on mobile */}
                    <div className="w-full xl:col-span-5 relative order-1 xl:order-2">
                        <motion.div
                            style={{ y: y1 }}
                            className="relative z-10 max-w-[450px] mx-auto xl:max-w-none"
                        >
                            <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-3xl relative">
                                <img 
                                    src={heroImg} 
                                    alt="Anisha Saini" 
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
                            </div>

                            {/* Floating Badge */}
                            <motion.div 
                                style={{ y: y2 }}
                                className="absolute -right-4 bottom-8 bg-white/5 backdrop-blur-3xl border border-white/10 p-4 md:p-6 rounded-[1.5rem] shadow-2xl z-20 flex flex-col items-center"
                            >
                                <p className="text-secondary font-black text-xl md:text-2xl mb-1">5+</p>
                                <p className="text-white/20 text-[7px] md:text-[8px] tracking-[0.2em] font-black uppercase text-center leading-tight">Yrs Artistry</p>
                            </motion.div>
                        </motion.div>
                        
                        {/* Aura glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-[120px] -z-10" />
                    </div>

                    {/* Artistic Text Content */}
                    <div className="w-full xl:col-span-7 relative order-2 xl:order-1 text-center xl:text-left">
                        <motion.div
                            style={{ opacity }}
                            className="relative z-20"
                        >
                            <div className="flex items-center justify-center xl:justify-start gap-4 mb-8 md:mb-10">
                                <span className="h-[1px] w-10 bg-secondary/30"></span>
                                <span className="text-secondary/60 font-sans font-black tracking-[0.4em] text-[10px] uppercase">
                                    EST. 2024 • ANISHA MAKEOVER
                                </span>
                            </div>
                            
                            <h1 className="relative inline-block">
                                <motion.span 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="block text-5xl md:text-8xl lg:text-9xl font-serif font-black text-white leading-[1.1] tracking-tighter"
                                >
                                    ANISHA
                                </motion.span>
                                <motion.span 
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                    className="block text-2xl md:text-5xl lg:text-6xl font-serif font-light italic text-secondary leading-none xl:ml-20 mt-2"
                                >
                                    Makeover
                                </motion.span>
                            </h1>

                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="mt-8 md:mt-12 text-white/40 text-base md:text-xl font-sans max-w-lg mx-auto xl:mx-0 leading-relaxed font-light italic border-l-2 xl:border-l border-white/10 pl-6 xl:pl-8"
                            >
                                Guided by the visionary expertise of Anisha Saini, we redefine the boundaries of traditional beauty through premium precision.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1 }}
                                className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center justify-center xl:justify-start mt-10 md:mt-14"
                            >
                                <a 
                                    href="#portfolio"
                                    className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden px-12 py-5 bg-secondary text-dark rounded-full text-[10px] font-black tracking-widest transition-all duration-500 active:scale-95 text-center"
                                >
                                    <span className="relative z-10 uppercase">Explore Portfolio</span>
                                </a>
                                <a 
                                    href="#contact"
                                    className="w-full sm:w-auto text-white/40 active:text-white transition-colors duration-300 text-[10px] font-black tracking-[0.3em] flex items-center justify-center gap-4 group uppercase"
                                >
                                    Book Experience
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Branding */}
            <div className="absolute top-[20%] -left-[10%] text-white/[0.01] font-serif font-black text-[30vw] leading-none pointer-events-none select-none z-0 italic">
                AM
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
                <motion.div 
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-8 border-2 border-white/10 rounded-full flex justify-center p-1"
                >
                    <div className="w-1 h-2 bg-secondary rounded-full" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
