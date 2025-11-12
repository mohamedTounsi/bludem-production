"use client";

import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUpRight,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/edamtlili/",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/adam.tlili.430946",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="border-t border-zinc-300"></div>
      <motion.div
        ref={ref}
        className="min-h-screen flex flex-col items-center justify-center px-8 py-8 md:py-20"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <img
            src="/adampic.jpg"
            alt="Filmmaker"
            className="w-90 h-120 object-cover"
          />
        </motion.div>

        {/* Vertical Line */}
        <motion.div
          className="h-12 w-0.5 bg-white mb-8"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.6, delay: 0.2, origin: "top" }}
        ></motion.div>

        {/* Description Text */}
        <motion.p
          className="text-center text-sm text-gray-300 max-w-xl mb-16 md:text-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Ready to capture your story? Let's create stunning visuals together.
          Contact us now for a free consultation and bring your vision to life.
        </motion.p>

        {/* Main Heading */}
        <motion.div className="text-center md:mb-6">
          <motion.h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-8xl font-light text-zinc-300 tracking-wider leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            TRANSFORM
            <br />
            YOUR VISION
            <br />
            INTO REALITY.
            <br />
            CONTACT ME
            <br />
            TODAY.
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* Contact & Social Section */}
      <div className="border-t border-gray-800">
        <motion.div
          className="max-w-7xl mx-auto px-8 py-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.a
              href="mailto:adamtlili@gmail.com"
              className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "white" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40"
                  whileHover={{ scale: 1.1 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.div>

                <span className="text-lg">adamtlili@gmail.com</span>
              </div>
              <motion.div
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>

            <motion.a
              href="tel:+261"
              className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, borderColor: "white" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40"
                  whileHover={{ scale: 1.1 }}
                >
                  <Phone className="w-5 h-5" />
                </motion.div>

                <span className="text-lg">+216 29 830 867</span>
              </div>
              <motion.div
                whileHover={{ x: 4, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          ></motion.div>

          {/* Social Links */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: "white" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {link.icon}
                  </motion.div>

                  <span className="text-lg">{link.name}</span>
                </div>
                <motion.div
                  className="w-5 h-5"
                  whileHover={{ y: -8, x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Footer */}
          <motion.div
            className="border-t border-gray-800 mt-16 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © 2025 Bludem Production - All rights reserved
              </div>
              <div className="flex gap-8 text-sm">
                <motion.a
                  target="_blank"
                  href="https://portfoliomt-kohl.vercel.app/"
                  className="text-gray-500 transition"
                  whileHover={{ color: "white" }}
                >
                  Powered by <span className="underline">MT</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
