import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import royalBridalImg from '../assets/royalbridalimg/royal_bridal_main.png';
import glassSkinImg from '../assets/glassskinimg/glassskin1.jpeg';
import eveningGlamImg from '../assets/eveningglamimg/evening1.jpeg';
import softMatteImg from '../assets/Soft Matte/soft1.heic';
import traditionalIndianImg from '../assets/traditional_indian_main.png';
import hdPartyImg from '../assets/hdparty/hd_party_makeup_main.png';

const Portfolio = () => {
    const navigate = useNavigate();
    const targetRef = useRef(null);
    useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const works = [
        { title: "Royal Bridal", type: "LUXURY", img: royalBridalImg, link: "/royal-bridal", class: "lg:col-span-8 aspect-[21/9]" },
        { title: "Glass Skin", type: "EDITORIAL", img: glassSkinImg, link: "/glass-skin-look", class: "lg:col-span-4 aspect-square" },
        { title: "Evening Glam", type: "PARTY", img: eveningGlamImg, link: "/evening-glam", class: "lg:col-span-4 aspect-square" },
        { title: "Soft Matte", type: "FASHION", img: softMatteImg, link: "/soft-matte", class: "lg:col-span-8 aspect-[21/9]" },
        { title: "Indian Grace", type: "CULTURAL", img: traditionalIndianImg, link: "/traditional-indian", class: "lg:col-span-6 aspect-square" },
        { title: "HD Party", type: "PRECISION", img: hdPartyImg, link: "/party-makeup", class: "lg:col-span-6 aspect-square" }
    ];

    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        hover: { scale: 1.05 },
        active: { scale: 1.02 }
    };

    return (
        <section id="portfolio" className="py-24 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                {/* Asymmetrical Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-32 md:mb-48">
                    <div className="max-w-4xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary font-sans font-black tracking-[0.8em] text-[10px] md:text-sm mb-8 block uppercase leading-none"
                        >
                            THE MASTERPIECES
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-[1.1] tracking-tighter"
                        >
                            Visionary <br /> <span className="text-secondary italic">Artistry</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:pb-12"
                    >
                        <p className="text-white/30 text-[clamp(1rem,2vw,1.5rem)] font-sans max-w-[400px] leading-relaxed italic border-l-[3px] border-secondary/20 pl-10">
                            "Transforming perception through textures and tones. Explore our curated portfolio."
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout - Bento/Magazine Style */}
                <div ref={targetRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            whileTap="active"
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => navigate(work.link)}
                            className={`
                                relative group overflow-hidden rounded-[4rem] bg-white/5 backdrop-blur-md border border-white/5 cursor-pointer shadow-2xl
                                ${work.class}
                            `}
                        >
                            <img
                                src={work.img}
                                alt={work.title}
                                className="w-full h-full object-cover grayscale transition-all duration-[1s] ease-out md:group-hover:grayscale-0 md:group-hover:scale-110"
                                style={{
                                    // On mobile, force grayscale off so it works on scroll
                                    filter: 'grayscale(var(--mobile-grayscale, 0))'
                                }}
                            />

                            {/* Cinematic Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 md:opacity-60 md:group-hover:opacity-100 transition-opacity duration-700" />

                            {/* Info */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">
                                <span className="text-secondary font-black tracking-[0.4em] text-[10px] uppercase mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-1000 delay-300">
                                    {work.type}
                                </span>
                                <h3 className="text-3xl md:text-6xl font-serif font-black leading-tight mb-4 md:mb-8">
                                    {work.title}
                                </h3>
                                <div className="h-[1px] w-full md:w-0 md:group-hover:w-full bg-secondary transition-all duration-1000 origin-left" />
                            </div>

                            {/* Corner Indicator */}
                            <div className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-xl md:group-hover:bg-secondary md:group-hover:text-dark transition-all duration-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
