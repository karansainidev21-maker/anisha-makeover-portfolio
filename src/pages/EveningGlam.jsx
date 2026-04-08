import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import img1 from '../assets/eveningglamimg/evening1.jpeg';
import img2 from '../assets/eveningglamimg/evening2.jpeg';
import img3 from '../assets/eveningglamimg/evening3.jpeg';
import img4 from '../assets/eveningglamimg/evening4.jpeg';
import img5 from '../assets/eveningglamimg/evening5.jpeg';
import img6 from '../assets/eveningglamimg/evening6.jpeg';

const EveningGlam = () => {
    const glamImages = [
        { url: img1, title: "Midnight Sparkle" },
        { url: img2, title: "Golden Hour Glow" },
        { url: img3, title: "Classic Red" },
        { url: img4, title: "Velvet Nights" },
        { url: img5, title: "Chandelier Light" },
        { url: img6, title: "Bold & Beautiful" }
    ];

    return (
        <div className="bg-dark min-h-screen text-white">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-dark relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            PARTY SERIES
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-white leading-tight mb-8">
                            Evening <br /> Glamour
                        </h1>
                        <p className="text-white/60 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-accent/20 pt-8 mt-4 px-4">
                            "When the sun goes down, the artistry begins. Bold, dramatic, and unapologetically luxurious."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Sparkle Effect */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-[100px] pointer-events-none" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12 bg-white text-dark rounded-t-[3rem] md:rounded-t-[5rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {glamImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[2rem] aspect-[3/4] bg-secondary/10"
                        >
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent flex flex-col items-center justify-end p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-xl md:text-2xl font-serif text-white font-bold mb-4">{image.title}</h3>
                                <div className="h-[1px] w-12 bg-accent" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                        "Your night, your spotlight. We don't just apply makeup; we craft your most confident self."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-accent text-white hover:bg-white hover:text-dark rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        SHINE TONIGHT
                    </Link>
                </div>
                {/* Subtle pulse circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-pulse" />
            </section>
        </div>
    );
};

export default EveningGlam;
