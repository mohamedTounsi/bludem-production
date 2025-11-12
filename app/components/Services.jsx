"use client";

import { useState } from "react";
import Link from "next/link";

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);

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

  return (
    <section className="w-full bg-zinc-900 py-20 px-4 md:px-8 relative">
      <div className="w-[90%] mx-auto relative">
        {/* Header */}
        <h1 className="text-4xl md:text-[100px] font-serif tracking-wider mb-10 md:mb-20">
          SERVICES
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link href={`/services/${service.id}`} key={service.id}>
              <div
                className="relative w-full aspect-square overflow-hidden rounded-lg cursor-pointer group"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300" />

                {/* Hover Overlay */}
                <div
                  className={`absolute inset-0 bg-zinc-900/50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === service.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="text-white text-lg md:text-md font-extralight">
                    [START YOUR PROJECT]
                  </span>
                </div>

                {/* Bottom-right Content */}
                <div className="absolute top-4 left-4 text-start text-white">
                  <h1>[SERVICE]</h1>
                </div>
                <div className="absolute bottom-4 left-4 text-start text-white">
                  <h3 className="text-xl md:text-2xl font-extralight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base max-w-[200px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
