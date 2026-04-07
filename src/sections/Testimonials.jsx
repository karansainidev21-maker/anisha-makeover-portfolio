import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        { name: "Priya Sharma", role: "Bride", text: "Anisha did an amazing job for my wedding! The makeup stayed perfect all night and I felt like a queen. Truly the best bridal studio." },
        { name: "Neha Verma", role: "Client", text: "I've been here for party makeup twice and they never disappoint. The studio is so luxury and the products are top class." },
        { name: "Anjali Gupta", role: "Bridal Client", text: "Professional, punctual, and very talented. She understood exactly what I wanted for my engagement. Highly recommended!" }
    ];

    return (
        <section className="py-24 bg-primary/20">
            <div className="container mx-auto px-6 text-center">
                <span className="text-accent font-sans font-bold tracking-widest text-sm mb-4 block">TESTIMONIALS</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-16 leading-tight">
                    What Our Beautiful <br /> Clients Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {reviews.map((review, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-pink-50 relative"
                        >
                            <div className="text-4xl text-accent font-serif mb-6 opacity-30">"</div>
                            <p className="text-dark/70 font-sans leading-relaxed mb-8 italic">
                                {review.text}
                            </p>
                            <div className="w-12 h-[1px] bg-accent mx-auto mb-6" />
                            <h4 className="text-xl font-serif font-bold text-dark">{review.name}</h4>
                            <span className="text-sm font-sans tracking-widest text-accent uppercase">{review.role}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
