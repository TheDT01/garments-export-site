"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 900); // shorter
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center 
                       bg-gradient-to-br from-blue-900 via-blue-950 to-black"
          >
            {/* Brand text */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.05, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-3xl md:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg text-center px-4"
            >
              Sapphire Design LTD
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page content */}
      <motion.div
        key={`${pathname}-content`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
