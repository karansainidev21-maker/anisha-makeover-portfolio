import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PortfolioCanvas from '../components/PortfolioCanvas';

const Portfolio = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const inView = useInView(ref, { once: false, amount: 0.1 });

    const works = [
        {
            title: "Royal Bridal",
            type: "LUXURY",
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000",
            link: "/royal-bridal"
        },
        { title: "Glass Skin Look", type: "EDITORIAL", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000" },
        { title: "Evening Glam", type: "PARTY", img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2000" },
        { title: "Soft Matte", type: "FASHION", img: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000" },
        { title: "Traditional Indian", type: "CULTURAL", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2000" },
        { title: "Editorial Look", type: "MAGAZINE", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=2000" }
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
                        <div className="aspect-[4/5] md:aspect-[4/6] xl:aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[2.5rem] relative">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 1, ease: "circOut" }}
                                src={work.img}
                                alt={work.title}
                                className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem] pointer-events-none"
                            />

                            {/* Subtle Permanent Gradient for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent pointer-events-none" />

                            {/* Static Info Layer (Always Visible) */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10 pointer-events-none transition-opacity duration-300 group-hover:opacity-0">
                                <span className="text-accent text-[10px] md:text-xs font-black tracking-[0.4em] mb-3 uppercase leading-none opacity-90">
                                    {work.type}
                                </span>
                                <h3 className="text-2xl md:text-4xl font-serif text-white font-black leading-tight tracking-tighter">
                                    {work.title}
                                </h3>
                            </div>

                            {/* Hover Reveal Layer (Effect only on image/action) */}
                            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-end p-8 md:p-12">
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
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;


