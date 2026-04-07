import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "HOME", href: "#home" },
        { name: "ABOUT", href: "#about" },
        { name: "SERVICES", href: "#services" },
        { name: "PORTFOLIO", href: "#portfolio" },
        { name: "CONTACT", href: "#contact" },
    ];

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
                    ${scrolled 
                        ? "bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_0_rgba(255,182,193,0.1)] py-4" 
                        : "bg-transparent py-4 md:py-6"
                    }
                `}>
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-xl md:text-2xl font-serif font-black text-dark tracking-tighter cursor-pointer flex items-center gap-2"
                    >
                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-[10px] font-bold">AS</div>
                        <span>ANISHA <span className="text-accent">MAKEOVER</span></span>
                    </motion.div>
                    
                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex gap-10 items-center font-sans text-[11px] font-bold tracking-[0.25em] text-dark">
                        {navLinks.map((link) => (
                            <motion.a 
                                key={link.name} 
                                href={link.href} 
                                whileHover={{ y: -2 }}
                                className="relative group transition-colors duration-300 hover:text-accent"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                        <motion.a 
                            href="#contact" 
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-dark text-white px-8 py-3 rounded-full hover:bg-accent hover:shadow-lg transition-all duration-300 text-[10px] tracking-[0.2em] inline-block shadow-md"
                        >
                            BOOK APPOINTMENT
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <motion.button 
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-dark/5 text-dark"
                    >
                        <div className="w-5 h-4 flex flex-col justify-between relative">
                            <motion.span 
                                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="w-full h-[2px] bg-dark block rounded-full origin-left"
                            />
                            <motion.span 
                                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                className="w-1/2 h-[2px] bg-dark block rounded-full"
                            />
                            <motion.span 
                                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-full h-[2px] bg-dark block rounded-full origin-left"
                            />
                        </div>
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-dark/20 backdrop-blur-xl lg:hidden flex flex-col justify-center items-center p-8"
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-white w-full max-w-sm rounded-[40px] p-10 shadow-2xl relative"
                        >
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-8 text-dark/40 font-bold tracking-widest text-[10px]"
                            >
                                CLOSE [ESC]
                            </button>

                            <div className="flex flex-col gap-8 text-center mt-6">
                                {navLinks.map((link, idx) => (
                                    <motion.a 
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        href={link.href} 
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-serif font-black text-dark hover:text-accent transition-all group overflow-hidden"
                                    >
                                        <motion.span 
                                            whileHover={{ y: -5 }} 
                                            className="block"
                                        >
                                            {link.name}
                                        </motion.span>
                                    </motion.a>
                                ))}
                                <motion.a 
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-6 bg-accent text-white py-5 rounded-3xl font-bold tracking-[0.2em] text-sm shadow-xl hover:shadow-accent/40 shadow-accent/20 transition-all"
                                >
                                    BOOK APPOINTMENT
                                </motion.a>
                            </div>
                            
                            <div className="mt-12 text-center border-t border-pink-50 pt-8">
                                <p className="text-accent font-bold text-[10px] tracking-widest mb-2 uppercase">Official Number</p>
                                <p className="text-dark font-black tracking-widest">+91 89543 86375</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
