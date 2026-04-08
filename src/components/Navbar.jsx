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
                        ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(255,182,193,0.1)] py-4"
                        : "bg-transparent py-4 md:py-6"
                    }
                `}>
                    <Link
                        to="/"
                        className={`text-xl md:text-2xl font-serif font-black tracking-tighter cursor-pointer flex items-center gap-2 ${shouldBeSolid ? 'text-dark' : 'text-white'}`}
                    >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">AS</div>
                        <span>ANISHA <span className="text-accent">MAKEOVER</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className={`hidden lg:flex gap-10 items-center font-sans text-[11px] font-bold tracking-[0.25em] ${shouldBeSolid ? 'text-dark' : 'text-white'}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="relative group transition-colors duration-300 hover:text-accent"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            className={`px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 text-[10px] tracking-[0.2em] inline-block shadow-md text-center ${shouldBeSolid ? 'bg-dark text-white hover:bg-accent' : 'bg-white text-dark hover:bg-accent hover:text-white'}`}
                        >
                            BOOK APPOINTMENT
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-300 ${shouldBeSolid ? 'bg-dark/5 text-dark' : 'bg-white/10 text-white'}`}
                    >
                        <div className="w-5 h-4 flex flex-col justify-between relative">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className={`w-full h-[2px] block rounded-full origin-left ${scrolled ? 'bg-dark' : 'bg-white'}`}
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className={`w-1/2 h-[2px] block rounded-full ${scrolled ? 'bg-dark' : 'bg-white'}`}
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className={`w-full h-[2px] block rounded-full origin-left ${scrolled ? 'bg-dark' : 'bg-white'}`}
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
                        className="fixed inset-0 z-[60] bg-dark lg:hidden flex flex-col p-10 md:p-14 overflow-hidden"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute -top-20 -left-20 w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-[-10%] right-[-10%] text-white/[0.03] font-serif font-black text-[20rem] leading-none pointer-events-none select-none">
                            AS
                        </div>

                        {/* Top Header in Menu */}
                        <div className="flex justify-between items-center mb-20 relative z-10">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark text-[10px] font-bold">AS</div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group"
                            >
                                <div className="w-6 h-6 relative flex items-center justify-center">
                                    <span className="absolute w-full h-[1px] bg-white rotate-45" />
                                    <span className="absolute w-full h-[1px] bg-white -rotate-45" />
                                </div>
                            </button>
                        </div>

                        {/* Staggered Navigation Links */}
                        <nav className="flex flex-col gap-8 md:gap-12 relative z-10">
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
                                        className="text-5xl md:text-7xl font-serif font-black text-white hover:text-accent transition-all inline-block group"
                                    >
                                        <span className="inline-block group-hover:translate-x-4 transition-transform duration-500">
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
                                    <p className="text-accent font-black text-[10px] tracking-[0.4em] uppercase mb-4">CONNECT</p>
                                    <div className="flex flex-col gap-2">
                                        <a href="https://instagram.com/anishamakeover0.1" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">Instagram</a>
                                        <a href="https://wa.me/918954386375" target="_blank" className="text-white/60 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase">WhatsApp</a>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-accent font-black text-[10px] tracking-[0.4em] uppercase mb-4">EXPERIENCE</p>
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
