"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    setShowContent(false);

    // Lock timing so animation always completes
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      setShowContent(true);
    }, 200); // ~1.2s duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }} // smoother + slower
            className="fixed inset-0 z-50 flex items-center justify-center 
                       bg-gradient-to-br from-blue-950 via-blue-900 to-black"
          >
            {/* Frosted glass overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />

            {/* Brand text */}
            <motion.div
              initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
              className="relative text-5xl md:text-6xl font-bold tracking-wide 
                         text-white drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            >
              Sapphire Design LTD
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content appears gracefully after */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-0"
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
