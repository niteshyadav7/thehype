// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Quote, Sparkles } from "lucide-react";
// import Image from "next/image";

// const testimonials = [
//   {
//     name: "Nivedita Saily",
//     role: "Brand Manager at Marico Ltd.",
//     content:
//       "The team at The Hype has been very proactive and efficient. Their quick turnaround and data tracking are commendable. Kudos to The Hype team!",
//     image:
//       "https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg",
//   },
//   {
//     name: "Aarti Lotlikar",
//     role: "AGM - Marketing at Wonderchef",
//     content:
//       "It’s been a pleasure working with The Hype. Their end-to-end execution and precise reporting make them a reliable partner. Thanks for the great work!",
//     image:
//       "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     name: "Rahul Krishnan",
//     role: "Performance Marketing at Nivea",
//     content:
//       "The Hype team has been very supportive in building brand engagement. They understand briefs well and deliver practical, result-driven campaigns.",
//     image:
//       "https://www.shutterstock.com/image-photo/studio-close-portrait-handsome-young-260nw-2134031979.jpg",
//   },
//   {
//     name: "Rupal Jindal",
//     role: "Associate Director at Faces Canada",
//     content:
//       "Working with The Hype has been seamless. Their creativity, agility, and influencer strategies have helped us execute campaigns with excellence.",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BrCe-APUQkbJt_VrNq1BL5Z7vql6xE-Sw&s",
//   },
// ];

// export default function Testimonials() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   return (
//     <section
//       id="testimonials"
//       className="relative py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
//     >
//       <div
//         ref={ref}
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
//       >
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30, scale: 0.98 }}
//           animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mb-20"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Sparkles className="text-yellow-400 w-6 h-6" />
//             <span className="uppercase tracking-widest text-yellow-500 font-semibold text-sm">
//               Client Love
//             </span>
//             <Sparkles className="text-yellow-400 w-6 h-6" />
//           </div>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
//             What Our Clients Say
//           </h2>

//           {/* Underline Accent */}
//           <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 rounded-full" />

//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Trusted by leading brands who’ve experienced measurable impact and
//             success through our influencer and content marketing campaigns.
//           </p>
//         </motion.div>

//         {/* Testimonials Grid - 4 columns */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{
//                 duration: 0.7,
//                 delay: i * 0.15,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.03,
//                 y: -5,
//                 transition: { duration: 0.25, ease: "easeOut" },
//               }}
//               style={{ willChange: "transform, box-shadow" }}
//               className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100
//                 hover:border-yellow-400 transition-transform duration-300 flex flex-col items-center text-center"
//             >
//               {/* Avatar */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className="relative w-24 h-24 rounded-full overflow-hidden
//                   ring-4 ring-yellow-100 hover:ring-yellow-400 transition-all duration-300"
//                 style={{ willChange: "transform" }}
//               >
//                 <Image
//                   src={t.image}
//                   alt={t.name}
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 768px) 100vw, 25vw"
//                   priority={i === 0}
//                 />
//               </motion.div>

//               {/* Name + Role */}
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {t.name}
//                 </h3>
//                 <p className="text-sm text-yellow-600 font-medium">{t.role}</p>
//               </div>

//               {/* Quote & Content */}
//               <Quote className="text-yellow-400 w-6 h-6 mt-3 opacity-80" />
//               <p className="text-gray-700 leading-relaxed italic mt-3 text-sm">
//                 “{t.content}”
//               </p>
//               <Quote className="text-yellow-400 w-6 h-6 mt-3 rotate-180 opacity-80" />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Background Glow */}
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%]
//         bg-yellow-100 opacity-20 blur-3xl rounded-full -z-10"
//       />
//     </section>
//   );
// }

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Nivedita Saily",
    role: "Brand Manager at Marico Ltd.",
    content:
      "The team at The Hype has been very proactive and efficient. Their quick turnaround and data tracking are commendable. Kudos to The Hype team!",
    image:
      "https://www.shutterstock.com/image-photo/studio-close-portrait-happy-smiling-260nw-2153541715.jpg",
  },
  {
    name: "Aarti Lotlikar",
    role: "AGM - Marketing at Wonderchef",
    content:
      "It’s been a pleasure working with The Hype. Their end-to-end execution and precise reporting make them a reliable partner. Thanks for the great work!",
    image:
      "https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Rahul Krishnan",
    role: "Performance Marketing at Nivea",
    content:
      "The Hype team has been very supportive in building brand engagement. They understand briefs well and deliver practical, result-driven campaigns.",
    image:
      "https://www.shutterstock.com/image-photo/studio-close-portrait-handsome-young-260nw-2134031979.jpg",
  },
  {
    name: "Rupal Jindal",
    role: "Associate Director at Faces Canada",
    content:
      "Working with The Hype has been seamless. Their creativity, agility, and influencer strategies have helped us execute campaigns with excellence.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1BrCe-APUQkbJt_VrNq1BL5Z7vql6xE-Sw&s",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden 
      bg-gradient-to-b from-[#FFFDF9] via-[#FFF7EE] to-[#FFEAEA]"
    >
      {/* Soft gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-gradient-to-r from-[#F9A826]/30 to-[#F95738]/25 blur-3xl rounded-full -z-10" />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-[#F9A826] w-6 h-6" />
            <span className="uppercase tracking-widest text-[#F95738] font-semibold text-sm">
              Client Love
            </span>
            <Sparkles className="text-[#F9A826] w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E1E1E] mb-6 tracking-tight leading-tight">
            What Our Clients Say
          </h2>

          <div className="mx-auto mb-6 h-1 w-24 bg-gradient-to-r from-[#F9A826] to-[#F95738] rounded-full" />

          <p className="text-lg md:text-xl text-[#444] max-w-3xl mx-auto leading-relaxed">
            Trusted by leading brands who’ve experienced measurable impact and
            success through our influencer and content marketing campaigns.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { type: "spring", stiffness: 120, damping: 12 },
              }}
              className="bg-white rounded-xl p-8 border border-[#FBE2C0] shadow-sm 
                hover:border-[#F9A826]  flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 150, damping: 12 }}
                className="relative w-24 h-24 rounded-full overflow-hidden 
                  ring-4 ring-[#FFF3E0] hover:ring-[#F9A826]/50 transition-all duration-300"
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  priority={i === 0}
                />
              </motion.div>

              {/* Name + Role */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#1E1E1E]">
                  {t.name}
                </h3>
                <p className="text-sm text-[#F95738] font-medium">{t.role}</p>
              </div>

              {/* Quote & Content */}
              <Quote className="text-[#F9A826] w-6 h-6 mt-3 opacity-80" />
              <p className="text-[#555] leading-relaxed italic mt-3 text-sm">
                “{t.content}”
              </p>
              <Quote className="text-[#F9A826] w-6 h-6 mt-3 rotate-180 opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
