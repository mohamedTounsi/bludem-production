"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      id: 1,
      title: "SHORT FILMS",
      description: "Capturing the extraordinary, frame by frame.",
      image: "/shortfilms.jpg",
    },
    {
      id: 2,
      title: "WEDDING FILMS",
      description: "Your love story beautifully told.",
      image: "/weddingpic.jpeg",
    },
    {
      id: 3,
      title: "MUSIC VIDEOS",
      description: "Distilling emotions into moments.",
      image: "/musicpic2.jpg",
    },
    {
      id: 4,
      title: "PARTY VIDEOS",
      description: "Unforgettable moments of celebration.",
      image: "/partypic1.jpg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-zinc-900 py-20 px-4 md:px-8 relative">
      <motion.div
        ref={ref}
        className="w-[90%] mx-auto relative"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-[100px] font-serif tracking-wider mb-10 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          SERVICES
        </motion.h1>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <motion.div
                className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center"
                  animate={{
                    opacity: hoveredId === service.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-white text-lg md:text-md font-extralight"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={
                      hoveredId === service.id
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.8, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    [START YOUR PROJECT]
                  </motion.span>
                </motion.div>

                {/* Top-left Label */}
                <motion.div
                  className="absolute top-4 left-4 text-start text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h1>[SERVICE]</h1>
                </motion.div>

                {/* Bottom-left Content */}
                <motion.div
                  className="absolute bottom-4 left-4 text-start text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="text-xl md:text-2xl font-extralight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base max-w-[200px]">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
