import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ContactCanvas from '../components/ContactCanvas';

const Contact = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.1 });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        const whatsappMessage = `*New Booking Request*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
        window.open(`https://wa.me/918954386375?text=${whatsappMessage}`, '_blank');
    };

    return (
        <section ref={ref} id="contact" className="py-32 bg-white relative overflow-hidden">
            {/* 3D Optimized Effect */}
            {inView && <ContactCanvas />}

            {/* Premium Aesthetic Aura Background - Optimized for Performance */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden translate-z-0">
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        x: [0, 60, 0],
                        y: [0, 30, 0],
                        opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[50px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.15, 1],
                        x: [0, -50, 0],
                        y: [0, 80, 0],
                        opacity: [0.08, 0.12, 0.08]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[15%] -right-[5%] w-[35%] h-[35%] rounded-full bg-secondary blur-[60px]"
                />
                <motion.div 
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.08, 0.05]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[15%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[70px]"
                />
                
                {/* Subtle Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.02] mix-blend-soft-light bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-sans font-bold tracking-[0.3em] text-[10px] md:text-sm mb-6 block uppercase leading-none">RESERVATION</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-black text-dark mb-10 leading-[1] tracking-tighter">
                            Book Your <br /> Magic <span className="text-accent">Moment</span>
                        </h2>
                        <p className="text-dark/50 text-base md:text-xl mb-12 font-sans max-w-md leading-relaxed">
                            Step into a world of elegance. Our expert team is ready to craft the transformation you've always dreamed of.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-10 text-left">
                            {[
                                { 
                                    title: "VISIT STUDIO", 
                                    info: "Basement below Ravi Kirana Store, Badli Tanda",
                                },
                                { 
                                    title: "CONNECT", 
                                    info: "+91 89543 86375", 
                                }
                            ].map((item, index) => (
                                <div key={index} className="group cursor-pointer">
                                    <h4 className="text-[10px] font-black text-accent tracking-[0.2em] uppercase mb-3 opacity-60">{item.title}</h4>
                                    <p className="text-lg font-serif text-dark font-black group-hover:text-accent transition-colors duration-300">
                                        {item.info}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 flex flex-wrap gap-6">
                            <motion.a 
                                href="https://wa.me/918954386375" 
                                target="_blank"
                                whileHover={{ y: -5 }}
                                className="bg-[#25D366] px-10 py-4 rounded-full text-white font-black text-[12px] tracking-widest inline-flex items-center gap-3 shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
                            >
                                WHATSAPP US
                            </motion.a>
                            <motion.a 
                                href="https://instagram.com/anishamakeover0.1"  
                                target="_blank"
                                whileHover={{ y: -5 }}
                                className="bg-dark text-white px-10 py-4 rounded-full font-black text-[12px] tracking-widest inline-flex items-center gap-3 shadow-xl hover:shadow-dark/40 transition-all duration-300"
                            >
                                INSTAGRAM
                            </motion.a> 
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="bg-white/40 backdrop-blur-3xl p-10 md:p-14 rounded-[3.5rem] border border-accent/20 shadow-[0_40px_100px_-20px_rgba(197,160,89,0.1)] relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                        
                        <div className="relative mb-12">
                            <span className="text-accent font-black text-[9px] tracking-[0.5em] uppercase block mb-3">DIRECT MESSAGE</span>
                            <h3 className="text-3xl font-serif font-black text-dark tracking-tighter">Connect with <span className="text-accent italic">Anisha Makeover</span></h3>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-10">
                            {/* Input Field - Full Name */}
                            <div className="group relative">
                                <label className="absolute -top-3 left-6 px-3 bg-white/80 backdrop-blur-sm text-[9px] font-black tracking-widest text-accent z-10 rounded-full border border-accent/10">FULL NAME</label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-6 text-accent/40 group-focus-within:text-accent transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Enter your name" 
                                        className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-16 py-6 rounded-3xl border border-accent/5 focus:border-accent transition-all duration-500 text-dark font-bold placeholder:text-dark/10 outline-none shadow-sm focus:shadow-xl focus:shadow-accent/5" 
                                        required 
                                    />
                                </div>
                            </div>

                            {/* Input Field - Phone */}
                            <div className="group relative">
                                <label className="absolute -top-3 left-6 px-3 bg-white/80 backdrop-blur-sm text-[9px] font-black tracking-widest text-accent z-10 rounded-full border border-accent/10">CONTACT NUMBER</label>
                                <div className="relative flex items-center">
                                    <span className="absolute left-6 text-accent/40 group-focus-within:text-accent transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </span>
                                    <input 
                                        type="tel" 
                                        name="phone" 
                                        placeholder="Enter your phone number" 
                                        className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-16 py-6 rounded-3xl border border-accent/5 focus:border-accent transition-all duration-500 text-dark font-bold placeholder:text-dark/10 outline-none shadow-sm focus:shadow-xl focus:shadow-accent/5" 
                                        required 
                                    />
                                </div>
                            </div>

                            {/* Input Field - Message */}
                            <div className="group relative">
                                <label className="absolute -top-3 left-6 px-3 bg-white/80 backdrop-blur-sm text-[9px] font-black tracking-widest text-accent z-10 rounded-full border border-accent/10">YOUR MESSAGE</label>
                                <div className="relative">
                                    <span className="absolute left-6 top-6 text-accent/40 group-focus-within:text-accent transition-colors duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                    </span>
                                    <textarea 
                                        name="message" 
                                        rows="4" 
                                        placeholder="Enter your message" 
                                        className="w-full bg-white/60 hover:bg-white/80 focus:bg-white px-16 py-6 rounded-3xl border border-accent/5 focus:border-accent transition-all duration-500 text-dark font-bold placeholder:text-dark/10 outline-none shadow-sm focus:shadow-xl focus:shadow-accent/5 resize-none" 
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <motion.button 
                                whileHover={{ scale: 1.02, backgroundColor: "#000" }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full bg-accent text-white py-8 rounded-[2.5rem] font-black tracking-[0.3em] text-xs shadow-2xl shadow-accent/25 transition-all duration-500 relative group overflow-hidden"
                            >
                                <span className="relative z-10">REQUEST APPOINTMENT</span>
                                <div className="absolute inset-0 bg-dark translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </motion.button>
                            
                            <p className="text-[10px] text-dark/30 text-center font-bold tracking-widest leading-relaxed">
                                BY CONFIRMING, YOU AGREE TO OUR <br /> TERMS & COLLECTION OF DATA
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
