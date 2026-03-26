import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Real, high‑resolution stock images of containers, ports, and cargo
  const images = [
    "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format",
    "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?q=80&w=2070&auto=format",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto‑cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Preload images
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: idx === currentIndex ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            Reliable Clearing & Forwarding Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg mb-6"
          >
            Customs clearance, freight forwarding and cargo logistics
            across Nigeria and international trade routes.
          </motion.p>

          <motion.a
            href="/services"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-primary inline-block px-6 py-3 rounded-lg transition hover:scale-105"
          >
            Explore Services
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;