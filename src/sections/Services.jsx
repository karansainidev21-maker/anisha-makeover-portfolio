import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bridalImg from '../assets/bridal_service.png';
import academyImg from '../assets/academy_service.png';
import ServicesCanvas from '../components/ServicesCanvas';

const Services = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });
    const services = [
        {
            title: "Bridal Makeup",
            price: "₹7,000+",
            desc: "The complete transformation for your wedding day with high-end premium makeup.",
            img: bridalImg
        },
        {
            title: "Beauty Academy",
            price: "Join Now",
            desc: "Learn professional makeup and hairstyle artistry from the expert, Nisha Saini.",
            img: academyImg
        },
        {
            title: "Chemical Work",
            price: "Customized",
            desc: "Professional hair chemical treatments including Smoothening, Keratin, and Botox.",
            img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000"
        },
        {
            title: "Hairstyle",
            price: "₹800+",
            desc: "Expertly crafted hairstyles for every occasion, from classic to modern trends.",
            img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000"
        },
        {
            title: "Nail Extensions",
            price: "₹1,500+",
            desc: "Get beautiful, long-lasting nail extensions with creative, bespoke nail art.",
            img: "https://images.unsplash.com/photo-1632345031435-81979cd75a00?q=80&w=2000"
        },
        {
            title: "HD Makeup",
            price: "₹4,000+",
            desc: "Flawless, high-definition makeup for shoots, parties, and special events.",
            img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000"
        }
    ];

    return (
        <section ref={ref} id="services" className="py-32 bg-[#fffafb] relative overflow-hidden">
            {/* 3D Background Effect */}
            {inView && <ServicesCanvas />}

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none"
                    >
                        OUR LUXURY SERVICES
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-7xl font-serif font-black text-dark mb-8 leading-[1.1]"
                    >
                        Redefining Your <br /> Elegance
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-dark/60 text-lg md:text-xl font-sans max-w-lg mx-auto"
                    >
                        Every brushstroke and detail is crafted to highlight your unique beauty and personality.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            whileHover={{ y: -15 }}
                            className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_15px_45px_0_rgba(255,182,193,0.08)] hover:shadow-[0_15px_45px_0_rgba(255,182,193,0.2)] transition-all duration-500 group border border-white/40"
                        >
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-6 right-6 bg-white/90 text-dark px-5 py-2 rounded-2xl text-[10px] font-black tracking-widest backdrop-blur-md shadow-lg">
                                    {service.price}
                                </div>
                            </div>
                            <div className="p-10 text-left">
                                <h3 className="text-3xl font-serif font-black text-dark mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-dark/50 font-sans leading-relaxed mb-8 text-sm md:text-base">
                                    {service.desc}
                                </p>
                                <motion.a
                                    href="#contact"
                                    whileHover={{ x: 5 }}
                                    className="text-[12px] font-black text-accent tracking-[0.2em] inline-flex items-center gap-3 transition-all duration-300 uppercase"
                                >
                                    BOOK SESSION
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
