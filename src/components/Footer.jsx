import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import FooterCanvas from './FooterCanvas';

const Footer = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <footer ref={ref} className="bg-[#0a0a0a] pt-32 pb-12 text-white relative overflow-hidden">
            {/* 3D Background Effect - Only render if visible */}
            {inView && <FooterCanvas />}

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-5">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-serif font-black tracking-tighter mb-10 leading-none"
                        >
                            ANISHA <br /> <span className="text-accent underline decoration-white/10">MAKEOVER</span>
                        </motion.div>
                        <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-md mb-12 font-sans tracking-wide">
                            Led by Nisha Saini. Crafting beauty that doesn't just look luxury, but feels revolutionary.
                        </p>
                        <div className="space-y-4 mb-12">
                            <h4 className="text-[10px] font-black text-accent tracking-[0.3em] uppercase opacity-60">LOCATION</h4>
                            <p className="text-white/60 font-sans leading-relaxed flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                                Basement below Ravi Kirana Store, Badli Tanda
                            </p>
                        </div>
                        <div className="flex gap-6">
                            {[
                                { name: "INSTAGRAM", url: "https://instagram.com/beauticion_nisha" },
                                { name: "WHATSAPP", url: "https://wa.me/918954386375" }
                            ].map((social, index) => (
                                <motion.a 
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    href={social.url} 
                                    target="_blank" 
                                    className="text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-accent transition-colors duration-300 border-b border-white/10 pb-1"
                                >
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2 lg:col-start-7">
                        <h4 className="text-[10px] font-black text-accent tracking-[0.3em] mb-10 uppercase">NAVIGATION</h4>
                        <ul className="space-y-6 text-white/50 font-sans text-sm tracking-widest font-black">
                            {["home", "about", "services", "portfolio"].map((item) => (
                                <li key={item}>
                                    <motion.a 
                                        whileHover={{ x: 10 }}
                                        href={`#${item}`} 
                                        className="hover:text-white transition-all underline decoration-transparent hover:decoration-accent"
                                    >
                                        {item.toUpperCase()}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-3 lg:col-start-10">
                        <h4 className="text-[10px] font-black text-accent tracking-[0.3em] mb-10 uppercase">OUR STUDIO</h4>
                        <ul className="space-y-6 text-white/50 font-sans text-sm tracking-widest font-black">
                            {["Professional Makeup", "Bridal Artistry", "School of Beauty", "Luxury Hair Design"].map((item) => (
                                <li key={item} className="cursor-default border-l border-white/5 pl-6 hover:border-accent transition-colors duration-500">
                                    {item.toUpperCase()}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-40 pt-10 border-t border-white/5 text-center text-white/20 font-sans text-[10px] tracking-[0.5em] flex flex-col md:flex-row justify-between items-center gap-8 uppercase">
                    <p>© 2026 ANISHA MAKEOVER. ALL RIGHTS RESERVED.</p>
                    <p className="flex items-center gap-4">
                        CRAFTED FOR <span className="text-white/40 font-black">LUXURY BEAUTY</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
