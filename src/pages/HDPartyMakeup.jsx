import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mainImage from '../assets/hdparty/hd_party_makeup_main.png';

const HDPartyMakeup = () => {
    const partyImages = [
        { url: mainImage, title: "Glow Party Look" },
        { url: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=2000", title: "Sharp Definition" },
        { url: "https://images.unsplash.com/photo-1481325545291-94394fe1cf95?q=80&w=2000", title: "Cocktail Glam" },
        { url: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=2000", title: "Flawless HD" },
        { url: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000", title: "Vibrant Night" },
        { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000", title: "Celebration Ready" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            SIGNATURE SERIES
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-dark leading-tight mb-8">
                            HD Party <br /> Makeup
                        </h1>
                        <p className="text-dark/60 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-accent/20 pt-8 mt-4 px-4">
                            "High-definition perfection for your most memorable nights. Stay flawless, stay vibrant, under every light."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Sparkles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-[60px]" />
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-secondary/30 rounded-full blur-[80px]" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {partyImages.map((image, index) => (
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
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start translate-y-0">
                                <span className="text-accent text-[10px] font-black tracking-widest uppercase mb-1 md:mb-2">GLAM {index + 1}</span>
                                <h3 className="text-xl md:text-2xl font-serif text-white font-bold">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed text-white/90">
                        "Your presence is the party. We provide the flawless HD glow that ensures you are the center of attention all night long."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-white text-dark hover:bg-accent hover:text-white rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        GET PARTY READY
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default HDPartyMakeup;
