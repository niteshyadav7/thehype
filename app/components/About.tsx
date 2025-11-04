
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // GPU-accelerated parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<
    { x: number; y: number; size: number; delay: number; duration: number }[]
  >([]);

  // ✅ Only generate particles on client, after mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const count = window.innerWidth < 768 ? 12 : 28;
    const generated = Array.from({ length: count }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2.5,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 6,
    }));

    setParticles(generated);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const values = [
    "Authentic Creators – We connect you with real influencers who align with your brand",
    "Growth-Focused – Every campaign is designed to drive measurable business results",
    "Measurable Results – Data-driven strategies that prove ROI and impact",
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-[#FFFDF9] via-[#FFF8F3] to-[#FFEAE5] will-change-transform"
    >
      {/* Smooth Ambient Glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#F9A826]/25 via-[#F95738]/15 to-[#F9A826]/20 blur-3xl opacity-70 will-change-transform"
        style={{ y: y1 }}
        transition={{ ease: "easeOut", duration: 1 }}
      />

      {/* Floating Particles */}
      {particles.length > 0 && (
        <motion.div
          className="absolute inset-0 overflow-hidden transform-gpu"
          style={{ y: y2 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#F9A826] will-change-transform"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                top: `${p.y}%`,
                filter: "blur(3px)",
                boxShadow: `0 0 ${p.size * 2.5}px #F9A826`,
                opacity: 0.35,
              }}
              animate={
                isMobile
                  ? {
                      y: [0, -5, 0],
                      opacity: [0.3, 0.5, 0.3],
                    }
                  : {
                      y: [0, -20, 0],
                      x: [0, 10, -10, 0],
                      opacity: [0.25, 0.6, 0.25],
                      scale: [1, 1.08, 1],
                    }
              }
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      )}

      {/* === Content === */}
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 text-center z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1E1E1E] mb-4 tracking-tight font-poppins">
            Who We Are
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F9A826] to-[#F95738] mx-auto rounded-full shadow-sm" />
        </motion.div>

        {/* Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mx-auto text-[#444] space-y-6 leading-relaxed text-lg"
        >
          <p>
            We’re not just another marketing agency —{" "}
            <span className="font-semibold text-[#F95738]">
              we’re your growth partner
            </span>
            . At <span className="font-semibold text-[#F9A826]">The Hype</span>,
            we craft authentic stories that connect audiences and build lasting
            impact.
          </p>

          <p>
            Our team merges creativity and analytics to deliver campaigns that
            not only go viral but inspire genuine engagement. From startups to
            established brands, we help you navigate the evolving world of
            influencer marketing with confidence and clarity.
          </p>

          <p>
            Whether your goal is awareness, trust, or measurable conversions,
            our strategic approach ensures your brand shines — authentically and
            effectively.
          </p>
        </motion.div>

        {/* Key Values */}
        <div className="space-y-5 pt-12 text-left sm:text-center max-w-2xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="flex items-start sm:justify-center space-x-3"
            >
              <CheckCircle2 className="w-6 h-6 text-[#F9A826] flex-shrink-0 mt-0.5" />
              <span className="text-[#1E1E1E] font-medium leading-snug">
                {value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
