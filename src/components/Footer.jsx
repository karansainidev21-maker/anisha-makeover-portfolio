import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
    const socialLinks = [
        { name: "INSTAGRAM", url: "https://instagram.com/anishamakeover0.1" },
        { name: "WHATSAPP", url: "https://wa.me/918954386375" },
        { name: "YOUTUBE", url: "https://www.youtube.com/@nishamakeover.01" }
    ];

    const navItems = ["Home", "About", "Services", "Portfolio", "Contact"];

    return (
        <footer className="pt-48 pb-12 relative overflow-hidden bg-[#050505]">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
            
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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[11px] font-bold tracking-[0.4em] text-white/50 hover:text-secondary transition-all duration-500 uppercase pb-2 border-b border-white/5 hover:border-secondary"
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
                                <h4 className="text-secondary font-black text-[12px] tracking-[0.4em] mb-12 uppercase">THE STUDIO</h4>
                                <ul className="space-y-8">
                                    {navItems.map((item) => (
                                        <li key={item}>
                                            <Link 
                                                to={`/#${item.toLowerCase()}`}
                                                className="text-white/60 hover:text-white font-serif italic text-4xl font-bold transition-all duration-500 block"
                                            >
                                                {item}
                                            </Link>
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
                    <p className="text-[11px] font-medium tracking-[0.4em] text-white/40 uppercase">
                        © 2026 ANISHA MAKEOVER WORLDWIDE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex items-center gap-10">
                        <span className="text-[11px] font-medium tracking-[0.4em] text-white/40 uppercase cursor-pointer hover:text-secondary transition-all duration-300">Privacy Policy</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-[11px] font-medium tracking-[0.4em] text-white/40 uppercase cursor-pointer hover:text-secondary transition-all duration-300">Terms of Artistry</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
