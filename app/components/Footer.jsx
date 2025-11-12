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

export default function Footer() {
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

  return (
    <footer className="bg-zinc-900 text-white">
      {/* Hero Section */}
      <div className="border-t border-zinc-300"></div>
      <div className="min-h-screen flex flex-col items-center justify-center px-8 py-8 md:py-20">
        <div>
          <img
            src="/adampic.jpg"
            alt="Filmmaker"
            className="w-90 h-120 object-cover"
          />
        </div>

        <div className="h-12 w-0.5 bg-white mb-8"></div>

        <p className="text-center text-sm text-gray-300 max-w-xl mb-16 md:text-md leading-relaxed">
          Ready to capture your story? Let's create stunning visuals together.
          Contact us now for a free consultation and bring your vision to life.
        </p>

        <div className="text-center md:mb-6">
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-8xl font-light text-zinc-300 tracking-wider leading-tight"
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
          </h2>
        </div>
      </div>

      {/* Contact & Social Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-20">
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <a
              href="mailto:adamtlili@gmail.com"
              className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group"
            >
              <div className="flex items-center gap-4">
                <div className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40">
                  <Mail className="w-5 h-5" />{" "}
                </div>

                <span className="text-lg">adamtlili@gmail.com</span>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform" />
            </a>

            <a
              href="tel:+261"
              className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group"
            >
              <div className="flex items-center gap-4">
                <div className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40">
                  {" "}
                  <Phone className="w-5 h-5" />
                </div>

                <span className="text-lg">+216 29 830 867</span>
              </div>
              <ArrowUpRight className="w-5 h-5 transition-transform" />
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

          {/* Social Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 border border-gray-700 rounded-lg hover:border-white transition group overflow-hidden"
              >
                <div className="flex  items-center gap-4">
                  <div className="border border-zinc-700 p-2 rounded-lg bg-zinc-900/40">
                    {" "}
                    {link.icon}
                  </div>

                  <span className="text-lg">{link.name}</span>
                </div>
                <motion.div
                  className="w-5 h-5"
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </motion.div>
              </a>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
              <div className="text-sm text-gray-500">
                © 2025 Bludem Production - All rights reserved
              </div>
              <div className="flex gap-8 text-sm">
                <a
                  target="_blank"
                  href="https://portfoliomt-kohl.vercel.app/"
                  className="text-gray-500  transition"
                >
                  Powered by <span className="underline text-white">MT</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
