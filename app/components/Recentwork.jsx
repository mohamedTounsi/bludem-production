"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function RecentWork() {
  const [activeProject, setActiveProject] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      name: "PEAKY CODERS",
      smallDesc: "By order of the IEEE ISIMS SB...",
      longDesc:
        "The streets of code are calling, and only the sharpest minds will rise.In this night of logic and strategy, alliances will form, and brilliance will reign.",
      coverImage: "peakycodersimg.png",
      videoSrc: "https://www.instagram.com/p/DQNdQo-kb21/",
    },
    {
      id: 2,
      name: "IEEE Day",
      smallDesc: "IEEE Day is near!",
      longDesc:
        "From the sands of creativity rises a celebration of brilliance.A day where ideas awaken, minds unite, and the spirit of innovation shines brighter than ever.",
      coverImage: "ieedayimg.png",
      videoSrc: "https://www.instagram.com/p/DPwxvevEeNZ/",
    },
  ];

  const current = projects[activeProject];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen bg-zinc-900 text-white p-8 md:p-16"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.h1
        className="text-4xl md:text-[100px] font-serif tracking-wider mb-10 md:mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        RECENT WORK
      </motion.h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Text */}
        <motion.div
          className="lg:col-span-1 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-sm tracking-widest text-gray-400 mb-3">
              PROJECT
            </h2>
            <motion.h3
              className="text-2xl md:text-5xl font-serif mb-3 md:mb-0 tracking-wide"
              key={current.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {current.name}
            </motion.h3>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.p
              className="text-md text-gray-300 mb-3 md:mb-0 leading-relaxed"
              key={current.smallDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {current.smallDesc}
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="border-t border-gray-700 pt-8"
          >
            <h4 className="text-sm tracking-widest text-gray-400 mb-4">
              DESCRIPTION
            </h4>
            <motion.p
              className="text-base text-gray-400 leading-relaxed"
              key={current.longDesc}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {current.longDesc}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Right Column - Image and Navigation */}
        <motion.div
          className="lg:col-span-2 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Project Navigation */}
          <motion.div className="space-y-4">
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left py-4 px-6 border transition-all duration-300 ${
                  activeProject === index
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-gray-600 hover:border-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex cursor-pointer items-center justify-between">
                  <span className="font-serif text-lg tracking-wide">
                    {project.name}
                  </span>
                  <motion.span
                    className="text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Cover Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="relative group overflow-hidden rounded-lg aspect-video bg-gray-900"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <a
                href={current.videoSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-full"
              >
                <motion.img
                  src={current.coverImage}
                  alt={current.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                {/* Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Play className="w-16 h-16 fill-white" />
                  </motion.div>
                </motion.div>
              </a>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
