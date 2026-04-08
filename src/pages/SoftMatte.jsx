import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import mainImage from '../assets/soft_matte_main.png';

const SoftMatte = () => {
    const matteImages = [
        { url: mainImage, title: "Velvet Rose" },
        { url: "https://images.unsplash.com/photo-1512496011951-a96b8344693a?q=80&w=2000", title: "Petal Soft" },
        { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000", title: "Peach Fuzz" },
        { url: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad0f85?q=80&w=2000", title: "Dusty Cedar" },
        { url: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000", title: "Nude Elegance" },
        { url: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000", title: "Modern Matte" }
    ];

    return (
        <div className="bg-[#fff9f9] min-h-screen text-dark">
            {/* Header Section */}
            <section className="pt-40 pb-20 px-6 bg-[#fdeeee] relative overflow-hidden">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-4 block uppercase leading-none">
                            FASHION SERIES
                        </span>
                        <h1 className="text-4xl md:text-8xl font-serif font-black text-dark leading-tight mb-8">
                            Soft Matte <br /> Elegance
                        </h1>
                        <p className="text-dark/50 font-sans max-w-2xl mx-auto leading-relaxed text-sm md:text-lg italic border-t border-accent/10 pt-8 mt-4 px-4">
                            "A seamless blend of texture and tone. Celebrating the beauty of a velvety, shine-free finish that feels like a second skin."
                        </p>
                    </motion.div>
                </div>
                
                {/* Background Shapes */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
            </section>

            {/* Gallery Grid */}
            <section className="py-16 md:py-24 px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {matteImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[3rem] aspect-square bg-white shadow-sm"
                        >
                            <img 
                                src={image.url} 
                                alt={image.title} 
                                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                            />
                            
                            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[1px] flex items-center justify-center p-6 text-center">
                                <h3 className="text-xl md:text-3xl font-serif text-white font-black drop-shadow-lg">{image.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Quote / Conclusion */}
            <section className="py-20 md:py-32 bg-dark text-white relative overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative">
                    <h2 className="text-2xl md:text-5xl font-serif mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed">
                        "Texture is the soul of makeup. Our soft matte techniques define the face with subtle grace and timeless poise."
                    </h2>
                    <Link 
                        to="/#contact" 
                        className="inline-block px-10 py-4 md:px-12 md:py-5 bg-white text-dark hover:bg-accent hover:text-white rounded-full text-[10px] md:text-xs font-black tracking-widest transition-all duration-300"
                    >
                        GET THE VELVET LOOK
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default SoftMatte;
