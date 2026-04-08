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
        <div className="bg-[#fffcf5] min-h-screen text-dark">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-[#f7efd7] relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <span className="text-secondary font-sans font-bold tracking-[0.4em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            CULTURAL MASTERPIECE
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-[#5c4033] leading-tight mb-8">
                            Traditional <br /> Indian Grace
                        </h1>
                        <p className="text-[#5c4033]/60 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-secondary/30 pt-8 mt-4 px-4">
                            "A tribute to our deep-rooted heritage. Capturing the timeless splendor of Indian traditions with a touch of modern artistry."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pichica.png')] opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 transform translate-x-1/2" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {culturalImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500"
                        >
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-0 border-[1.5rem] border-white/0 group-hover:border-white/20 transition-all duration-700 pointer-events-none" />
                            
                            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent">
                                <h3 className="text-2xl font-serif text-white font-bold">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-[#5c4033] text-[#f7efd7] relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                        "Your roots are your beauty. We honor every tradition with precision, passion, and the perfect palette."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-secondary text-dark hover:bg-white hover:text-dark rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        BOOK YOUR HERITAGE LOOK
                    </Link>
                </div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-[50px]" />
                <div className="absolute top-10 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[80px]" />
            </section>
        </div>
    );
};

export default TraditionalIndian;
