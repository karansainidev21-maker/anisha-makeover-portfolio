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
            {/* 3D Background Effect - Only render if visible */}
            {inView && <ContactCanvas />}

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
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="bg-secondary/10 backdrop-blur-3xl p-12 md:p-16 rounded-[3rem] border border-white/40 shadow-2xl relative"
                    >
                        <div className="absolute top-8 left-10 text-accent font-black text-[10px] tracking-[0.3em] uppercase">DIRECT MESSAGE</div>
                        <form onSubmit={handleFormSubmit} className="space-y-8 font-sans mt-10">
                            <div className="space-y-3">
                                <label className="text-[10px] font-black tracking-widest text-dark/40 uppercase px-2">FULL NAME</label>
                                <input type="text" name="name" placeholder="Enter your name" className="w-full bg-white/50 backdrop-blur-md px-8 py-5 rounded-[2rem] border border-white focus:outline-none focus:border-accent focus:bg-white transition-all text-dark font-bold placeholder:text-dark/20" required />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black tracking-widest text-dark/40 uppercase px-2">CONTACT NUMBER</label>
                                <input type="tel" name="phone" placeholder="Enter your phone number" className="w-full bg-white/50 backdrop-blur-md px-8 py-5 rounded-[2rem] border border-white focus:outline-none focus:border-accent focus:bg-white transition-all text-dark font-bold placeholder:text-dark/20" required />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black tracking-widest text-dark/40 uppercase px-2">YOUR MESSAGE</label>
                                <textarea name="message" rows="3" placeholder="Enter your message" className="w-full bg-white/50 backdrop-blur-md px-8 py-5 rounded-[2rem] border border-white focus:outline-none focus:border-accent focus:bg-white transition-all text-dark font-bold placeholder:text-dark/20" required></textarea>
                            </div>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit" 
                                className="w-full bg-accent text-white py-6 rounded-[2rem] font-black tracking-[0.2em] text-sm shadow-xl shadow-accent/20 hover:shadow-accent/40 transition-all duration-300"
                            >
                                REQUEST APPOINTMENT
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
