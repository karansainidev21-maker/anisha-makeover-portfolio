import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Select Experience',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id || 'service']: e.target.value });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();
        
        const phoneNumber = "918954386375"; // Anisha's Number
        const text = `*New Reservation Request - Anisha Makeover*%0A%0A` +
                     `*Name:* ${formData.name}%0A` +
                     `*Phone:* ${formData.phone}%0A` +
                     `*Service:* ${formData.service}%0A` +
                     `*Vision:* ${formData.message}`;
        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');

        // Reset form after submission
        setFormData({
            name: '',
            phone: '',
            service: 'Select Experience',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-24 md:py-48 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 xl:gap-24">
                    
                    {/* Info Side */}
                    <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-10 bg-secondary/30"></span>
                                <span className="text-secondary/60 font-sans font-black tracking-[0.4em] text-[10px] uppercase">SECURE YOUR SESSION</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-[1.1] tracking-tighter mb-12">
                                The <br /> <span className="text-secondary italic">Registry</span>
                            </h2>
                            
                            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-12">
                                <div className="group cursor-default">
                                    <h4 className="text-secondary/40 font-black text-[10px] tracking-[0.3em] mb-4 uppercase">LOCATION</h4>
                                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-500 italic">
                                        Basement below Ravi Kirana Store, <br /> Badli Tanda, Uttar Pradesh
                                    </p>
                                </div>
                                <div className="group cursor-default">
                                    <h4 className="text-secondary/40 font-black text-[10px] tracking-[0.3em] mb-4 uppercase">CONSULTATION</h4>
                                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors duration-500 italic">
                                        +91 89543 86375 <br /> nishamakeover17@gmail.com
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-3xl border border-white/5 p-8 md:p-16 rounded-[3rem] shadow-2xl relative"
                        >
                            <form onSubmit={handleWhatsAppSubmit} className="space-y-12 relative z-10">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="relative group">
                                        <input 
                                            type="text" 
                                            required
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg focus:outline-none focus:border-secondary transition-all peer placeholder-transparent"
                                            placeholder="Name"
                                        />
                                        <label htmlFor="name" className="absolute left-0 -top-4 text-[10px] font-black text-secondary/40 tracking-[0.3em] uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px]">Your Name</label>
                                    </div>
                                    <div className="relative group">
                                        <input 
                                            type="tel" 
                                            required
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg focus:outline-none focus:border-secondary transition-all peer placeholder-transparent"
                                            placeholder="Phone"
                                        />
                                        <label htmlFor="phone" className="absolute left-0 -top-4 text-[10px] font-black text-secondary/40 tracking-[0.3em] uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px]">Phone Number</label>
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <select 
                                        id="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white/40 text-lg focus:outline-none focus:border-secondary transition-all appearance-none cursor-pointer"
                                    >
                                        <option className="bg-[#111]">Select Experience</option>
                                        <option className="bg-[#111]">Royal Bridal Artistry</option>
                                        <option className="bg-[#111]">Glass Skin Look</option>
                                        <option className="bg-[#111]">Fashion Editorial</option>
                                        <option className="bg-[#111]">The Academy Enrollment</option>
                                    </select>
                                    <div className="absolute right-0 bottom-6 pointer-events-none text-white/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    <p className="absolute left-0 -top-4 text-[10px] font-black text-secondary/40 tracking-[0.3em] uppercase">Service Choice</p>
                                </div>

                                <div className="relative group">
                                    <textarea 
                                        rows="3"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-white/10 py-4 text-white text-lg focus:outline-none focus:border-secondary transition-all peer placeholder-transparent resize-none"
                                        placeholder="Message"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-0 -top-4 text-[10px] font-black text-secondary/40 tracking-[0.3em] uppercase transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-white/20 peer-placeholder-shown:top-4 peer-focus:-top-4 peer-focus:text-secondary peer-focus:text-[10px]">Your Vision</label>
                                </div>

                                <button type="submit" className="w-full group relative inline-flex items-center justify-center overflow-hidden px-12 py-6 bg-secondary text-dark rounded-full text-[10px] font-black tracking-[0.5em] transition-all duration-500 md:hover:bg-white md:shadow-2xl active:scale-[0.98] uppercase">
                                    <span className="relative z-10">Confirm Reservation</span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                </button>
                            </form>
                            
                            {/* Subtle background glow */}
                            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-1/2 -left-[10%] -translate-y-1/2 text-white/[0.01] font-serif font-black text-[30vw] leading-none pointer-events-none select-none italic -rotate-12">
                AM
            </div>
        </section>
    );
};

export default Contact;
