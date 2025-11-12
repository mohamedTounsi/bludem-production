"use client";
import React, { useState } from "react";
import { Play } from "lucide-react";

export default function RecentWork() {
  const [activeProject, setActiveProject] = useState(0);

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

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-8 md:p-16">
      {/* Header */}
      <h1 className="text-4xl md:text-[100px] font-serif tracking-wider mb-10 md:mb-20">
        RECENT WORK
      </h1>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Text */}
        <div className="lg:col-span-1 md:space-y-8">
          <div>
            <h2 className="text-sm tracking-widest text-gray-400 mb-3">
              PROJECT
            </h2>
            <h3 className="text-2xl md:text-5xl font-serif mb-3 md:mb-0 tracking-wide">
              {current.name}
            </h3>
          </div>

          <div>
            <p className="text-md text-gray-300 mb-3 md:mb-0 leading-relaxed">
              {current.smallDesc}
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <h4 className="text-sm tracking-widest text-gray-400 mb-4">
              DESCRIPTION
            </h4>
            <p className="text-base text-gray-400 leading-relaxed">
              {current.longDesc}
            </p>
          </div>
        </div>

        {/* Right Column - Image and Navigation */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Navigation */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={`w-full text-left py-4 px-6 cup border transition-all duration-300 ${
                  activeProject === index
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white border-gray-600 hover:border-white"
                }`}
              >
                <div className="flex cursor-pointer items-center justify-between">
                  <span className="font-serif text-lg tracking-wide">
                    {project.name}
                  </span>
                  <span className="text-sm text-gray-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Cover Image */}
          <div className="relative group overflow-hidden rounded-lg aspect-video bg-gray-900">
            <a
              href={current.videoSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative w-full h-full"
            >
              <img
                src={current.coverImage}
                alt={current.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100">
                <Play className="w-16 h-16 fill-white" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
