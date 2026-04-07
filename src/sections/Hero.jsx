import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import heroImg from '../assets/bridal_hero.png';
import ThreeCanvas from '../components/ThreeCanvas';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                opacity: 0,
                x: -50,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.2
            });
            gsap.from(imageRef.current, {
                opacity: 0,
                scale: 1.1,
                duration: 2,
                ease: 'power2.out'
            });
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={heroRef}
            className="relative h-screen flex items-center justify-center overflow-hidden bg-white mt-24 md:mt-32 pt-16"
        >
            {/* 3D Effects Layer */}
            <ThreeCanvas />

            {/* Background Image with Parallax-like scale animation */}
            <div className="absolute inset-0 z-0 h-full">
                <img
                    ref={imageRef}
                    src={heroImg}
                    alt="Bridal Makeup"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
            </div>

            <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
                <div ref={contentRef} className="text-white max-w-lg md:max-w-md">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-accent font-sans font-bold tracking-widest text-[10px] md:text-sm mb-4 block uppercase"
                    >
                        PREMIUM BRIDAL STUDIO
                    </motion.span>
                    <h1 className="text-5xl md:text-8xl font-serif font-black leading-[1] md:leading-tight mb-6">
                        Anisha <br className="hidden md:block" />
                        <span className="text-white/80">Makeover</span>
                    </h1>
                    <p className="text-pink-100 text-lg md:text-xl font-sans max-w-md mb-10 leading-relaxed mx-auto md:mx-0">
                        Enhancing Your Natural Beauty. Specializing in luxurious bridal transformations and elegant salon services.
                    </p>
                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center md:justify-start">
                        <a href="#contact" className="bg-accent px-10 py-4 rounded-full border-2 border-accent text-white font-bold tracking-widest hover:bg-transparent hover:text-accent transition-all duration-300 text-xs md:text-base text-center">
                            BOOK APPOINTMENT
                        </a>
                        <a href="#portfolio" className="bg-white/10 backdrop-blur-md px-10 py-4 rounded-full border-2 border-white/20 text-white font-bold tracking-widest hover:bg-white hover:text-dark transition-all duration-300 text-xs md:text-base text-center">
                            OUR WORK
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-white/20 relative">
                    <motion.div
                        animate={{ y: [0, 64, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute top-0 left-0 w-full h-4 bg-accent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
