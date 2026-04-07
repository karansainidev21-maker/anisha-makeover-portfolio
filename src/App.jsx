import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Artificial delay to show the luxury loader experience
    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
        lenis.destroy();
    };
  }, []);

  return (
    <>
        <AnimatePresence mode="wait">
            {isLoading && <Loader key="loader" />}
        </AnimatePresence>
        
        <main className="font-sans antialiased bg-white selection:bg-accent selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
            
            {/* Scroll to top button */}
            <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-14 h-14 bg-accent/80 hover:bg-accent text-white rounded-full transition-all duration-300 z-50 shadow-lg flex items-center justify-center group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </main>
    </>
  );
}

export default App;
