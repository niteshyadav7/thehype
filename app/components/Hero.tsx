// "use client";

// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { Sparkles, Users } from "lucide-react";
// import { useEffect, useState, useRef } from "react";

// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") setIsMobile(window.innerWidth < 768);
//   }, []);

//   const handleSmoothScroll = (targetId: string) => {
//     const target = document.getElementById(targetId);
//     if (!target) return;
//     const yOffset = -60;
//     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   // === Magnetic Button Hook (smoother physics) ===
//   const useMagnetic = () => {
//     const ref = useRef<HTMLButtonElement | null>(null);
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);
//     const rotateX = useTransform(y, [-25, 25], [6, -6]);
//     const rotateY = useTransform(x, [-25, 25], [-6, 6]);

//     useEffect(() => {
//       const el = ref.current;
//       if (!el) return;

//       const handleMove = (e: MouseEvent) => {
//         const rect = el.getBoundingClientRect();
//         const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.3;
//         const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.3;
//         animate(x, offsetX, { type: "spring", stiffness: 120, damping: 20 });
//         animate(y, offsetY, { type: "spring", stiffness: 120, damping: 20 });
//       };

//       const handleLeave = () => {
//         animate(x, 0, { type: "spring", stiffness: 100, damping: 18 });
//         animate(y, 0, { type: "spring", stiffness: 100, damping: 18 });
//       };

//       el.addEventListener("mousemove", handleMove);
//       el.addEventListener("mouseleave", handleLeave);
//       return () => {
//         el.removeEventListener("mousemove", handleMove);
//         el.removeEventListener("mouseleave", handleLeave);
//       };
//     }, []);

//     return { ref, x, y, rotateX, rotateY };
//   };

//   const brandMagnet = useMagnetic();
//   const influencerMagnet = useMagnetic();

//   return (
//     <header className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
//       {/* === Background Glow === */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-40 -left-20 w-[700px] h-[700px] bg-[#FFD54F]/25 rounded-full blur-[140px]"
//           animate={isMobile ? {} : { y: [0, 40, 0], x: [0, 30, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#FF6B6B]/20 rounded-full blur-[180px]"
//           animate={isMobile ? {} : { y: [0, -40, 0], x: [0, -25, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
//       </div>

//       {/* === Content === */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-600 mb-6"
//         >
//           CRAFTING BRANDS THAT INSPIRE
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-[#111]"
//           style={{
//             fontFamily: "Poppins, sans-serif",
//             letterSpacing: "-0.02em",
//             lineHeight: "1.1",
//           }}
//         >
//           We Build <span className="text-[#FFC107]">Timeless Brands</span>
//           <br className="hidden sm:block" /> That People Remember
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg sm:text-xl text-gray-600 mt-6 mb-10 max-w-2xl mx-auto"
//         >
//           We combine strategy, storytelling, and design to craft meaningful
//           brand identities that stand out in the digital era.
//         </motion.p>

//         {/* === Magnetic Buttons === */}
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           <motion.button
//             ref={brandMagnet.ref}
//             style={{
//               x: brandMagnet.x,
//               y: brandMagnet.y,
//               rotateX: brandMagnet.rotateX,
//               rotateY: brandMagnet.rotateY,
//               willChange: "transform",
//             }}
//             onClick={() => handleSmoothScroll("contact")}
//             className="bg-[#111] text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-md hover:bg-[#222] transition-all duration-300 perspective-1000"
//           >
//             <Sparkles className="w-5 h-5" />
//             For Brands
//           </motion.button>

//           <motion.button
//             ref={influencerMagnet.ref}
//             style={{
//               x: influencerMagnet.x,
//               y: influencerMagnet.y,
//               rotateX: influencerMagnet.rotateX,
//               rotateY: influencerMagnet.rotateY,
//               willChange: "transform",
//             }}
//             onClick={() => handleSmoothScroll("contact")}
//             className="bg-[#FFC107] text-[#111] font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-md hover:bg-[#FFD54F] transition-all duration-300 perspective-1000"
//           >
//             <Users className="w-5 h-5" />
//             For Influencers
//           </motion.button>
//         </motion.div>

//       </div>
//     </header>
//   );
// }

// "use client";

// import { motion, useMotionValue, useTransform, animate } from "framer-motion";
// import { Sparkles, Users } from "lucide-react";
// import { useEffect, useState, useRef } from "react";

// export default function Hero() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") setIsMobile(window.innerWidth < 768);
//   }, []);

//   const handleSmoothScroll = (targetId: string) => {
//     const target = document.getElementById(targetId);
//     if (!target) return;
//     const yOffset = -60;
//     const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
//     window.scrollTo({ top: y, behavior: "smooth" });
//   };

//   // === Magnetic Button Hook ===
//   const useMagnetic = () => {
//     const ref = useRef<HTMLButtonElement | null>(null);
//     const x = useMotionValue(0);
//     const y = useMotionValue(0);
//     const rotateX = useTransform(y, [-25, 25], [6, -6]);
//     const rotateY = useTransform(x, [-25, 25], [-6, 6]);

//     useEffect(() => {
//       const el = ref.current;
//       if (!el) return;

//       const handleMove = (e: MouseEvent) => {
//         const rect = el.getBoundingClientRect();
//         const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.3;
//         const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.3;
//         animate(x, offsetX, { type: "spring", stiffness: 120, damping: 20 });
//         animate(y, offsetY, { type: "spring", stiffness: 120, damping: 20 });
//       };

//       const handleLeave = () => {
//         animate(x, 0, { type: "spring", stiffness: 100, damping: 18 });
//         animate(y, 0, { type: "spring", stiffness: 100, damping: 18 });
//       };

//       el.addEventListener("mousemove", handleMove);
//       el.addEventListener("mouseleave", handleLeave);
//       return () => {
//         el.removeEventListener("mousemove", handleMove);
//         el.removeEventListener("mouseleave", handleLeave);
//       };
//     }, []);

//     return { ref, x, y, rotateX, rotateY };
//   };

//   const brandMagnet = useMagnetic();
//   const influencerMagnet = useMagnetic();

//   return (
//     <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF6F2]">
//       {/* === Ambient Glow Background === */}
//       <div className="absolute inset-0 pointer-events-none">
//         <motion.div
//           className="absolute -top-48 -left-32 w-[700px] h-[700px] bg-[#F9A826]/25 rounded-full blur-[140px]"
//           animate={isMobile ? {} : { y: [0, 40, 0], x: [0, 30, 0] }}
//           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F95738]/20 rounded-full blur-[180px]"
//           animate={isMobile ? {} : { y: [0, -40, 0], x: [0, -25, 0] }}
//           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
//       </div>

//       {/* === Main Content === */}
//       <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-500 mb-6"
//         >
//           CRAFTING BRANDS THAT INSPIRE
//         </motion.p>

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-[#111]"
//           style={{
//             fontFamily: "Poppins, sans-serif",
//             letterSpacing: "-0.02em",
//             lineHeight: "1.1",
//           }}
//         >
//           We Build{" "}
//           <span className="bg-gradient-to-r from-[#F9A826] to-[#F95738] bg-clip-text text-transparent">
//             Timeless Brands
//           </span>
//           <br className="hidden sm:block" /> That People Remember
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg sm:text-xl text-gray-600 mt-6 mb-10 max-w-2xl mx-auto"
//         >
//           We combine strategy, storytelling, and design to craft meaningful brand
//           identities that stand out in the digital era.
//         </motion.p>

//         {/* === Magnetic Buttons === */}
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7, delay: 0.3 }}
//         >
//           <motion.button
//             ref={brandMagnet.ref}
//             style={{
//               x: brandMagnet.x,
//               y: brandMagnet.y,
//               rotateX: brandMagnet.rotateX,
//               rotateY: brandMagnet.rotateY,
//               willChange: "transform",
//             }}
//             onClick={() => handleSmoothScroll("contact")}
//             className="bg-gradient-to-r from-[#F9A826] to-[#F95738] text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 perspective-1000"
//           >
//             <Sparkles className="w-5 h-5" />
//             For Brands
//           </motion.button>

//           <motion.button
//             ref={influencerMagnet.ref}
//             style={{
//               x: influencerMagnet.x,
//               y: influencerMagnet.y,
//               rotateX: influencerMagnet.rotateX,
//               rotateY: influencerMagnet.rotateY,
//               willChange: "transform",
//             }}
//             onClick={() => handleSmoothScroll("contact")}
//             className="bg-white border border-[#F9A826]/30 text-[#111] font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-md hover:border-[#F95738]/50 hover:shadow-lg transition-all duration-300 perspective-1000"
//           >
//             <Users className="w-5 h-5 text-[#F95738]" />
//             For Influencers
//           </motion.button>
//         </motion.div>
//       </div>
//     </header>
//   );
// }

"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size only once
  useEffect(() => {
    if (typeof window !== "undefined") setIsMobile(window.innerWidth < 768);
  }, []);

  // ✅ Smooth Scroll
  const handleSmoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const yOffset = -60;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // === Magnetic Button Hook (Butter Optimized) ===
  const useMagnetic = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-25, 25], [6, -6]);
    const rotateY = useTransform(x, [-25, 25], [-6, 6]);

    useEffect(() => {
      const el = ref.current;
      if (!el) return;

      let frame: number;

      const handleMove = (e: MouseEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = el.getBoundingClientRect();
          const offsetX = (e.clientX - rect.left - rect.width / 2) * 0.3;
          const offsetY = (e.clientY - rect.top - rect.height / 2) * 0.3;

          animate(x, offsetX, {
            type: "spring",
            stiffness: 140,
            damping: 20,
            mass: 0.4,
          });
          animate(y, offsetY, {
            type: "spring",
            stiffness: 140,
            damping: 20,
            mass: 0.4,
          });
        });
      };

      const handleLeave = () => {
        cancelAnimationFrame(frame);
        animate(x, 0, { type: "spring", stiffness: 100, damping: 18 });
        animate(y, 0, { type: "spring", stiffness: 100, damping: 18 });
      };

      el.addEventListener("mousemove", handleMove, { passive: true });
      el.addEventListener("mouseleave", handleLeave);
      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
        cancelAnimationFrame(frame);
      };
    }, []);

    return { ref, x, y, rotateX, rotateY };
  };

  const brandMagnet = useMagnetic();
  const influencerMagnet = useMagnetic();

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF6F2] will-change-transform">
      {/* === Ambient Glow Background === */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        <motion.div
          className="absolute -top-48 -left-32 w-[700px] h-[700px] bg-[#F9A826]/25 rounded-full blur-[140px]"
          animate={isMobile ? {} : { y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#F95738]/20 rounded-full blur-[180px]"
          animate={isMobile ? {} : { y: [0, -40, 0], x: [0, -25, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
      </div>

      {/* === Main Content === */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto will-change-transform">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="uppercase tracking-[0.35em] text-sm sm:text-base text-gray-500 mb-6"
        >
          CRAFTING BRANDS THAT INSPIRE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-black text-5xl sm:text-6xl md:text-7xl leading-tight text-[#111]"
          style={{
            fontFamily: "Poppins, sans-serif",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            willChange: "transform",
          }}
        >
          We Build{" "}
          <span className="bg-gradient-to-r from-[#F9A826] to-[#F95738] bg-clip-text text-transparent">
            Timeless Brands
          </span>
          <br className="hidden sm:block" /> That People Remember
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="text-lg sm:text-xl text-gray-600 mt-6 mb-10 max-w-2xl mx-auto will-change-transform"
        >
          We combine strategy, storytelling, and design to craft meaningful
          brand identities that stand out in the digital era.
        </motion.p>

        {/* === Magnetic Buttons === */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          <motion.button
            ref={brandMagnet.ref}
            style={{
              x: brandMagnet.x,
              y: brandMagnet.y,
              rotateX: brandMagnet.rotateX,
              rotateY: brandMagnet.rotateY,
              willChange: "transform",
            }}
            onClick={() => handleSmoothScroll("contact")}
            className="bg-gradient-to-r from-[#F9A826] to-[#F95738] text-white font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl hover:opacity-95 transition-all duration-300 perspective-1000"
          >
            <Sparkles className="w-5 h-5" />
            For Brands
          </motion.button>

          <motion.button
            ref={influencerMagnet.ref}
            style={{
              x: influencerMagnet.x,
              y: influencerMagnet.y,
              rotateX: influencerMagnet.rotateX,
              rotateY: influencerMagnet.rotateY,
              willChange: "transform",
            }}
            onClick={() => handleSmoothScroll("contact")}
            className="bg-white border border-[#F9A826]/30 text-[#111] font-semibold py-4 px-8 rounded-full flex items-center gap-2 shadow-md hover:border-[#F95738]/50 hover:shadow-lg transition-all duration-300 perspective-1000"
          >
            <Users className="w-5 h-5 text-[#F95738]" />
            For Influencers
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
}
