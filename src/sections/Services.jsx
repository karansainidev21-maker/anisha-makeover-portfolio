import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bridalImg from '../assets/bridal_service.png';
import academyImg from '../assets/academy_service.png';

const Services = () => {
    const navigate = useNavigate();
    const services = [
        { title: "Bridal Artistry", price: "₹8,000+", desc: "Premium transformations tailored for your most legacy moments.", img: bridalImg, link: "/royal-bridal" },
        { title: "The Academy", price: "Enroll Now", desc: "Master the craft with Anisha Saini's professional certification.", img: academyImg, link: "/academy" },
        { title: "Hair Couture", price: "Customized", desc: "Chemical treatments that blend protection with modern luxury.", img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000" }
    ];

    const handleAction = (link) => {
        if (link) {
            navigate(link);
            window.scrollTo(0, 0);
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section id="services" className="py-24 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col xl:flex-row gap-12 xl:items-end mb-20 md:mb-32">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6 md:mb-8">
                            <span className="h-[1px] w-10 bg-secondary/30"></span>
                            <span className="text-secondary/60 font-sans font-black tracking-[0.4em] text-[10px] uppercase">THE EXPERIENCE</span>
                        </div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-serif font-black text-white leading-[1.1] tracking-tighter"
                        >
                            Elevate Your <br /> <span className="text-secondary italic">Aura</span>
                        </motion.h2>
                    </div>
                    <div className="max-w-md xl:pb-4">
                        <p className="text-white/30 text-base md:text-xl font-sans leading-relaxed italic font-light border-l border-white/5 pl-6 md:pl-8">
                            "Excellence is not an act, but a habit. We provide bespoke beauty solutions tailored for the elite."
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            onClick={() => handleAction(service.link)}
                            className="group relative h-[300px] md:h-[350px] overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 cursor-pointer"
                        >
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-black/20 transition-all duration-700" />

                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                                <div className="max-w-xl">
                                    <h3 className="text-3xl md:text-5xl font-serif font-black text-white mb-2 md:group-hover:text-secondary transition-colors duration-500 italic">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 text-[10px] md:text-xs font-light uppercase tracking-widest line-clamp-1">
                                        {service.desc}
                                    </p>
                                </div>

                                <div className="flex flex-col items-start md:items-end gap-4">
                                    <span className="text-secondary/80 font-black text-lg md:text-2xl tracking-wider">{service.price}</span>
                                    <button className="px-8 py-3 bg-secondary text-dark md:bg-transparent md:border md:border-white/10 md:text-white/40 md:group-hover:border-secondary md:group-hover:text-dark md:group-hover:bg-secondary rounded-full text-[8px] font-black tracking-widest transition-all duration-500 uppercase active:scale-95">
                                        RESERVE NOW
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Texture - Restored to AM for Consistency */}
            <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 text-white/[0.01] font-serif font-black text-[30vw] leading-none pointer-events-none select-none italic rotate-12">
                AM
            </div>
        </section>
    );
};

export default Services;
