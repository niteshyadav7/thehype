"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Detect system dark mode
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Smooth scroll function for all sections
  const smoothScrollTo = (section: string) => {
    if (section === "hero" || section === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(section);
      if (element) {
        const offset =
          element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }
  };

  // ✅ Unified scroll handler
  const handleNavClick = (section: string) => {
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      router.push(`/?scrollTo=${section}`);
      return;
    }
    smoothScrollTo(section);
  };

  // ✅ Scroll after coming from another route
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollTo = params.get("scrollTo");
    if (scrollTo) {
      setTimeout(() => {
        smoothScrollTo(scrollTo);
      }, 500);
    }
  }, [pathname]);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Work", to: "work" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-500 ease-in-out ${
        isDark
          ? scrolled
            ? "bg-black/70 border-white/10 shadow-lg"
            : "bg-transparent border-transparent"
          : scrolled
          ? "bg-white/70 border-black/10 shadow-lg"
          : "bg-transparent border-transparent"
      }`}
      style={{ willChange: "transform, background-color" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* ✅ Logo */}
          {/* ✅ Logo */}
          <motion.div
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("hero")}
            className="cursor-pointer select-none flex flex-col items-center justify-center transition-transform hover:scale-[1.04]"
          >
            {/* Image (handwritten “hype”) */}
            <img
              src="https://static.wixstatic.com/media/afc6e0_912c153020104eedb7a293da44447843~mv2.png"
              alt="The Hype Logo"
              className="h-12 md:h-16 object-contain mb-0"
              draggable={false}
            />

            {/* Text below the image */}
            {/* <span
              className={`text-xl md:text-xl font-bold tracking-tight leading-none ${
                isDark ? "text-white" : "text-black"
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "0px",
              }}
            >
              THE HYPE
            </span> */}
          </motion.div>

          {/* ✅ Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.to}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleNavClick(link.to)}
                className={`relative text-[15px] font-medium transition-colors duration-300 ${
                  isDark
                    ? "text-gray-200 hover:text-[#F9A826]"
                    : "text-gray-800 hover:text-[#F9A826]"
                }`}
              >
                {link.name}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-[#F9A826] to-[#F95738] transition-all duration-300 hover:w-full"
                />
              </motion.button>
            ))}
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#F9A826] to-[#F95738] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>

          {/* ✅ Mobile Toggle */}
          <button
            className={`md:hidden transition-colors ${
              isDark
                ? "text-gray-200 hover:text-[#F9A826]"
                : "text-gray-800 hover:text-[#F9A826]"
            }`}
            onClick={() => setMobileMenuOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </motion.div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 w-72 z-40 md:hidden bg-white shadow-2xl border-l border-gray-200 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-[#f0b568] text-white">
              <span className="font-semibold text-lg">Menu</span>
              <X
                className="w-6 h-6 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>

            {/* Menu Items */}
            <div className="flex flex-col divide-y divide-gray-200 bg-white">
              {navLinks.map((link) => (
                <motion.button
                  key={link.to}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNavClick(link.to)}
                  className="flex items-center justify-between px-5 py-4 text-gray-800 hover:bg-gray-100 text-base"
                >
                  <div className="flex items-center space-x-3">
                    <Menu className="w-5 h-5 text-[#0066A6]" />
                    <span>{link.name}</span>
                  </div>
                  <span className="text-gray-400">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
