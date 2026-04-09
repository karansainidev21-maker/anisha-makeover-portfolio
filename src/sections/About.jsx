import { motion } from 'framer-motion';
import artistImg from '../assets/artist.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 xl:gap-24 items-center">
                    
                    {/* Visual Side */}
                    <div className="lg:col-span-12 xl:col-span-5 relative order-2 xl:order-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl relative z-10 group">
                                <img
                                    src={artistImg}
                                    alt="Anisha Saini"
                                    className="w-full h-full object-cover transition-transform duration-[2s] md:group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-700" />
                            </div>
                            
                            {/* Simplified Decorative Frame */}
                            <div className="absolute -top-6 -left-6 w-full h-full border border-secondary/10 rounded-[3rem] -z-0" />
                            
                            {/* Minimalist Quote */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                viewport={{ once: true }}
                                className="mt-10 xl:absolute xl:-right-12 xl:top-2/3 xl:-translate-y-1/2 bg-white/5 backdrop-blur-3xl border border-white/10 p-8 rounded-[2rem] shadow-2xl z-20 max-w-[280px]"
                            >
                                <p className="text-secondary/80 font-serif italic text-lg leading-relaxed">
                                    "I believe every face is a new canvas for a unique story."
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-10 bg-secondary/30"></span>
                                <span className="text-secondary/60 font-sans font-black tracking-[0.4em] text-[10px] uppercase">CURATED EXCELLENCE</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-10 leading-[1.1] tracking-tighter">
                                Driven by <br /> <span className="text-secondary italic">Passion</span>
                            </h2>
                            
                            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                                <div className="space-y-8">
                                    <p className="text-white/50 text-lg leading-relaxed font-light italic border-l border-white/5 pl-8">
                                        Guided by the visionary expertise of Anisha Saini, we redefine the boundaries of traditional beauty through precision and care.
                                    </p>
                                    <p className="text-white/30 text-base leading-relaxed">
                                        With over five years of experience in premium artistry, we specialize in transformations that blend cultural heritage with modern silhouettes and flawless techniques.
                                    </p>
                                </div>
                                <div className="space-y-12">
                                    {[
                                        { title: "THE VISION", desc: "Crafting a legacy of beauty through meticulous detail." },
                                        { title: "THE ETHOS", desc: "Honoring tradition while embracing modern elegance." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group cursor-default active:translate-x-1 transition-transform">
                                            <h4 className="text-secondary/40 font-black text-[10px] tracking-[0.3em] mb-4 md:group-hover:text-secondary md:group-hover:translate-x-2 transition-all duration-300 uppercase">{item.title}</h4>
                                            <p className="text-white/80 font-serif text-2xl font-bold leading-tight group-hover:text-white transition-colors">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Award / Trust Section - Simplified */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                viewport={{ once: true }}
                                className="mt-20 pt-10 border-t border-white/5 flex flex-wrap gap-x-12 gap-y-6 items-center"
                            >
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full" />
                                    </div>
                                    <span className="text-[9px] font-black tracking-[0.2em] text-white/30 uppercase group-hover:text-white/60 transition-colors">Global Certification</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center text-secondary group-hover:border-secondary/50 transition-colors">
                                        <div className="w-1.5 h-1.5 bg-secondary/60 rounded-full" />
                                    </div>
                                    <span className="text-[9px] font-black tracking-[0.2em] text-white/30 uppercase group-hover:text-white/60 transition-colors">Premium Products</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Subtle Background Initials */}
            <div className="absolute top-1/2 -right-[10%] -translate-y-1/2 text-white/[0.01] font-serif font-black text-[30vw] leading-none pointer-events-none select-none italic">
                NM
            </div>
        </section>
    );
};

export default About;
