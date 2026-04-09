import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { name: "INSTAGRAM", url: "https://instagram.com/anishamakeover0.1" },
        { name: "WHATSAPP", url: "https://wa.me/918954386375" },
        { name: "YOUTUBE", url: "https://www.youtube.com/@nishamakeover.01" }
    ];

    const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

    return (
        <footer className="pt-48 pb-12 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 md:gap-32">
                    
                    {/* Brand Empire Side */}
                    <div className="lg:col-span-12 xl:col-span-6 flex flex-col justify-between">
                        <div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex flex-col mb-16"
                            >
                                <span className="text-5xl md:text-[8rem] font-serif font-black text-white leading-none tracking-tighter">
                                    ANISHA
                                </span>
                                <span className="text-sm md:text-xl font-sans font-black tracking-[0.8em] text-secondary leading-none mt-4 uppercase">
                                    Makeover
                                </span>
                            </motion.div>
                            <p className="text-white/30 text-lg md:text-2xl font-sans font-light italic max-w-xl leading-relaxed">
                                "Guided by the visionary expertise of Anisha Saini, we redefine the boundaries of traditional beauty through precision and care."
                            </p>
                        </div>

                        <div className="hidden xl:flex gap-16 mt-32">
                            {socialLinks.map((social) => (
                                <a 
                                    key={social.name}
                                    href={social.url}
                                    className="text-[10px] font-black tracking-[0.5em] text-white/40 hover:text-white transition-all duration-500 uppercase pb-2 border-b border-transparent hover:border-secondary"
                                >
                                    {social.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-12 xl:col-span-6 grid md:grid-cols-2 gap-20">
                        <div className="space-y-16">
                            <div>
                                <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] mb-12 uppercase">THE STUDIO</h4>
                                <ul className="space-y-8">
                                    {navItems.map((item) => (
                                        <li key={item}>
                                            <a 
                                                href={`#${item.toLowerCase()}`}
                                                className="text-white/40 hover:text-white font-serif italic text-4xl font-bold transition-all duration-500"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-16">
                            <div>
                                <h4 className="text-secondary font-black text-[10px] tracking-[0.4em] mb-12 uppercase">CONSULTATION</h4>
                                <div className="space-y-8">
                                    <div className="group cursor-default">
                                        <p className="text-white font-serif text-3xl font-bold leading-tight">nishamakeover17@gmail.com</p>
                                        <div className="h-[1px] w-0 group-hover:w-full bg-secondary transition-all duration-700 mt-4" />
                                    </div>
                                    <div className="group cursor-default">
                                        <p className="text-white font-serif text-3xl font-bold leading-tight">+91 89543 86375</p>
                                        <div className="h-[1px] w-0 group-hover:w-full bg-secondary transition-all duration-700 mt-4" />
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Socials */}
                            <div className="xl:hidden flex gap-8">
                                {socialLinks.map((social) => (
                                    <a key={social.name} href={social.url} className="text-[10px] font-black tracking-widest text-secondary uppercase">
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
                    <p className="text-[9px] font-black tracking-[0.6em] text-white/10 uppercase">
                        © 2026 ANISHA MAKEOVER WORLDWIDE.
                    </p>
                    <div className="flex items-center gap-10">
                        <span className="text-[9px] font-black tracking-[0.6em] text-white/10 uppercase cursor-pointer hover:text-white transition-all">Privacy Policy</span>
                        <span className="text-[9px] font-black tracking-[0.6em] text-white/10 uppercase cursor-pointer hover:text-white transition-all">Terms of Artistry</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
