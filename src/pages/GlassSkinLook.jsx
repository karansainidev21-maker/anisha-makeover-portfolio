import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/glassskinimg/glassskin1.jpeg';
import img2 from '../assets/glassskinimg/glassskin2.jpeg';
import img3 from '../assets/glassskinimg/glassskin3.jpeg';
import img4 from '../assets/glassskinimg/glasskin4.jpeg';
import img5 from '../assets/glassskinimg/glasskin5.jpeg';
import img6 from '../assets/glassskinimg/glassskin6.jpeg';

const GlassSkinLook = () => {
    const editorialImages = [
        { url: img1, title: "Luminous Dew" },
        { url: img2, title: "Soft Reflection" },
        { url: img3, title: "Hydrated Glow" },
        { url: img4, title: "Pearl Finish" },
        { url: img5, title: "Pure Beauty" },
        { url: img6, title: "Radiant Skin" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-[#f8f5f2] relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            EDITORIAL CONCEPT
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-dark leading-tight mb-8">
                            Glass Skin <br /> Perfection
                        </h1>
                        <p className="text-dark/60 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-secondary/20 pt-8 mt-4 px-4">
                            "A masterclass in hydration and light. Achieving the ultimate dewy, translucent finish for the modern minimalist."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-l-full transform translate-x-1/4" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {editorialImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] aspect-[4/5] bg-secondary/5 shadow-sm"
                        >
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-start justify-end p-8">
                                <span className="text-white/70 text-[10px] font-black tracking-widest uppercase mb-2">LOOK {index + 1}</span>
                                <h3 className="text-xl md:text-2xl font-serif text-white font-bold">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-secondary text-dark relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                        "Elegance is refusal. Refusal to settle for anything less than pure, radiant luminosity that glows from within."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-dark text-white hover:bg-white hover:text-dark rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        REQUEST THIS LOOK
                    </Link>
                </div>
                {/* Abstract light splashes */}
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
            </section>
        </div>
    );
};

export default GlassSkinLook;
