import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PortfolioCanvas from '../components/PortfolioCanvas';

import royalBridalImg from '../assets/royalbridalimg/royal_bridal_main.png';
import glassSkinImg from '../assets/glassskinimg/glassskin1.jpeg';
import eveningGlamImg from '../assets/eveningglamimg/evening1.jpeg';
import softMatteImg from '../assets/soft_matte_main.png';
import traditionalIndianImg from '../assets/traditional_indian_main.png';
import hdPartyImg from '../assets/hdparty/hd_party_makeup_main.png';

const Portfolio = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const inView = useInView(ref, { once: false, amount: 0.1 });

    const works = [
        {
            title: "Royal Bridal",
            type: "LUXURY",
            img: royalBridalImg,
            link: "/royal-bridal"
        },
        {
            title: "Glass Skin Look",
            type: "EDITORIAL",
            img: glassSkinImg,
            link: "/glass-skin-look"
        },
        {
            title: "Evening Glam",
            type: "PARTY",
            img: eveningGlamImg,
            link: "/evening-glam"
        },
        {
            title: "Soft Matte",
            type: "FASHION",
            img: softMatteImg,
            link: "/soft-matte"
        },
        {
            title: "Traditional Indian",
            type: "CULTURAL",
            img: traditionalIndianImg,
            link: "/traditional-indian"
        },
        {
            title: "HD Party Makeup",
            type: "HIGH DEFINITION",
            img: hdPartyImg,
            link: "/party-makeup"
        }
    ];

    const handleCardClick = (link) => {
        if (link) navigate(link);
    };

    return (
        <section ref={ref} id="portfolio" className="py-20 md:py-32 bg-white relative overflow-hidden">
            {/* 3D Background Effect - Only render if visible */}
            {inView && <PortfolioCanvas />}

            <div className="container mx-auto px-6 relative z-10 mb-16 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none"
                        >
                            THE MASTERPIECES
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-serif font-black text-dark leading-[1.1]"
                        >
                            Where Artistry <br className="hidden md:block" /> Meets Soul
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="pb-2"
                    >
                        <p className="text-dark/50 font-sans max-w-[280px] leading-relaxed text-sm md:text-base border-l-2 border-accent pl-6">
                            A curated collection of transformations that define our commitment to elegance and natural beauty.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        onClick={() => handleCardClick(work.link)}
                        className={`
                            relative group overflow-hidden rounded-[2rem] md:rounded-[2.5rem] bg-secondary/20 cursor-pointer
                            ${index % 2 !== 0 ? "lg:mt-12" : ""}
                        `}
                    >
                            <motion.div className="aspect-[4/5] md:aspect-[4/6] xl:aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] relative group">
                                <motion.img
                                    whileHover={{ scale: window.innerWidth > 1024 ? 1.1 : 1 }}
                                    transition={{ duration: 1, ease: "circOut" }}
                                    src={work.img}
                                    alt={work.title}
                                    className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem] pointer-events-none"
                                />

                                {/* Subtle Permanent Gradient for Text Visibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent pointer-events-none" />

                                {/* Static Info Layer (Always Visible on Mobile, Hidden on Desktop Hover) */}
                                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none transition-opacity duration-300 lg:group-hover:opacity-0">
                                    <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.4em] mb-3 uppercase leading-none opacity-90">
                                        {work.type}
                                    </span>
                                    <h3 className="text-2xl md:text-4xl font-serif text-white font-black leading-tight tracking-tighter">
                                        {work.title}
                                    </h3>
                                </div>

                                {/* Hover Reveal Layer (Desktop Only) */}
                                <div className="absolute inset-0 bg-dark/40 opacity-0 lg:group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] hidden lg:flex flex-col justify-end p-8 md:p-12">
                                    <span className="text-white/60 text-[10px] md:text-xs font-black tracking-[0.4em] mb-3 uppercase leading-none">
                                        {work.type}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-serif text-white font-black mb-8 leading-tight tracking-tighter">
                                        {work.title}
                                    </h3>

                                    <div className="flex items-center gap-4 group/btn">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (work.link) navigate(work.link);
                                            }}
                                            className="px-10 py-4 bg-white text-dark rounded-full text-[10px] font-black tracking-[0.2em] hover:bg-accent hover:text-white transition-all duration-300 uppercase shadow-xl"
                                        >
                                            EXPLORE
                                        </button>
                                        <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover/btn:bg-white group-hover/btn:border-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover/btn:text-dark transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M17 7H7M17 7v10" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;


