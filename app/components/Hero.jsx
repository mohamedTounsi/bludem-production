"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 500);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Force video to play on mount (helps mobile autoplay)
  useEffect(() => {
    const video = document.querySelector < HTMLVideoElement > "video";
    if (video) {
      video.muted = true; // just in case
      video.play().catch(() => {
        console.log("Autoplay blocked on this device");
      });
    }
  }, []);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "WORKS", href: "#works" },
    { label: "SERVICES", href: "#services" },
    { label: "CONTACT", href: "#contact" },
    { label: "BLOG", href: "#blog" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: 300, transition: { duration: 0.3 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* ✅ Animated background video */}
      <motion.video
        key="hero-video"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList="nodownload"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ WebkitPlaysinline: "true" }}
      >
        <source src="/bludemherof.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glowing logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute flex items-center top-0 left-0 z-20 p-6 sm:p-8 gap-3"
      >
        <Image
          src="/bludemlogo.png"
          alt="Logo"
          width={100}
          height={100}
          className="w-10 sm:w-20"
        />
        <div
          style={{ fontFamily: "'Playfair Display', serif" }}
          className="text-white flex flex-col text-sm sm:text-lg font-light tracking-widest"
        >
          BLUDEM.
          <span>PRODUCTION</span>
        </div>
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex absolute top-0 right-0 z-20 flex-col gap-4 p-8 font-extralight text-white text-md tracking-wide">
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden"
          >
            <motion.span
              className="relative block"
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              {link.label}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.span>
          </motion.a>
        ))}
      </nav>

      {/* Hamburger */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute top-6 right-6 z-30 text-white p-2"
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 right-0 h-full w-64 bg-black/50 backdrop-blur-md z-30 flex flex-col p-8 pt-20 border-l border-white/10"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-5 right-5 text-white"
            >
              <X size={26} />
            </button>
            {navLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                className="text-white text-lg font-light tracking-widest relative group overflow-hidden"
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.span
                  className="relative block mb-2"
                  whileHover={{ x: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[80px] md:text-[140px] font-light text-white text-center tracking-wider leading-20 md:leading-30"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block"
          >
            ADAM
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white"
          >
            TLILI
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-white text-center text-[12px] sm:text-base md:text-sm font-extralight leading-relaxed mb-12 tracking-wide"
        >
          I am a passionate and innovative Videographer with over a decade of
          experience in the field. My journey began with a fascination for
          visual arts and a keen eye for detail.
        </motion.p>

        {/* ✅ Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 flex flex-col items-center text-white"
        >
          <ChevronDown size={26} className="opacity-80" />
          <span className="text-xs mt-2 tracking-widest opacity-80">
            SCROLL
          </span>
        </motion.div>
      </div>
    </div>
  );
}
