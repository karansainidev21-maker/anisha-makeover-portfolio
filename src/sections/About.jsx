import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import artistImg from '../assets/artist.jpg';
import AboutCanvas from '../components/AboutCanvas';

const About = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });

    return (
        <section ref={ref} id="about" className="py-24 bg-white relative overflow-hidden">
            {/* 3D Background Effect - Only render if in View */}
            {inView && <AboutCanvas />}

            {/* Premium Gold Aura Background (Optimized) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/5 rounded-full blur-[80px]" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[60px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src={artistImg}
                                alt="Nisha Saini - Makeup Artist"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-secondary rounded-2xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center md:text-left"
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">ABOUT US</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-black text-dark mb-8 leading-[1.1]">
                            Excellence in <br className="hidden md:block" /> Bridal Artistry
                        </h2>
                        <p className="text-dark/60 text-base md:text-lg mb-8 leading-relaxed font-sans max-w-lg mx-auto md:mx-0">
                            Led by **Nisha Saini** (owner of @beauticion_nisha), Anisha Makeover is a premium beauty studio dedicated to enhancing your natural beauty. With a passion for professional makeup and hairstyling, Nisha brings artistic vision to every client.
                        </p>
                        <div className="space-y-6 text-left">
                            {[
                                { title: "Bridal Perfection", desc: "Crafting the perfect look for your most special day." },
                                { title: "Professional Service", desc: "Expert makeup and hair styling for every occasion." },
                                { title: "Premium Products", desc: "We use only the world's most renowned beauty brands." }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full shrink-0">
                                        <div className="w-2 h-2 bg-accent rounded-full" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-bold text-dark mb-1">{item.title}</h4>
                                        <p className="text-dark/60">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
