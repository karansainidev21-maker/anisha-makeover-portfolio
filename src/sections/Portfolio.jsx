import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PortfolioCanvas from '../components/PortfolioCanvas';

const Portfolio = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });

    const works = [
        { title: "Royal Bridal", type: "LUXURY", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000" },
        { title: "Glass Skin Look", type: "EDITORIAL", img: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000" },
        { title: "Evening Glam", type: "PARTY", img: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2000" },
        { title: "Soft Matte", type: "FASHION", img: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000" },
        { title: "Traditional Indian", type: "CULTURAL", img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2000" },
        { title: "Editorial Look", type: "MAGAZINE", img: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=2000" }
    ];

    return (
        <section ref={ref} id="portfolio" className="py-32 bg-white relative overflow-hidden">
            {/* 3D Background Effect - Only render if visible */}
            {inView && <PortfolioCanvas />}

            <div className="container mx-auto px-6 relative z-10 mb-24">
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
                            Where Artistry <br /> Meets Soul
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

            <div className="px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {works.map((work, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className={`
                            relative group overflow-hidden rounded-[2.5rem] bg-secondary/20
                            ${index % 2 !== 0 ? "lg:mt-12" : ""}
                        `}
                    >
                        <div className="aspect-[3/4] overflow-hidden">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                src={work.img}
                                alt={work.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Overlay Styling */}
                        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10 backdrop-blur-[2px]">
                            <motion.span 
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                className="text-accent text-[10px] font-black tracking-[0.3em] mb-2 uppercase"
                            >
                                {work.type}
                            </motion.span>
                            <h3 className="text-3xl font-serif text-white font-bold mb-6">
                                {work.title}
                            </h3>
                            <button className="w-fit px-8 py-3 bg-white text-dark rounded-full text-[10px] font-black tracking-widest hover:bg-accent hover:text-white transition-all duration-300">
                                EXPLORE TRANSFORMATION
                            </button>
                        </div>

                        {/* Title Tag for Base State (Premium Look) */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-6 rounded-3xl group-hover:opacity-0 transition-opacity duration-300 shadow-xl border border-white/40">
                            <div className="flex justify-between items-center">
                                <span className="text-dark font-serif font-black text-xl">{work.title}</span>
                                <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" className="rotate-45" />
                                    </svg>
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
