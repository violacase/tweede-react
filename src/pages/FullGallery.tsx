import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { photos } from "@/data/photos";
import { useEffect, useRef, useState } from "react";

export function FullGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setCurrentSection(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    container.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToNext = () => {
    if (currentSection < photos.length - 1) {
      const nextSection = document.querySelector(
        `[data-index="${currentSection + 1}"]`
      );
      nextSection?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto snap-y snap-mandatory"
      style={{ scrollbarWidth: "none" }}
    >
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {photos.map((photo, index) => (
        <div
          key={photo.id}
          data-index={index}
          className="section h-screen w-full snap-start relative"
        >
          <img
            src={photo.fullSize}
            alt={photo.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white p-4"
          >
            <h2 className="text-4xl font-bold mb-4">{photo.title}</h2>
            <p className="text-xl mb-2">{photo.location}</p>
            <p className="text-lg mb-4">By {photo.photographer}</p>
            <p className="max-w-2xl text-center text-gray-200">
              {photo.description}
            </p>
          </motion.div>
          {index < photos.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1, repeat: Infinity }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
              onClick={scrollToNext}
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}