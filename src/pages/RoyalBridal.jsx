import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const RoyalBridal = () => {
    const bridalImages = [
        { url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000", title: "Traditional Gold" },
        { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000", title: "Jeweled Elegance" },
        { url: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000", title: "Soft Matte Finish" },
        { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=2000", title: "Heritage Style" },
        { url: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=2000", title: "Royal Evening Look" },
        { url: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=2000", title: "Modern Editorial" }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-primary/20 relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            SIGNATURE SERIES
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-dark leading-tight mb-8">
                            Royal Bridal <br /> Masterpiece
                        </h1>
                        <p className="text-dark/60 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-accent/20 pt-8 mt-4 px-4">
                            "Where timeless tradition meets modern elegance. A journey into the art of bridal transformation."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {bridalImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2rem] aspect-[3/4] bg-secondary/10"
                        >
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-500 flex flex-col items-start translate-y-0">
                                <span className="text-accent text-[10px] font-black tracking-widest uppercase mb-1 md:mb-2">COLLECTION {index + 1}</span>
                                <h3 className="text-xl md:text-2xl font-serif text-white font-bold">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                        "Your vision, our artistry. Together we create the perfect bridal transformation that stays in memories forever."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-accent hover:bg-white hover:text-dark text-white rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        BOOK YOUR CONSULTATION
                    </Link>
                </div>
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[800px] md:h-[800px] border border-white rounded-full animate-pulse" />
                </div>
            </section>
        </div>
    );
};


export default RoyalBridal;
