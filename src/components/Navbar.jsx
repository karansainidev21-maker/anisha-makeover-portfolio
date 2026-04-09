import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "/#home" },
        { name: "ABOUT", href: "/#about" },
        { name: "SERVICES", href: "/#services" },
        { name: "PORTFOLIO", href: "/#portfolio" },
        { name: "CONTACT", href: "/#contact" },
    ];

    const isHomePage = location.pathname === '/';
    const shouldBeSolid = scrolled || !isHomePage;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center py-4 px-4 md:px-8`}
            >
                <div className={`
                    w-full max-w-7xl flex justify-between items-center px-6 md:px-10 py-3 rounded-full 
                    transition-all duration-500 
                    ${shouldBeSolid
                        ? "bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl py-4"
                        : "bg-transparent py-4 md:py-6"
                    }
                `}>
                    <Link
                        to="/"
                        onClick={() => window.scrollTo(0, 0)}
                        className="flex flex-col group py-4"
                    >
                        <span className="text-2xl md:text-3xl font-serif font-black text-white leading-none tracking-tight group-hover:text-secondary transition-colors duration-500">
                            ANISHA
                        </span>
                        <span className="text-[10px] md:text-xs font-sans font-black tracking-[0.6em] text-secondary/80 leading-none mt-1 group-hover:text-white transition-colors duration-500 uppercase">
                            Makeover
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-14 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="relative text-[10px] font-black tracking-[0.4em] text-white/50 hover:text-white transition-all duration-300 group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-[1.px] bg-secondary group-hover:w-full transition-all duration-700" />
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            className="px-10 py-4 bg-secondary text-dark rounded-full text-[10px] font-black tracking-widest hover:bg-white hover:shadow-[0_0_30px_rgba(191,155,106,0.5)] transition-all duration-500 uppercase"
                        >
                            RESERVE
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-full transition-all duration-500 ${shouldBeSolid ? 'bg-secondary text-dark' : 'bg-white/10 text-white'}`}
                    >
                        <div className="w-6 h-4 flex flex-col justify-between relative">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className={`w-full h-[2px] block rounded-full origin-left ${shouldBeSolid ? 'bg-dark' : 'bg-white'}`}
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className={`w-full h-[2px] block rounded-full ${shouldBeSolid ? 'bg-dark' : 'bg-white'}`}
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className={`w-full h-[2px] block rounded-full origin-left ${shouldBeSolid ? 'bg-dark' : 'bg-white'}`}
                            />
                        </div>
                    </motion.button>
                </div>
            </motion.header>

            {/* Full-Screen Luxury Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] bg-[#0A0A0A] lg:hidden flex flex-col p-10 md:p-14 overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/pichica.png')] opacity-10 pointer-events-none" />
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-[-5%] right-[-5%] text-white/[0.02] font-serif font-black text-[clamp(10rem,50vw,25rem)] leading-none pointer-events-none select-none italic">
                            AM
                        </div>

                        {/* Top Header in Menu */}
                        <div className="flex justify-between items-center mb-24 relative z-10">
                            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-dark text-[11px] font-black">AM</div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group bg-white/5 active:bg-secondary active:text-dark transition-colors"
                            >
                                <div className="w-6 h-6 relative flex items-center justify-center">
                                    <span className="absolute w-full h-[2px] bg-current rotate-45" />
                                    <span className="absolute w-full h-[2px] bg-current -rotate-45" />
                                </div>
                            </button>
                        </div>

                        {/* Staggered Navigation Links */}
                        <nav className="flex flex-col gap-10 md:gap-14 relative z-10">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + idx * 0.1, duration: 0.8, ease: "easeOut" }}
                                >
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-6xl md:text-8xl font-serif font-black text-white hover:text-secondary transition-all inline-block group"
                                    >
                                        <span className="inline-block group-hover:translate-x-6 transition-transform duration-700 uppercase">
                                            {link.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Menu Footer */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            className="mt-auto relative z-10"
                        >
                            <div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/10">
                                <div>
                                    <p className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-4">CONNECT</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="https://instagram.com/anishamakeover0.1" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Instagram</a>
                                        <a href="https://wa.me/918954386375" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">WhatsApp</a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-secondary font-black text-[10px] tracking-[0.4em] uppercase mb-4">EXPERIENCE</p>
                                    <Link 
                                        to="/#contact" 
                                        onClick={() => setIsOpen(false)}
                                        className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="mt-12 flex justify-between items-center text-white/20 text-[9px] font-black tracking-[0.5em] uppercase">
                                <span>© 2026 ANISHA MAKEOVER</span>
                                <span>EST. 2024</span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
