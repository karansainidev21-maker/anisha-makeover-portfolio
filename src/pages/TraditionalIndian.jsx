import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mainImage from '../assets/traditional_indian_main.png';

const TraditionalIndian = () => {
    const culturalImages = [
        { url: mainImage, title: "Heritage Bride" },
        { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2000", title: "Temple Grace" },
        { url: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000", title: "Kundan Magic" },
        { url: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2000", title: "Maroon Soul" },
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000", title: "Zardozi Detail" },
        { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000", title: "Classic Bindi" }
    ];

    return (
        <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-secondary selection:text-white overflow-x-hidden">
            {/* Header Section */}
            <section className="pt-48 pb-24 px-6 relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-secondary font-sans font-bold tracking-[0.5em] text-[10px] md:text-sm mb-6 block uppercase">
                            Heritage & Tradition
                        </span>
                        <h1 className="text-5xl md:text-9xl font-serif font-black text-white leading-[0.9] mb-10">
                            Traditional <br /> <span className="text-secondary italic">Indian Grace</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-secondary/40 mx-auto mb-10"></div>
                        <p className="text-white/50 font-sans max-w-2xl mx-auto leading-relaxed text-base md:text-xl italic px-4 font-light">
                            "A tribute to our deep-rooted heritage. Capturing the timeless splendor of Indian traditions with a touch of modern artistry."
                        </p>
                    </motion.div>
                </div>

                {/* Background Pattern and Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pichica.png')] opacity-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 transform translate-x-1/2" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
            </section>

            {/* Gallery Grid */}
            <section className="py-24 md:py-32 px-4 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {culturalImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2.5rem] aspect-[3/4] bg-white/5 shadow-2xl shadow-black/50"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                            />

                            <div className="absolute inset-0 group-hover:bg-[#5c4033]/20 transition-colors duration-700 pointer-events-none" />

                            <div className="absolute bottom-0 inset-x-0 p-10 bg-gradient-to-t from-black via-black/40 to-transparent lg:translate-y-6 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500">
                                <span className="text-secondary text-[10px] font-bold tracking-widest uppercase mb-2 block">HERITAGE {index + 1}</span>
                                <h3 className="text-2xl md:text-3xl font-serif text-[#f7efd7] font-bold">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Feature Section - The Heritage Philosophy */}
            <section className="py-24 md:py-40 bg-black text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-7xl font-serif font-black mb-8 leading-tight">
                                    The Soul of <br /> Indian Artistry
                                </h2>
                                <p className="text-secondary text-xl mb-10 leading-relaxed uppercase tracking-widest font-bold">
                                    Culture. Color. Craftsmanship.
                                </p>
                                <p className="text-white/50 text-xl mb-12 leading-relaxed font-light">
                                    Traditional Indian makeup is an art form passed down through generations. Our approach honors these roots by using bold, vibrant palettes that harmonize with ethnic silks and intricate embroidery, ensuring every detail reflects the depth of our culture.
                                </p>
                                <ul className="space-y-6">
                                    {['Kohl-defined Precision', 'Vibrant Color Harmony', 'Classic Contour', 'Jewelry-Complimentary Glow'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-6 text-white font-bold text-lg">
                                            <div className="w-3 h-3 rounded-full bg-secondary"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                        <div className="flex-1 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true }}
                                className="relative z-10 rounded-[4rem] md:rounded-[6rem] overflow-hidden aspect-square shadow-2xl"
                            >
                                <img src={mainImage} alt="Traditional Philosophy" className="w-full h-full object-cover" />
                            </motion.div>
                            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-secondary/20 rounded-[4rem] md:rounded-[6rem] -z-0 -translate-x-4 -translate-y-4 md:-translate-x-10 md:-translate-y-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-24 md:py-40 bg-[#5c4033] text-[#f7efd7] relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-6xl font-serif mb-12 max-w-5xl mx-auto leading-[1.2]">
                            "Your roots are your beauty. We honor every tradition with precision, passion, and the perfect palette."
                        </h2>
                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                            <Link
                                to="/#contact"
                                className="group relative inline-flex items-center justify-center overflow-hidden px-12 py-5 bg-secondary text-dark rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 uppercase"
                            >
                                <span className="relative z-10">BOOK YOUR HERITAGE LOOK</span>
                            </Link>
                            <Link
                                to="/#portfolio"
                                className="px-12 py-5 border border-white/20 hover:border-white text-white rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300 uppercase"
                            >
                                VIEW FULL PORTFOLIO
                            </Link>
                        </div>
                    </motion.div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute bottom-[-10%] left-[-5%] w-[40%] aspect-square bg-[#f7efd7]/5 rounded-full blur-[100px]" />
                <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-secondary/5 rounded-full blur-[100px]" />
            </section>
        </div>
    );
};

export default TraditionalIndian;

