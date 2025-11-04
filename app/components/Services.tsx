// "use client";

// import { motion } from "framer-motion";
// import { TrendingUp, Star, Video } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     icon: TrendingUp,
//     title: "Influencer Marketing",
//     description:
//       "Partner with top creators to expand your brand visibility and reach authentic audiences.",
//     link: "/services/influencer-marketing",
//   },
//   {
//     icon: Star,
//     title: "Customer Review Management",
//     description:
//       "Leverage genuine feedback to strengthen trust and boost conversions with smart social proof.",
//     link: "/services/review-management",
//   },
//   {
//     icon: Video,
//     title: "Video Marketing Campaigns",
//     description:
//       "Captivating storytelling through video — engage, inspire, and convert your viewers.",
//     link: "/services/video-marketing",
//   },
// ];

// export default function Services() {
//   return (
//     <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.4 }}
//           className="mb-16"
//         >
//           <p className="text-yellow-500 font-semibold uppercase mb-2 tracking-wide">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
//             Empowering Brands with Smart Strategies
//           </h2>
//           <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;
//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{
//                   y: -6,
//                   scale: 1.02,
//                   boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
//                   transition: { type: "spring", stiffness: 200 },
//                 }}
//                 className={`rounded-2xl border border-gray-200 p-8 text-center transition-all duration-300 ${
//                   isEven
//                     ? "bg-gradient-to-br from-yellow-50 to-white hover:from-yellow-100"
//                     : "bg-gradient-to-br from-red-50 to-white hover:from-red-100"
//                 }`}
//               >
//                 <div
//                   className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl shadow-sm ${
//                     isEven ? "bg-yellow-100" : "bg-red-100"
//                   }`}
//                 >
//                   <service.icon
//                     className={`w-7 h-7 ${
//                       isEven ? "text-yellow-500" : "text-red-500"
//                     }`}
//                   />
//                 </div>

//                 <h3 className="text-lg font-semibold text-gray-800 mb-3">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 <Link
//                   href={service.link}
//                   prefetch={false}
//                   scroll={true}
//                   className={`font-medium hover:underline ${
//                     isEven ? "text-yellow-600" : "text-red-500"
//                   }`}
//                 >
//                   Learn More →
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// // }
// "use client";

// import { motion } from "framer-motion";
// import { TrendingUp, Star, Video } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     icon: TrendingUp,
//     title: "Influencer Marketing",
//     description:
//       "Partner with top creators to expand your brand visibility and reach authentic audiences.",
//     link: "/services/influencer-marketing",
//   },
//   {
//     icon: Star,
//     title: "Customer Review Management",
//     description:
//       "Leverage genuine feedback to strengthen trust and boost conversions with smart social proof.",
//     link: "/services/review-management",
//   },
//   {
//     icon: Video,
//     title: "Video Marketing Campaigns",
//     description:
//       "Captivating storytelling through video — engage, inspire, and convert your viewers.",
//     link: "/services/video-marketing",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF6F2]"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="mb-16"
//         >
//           <p className="bg-gradient-to-r from-[#F9A826] to-[#F95738] bg-clip-text text-transparent font-semibold uppercase mb-2 tracking-wide">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-3">
//             Empowering Brands with Smart Strategies
//           </h2>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-[#F9A826] to-[#F95738] mx-auto rounded-full" />
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 25 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 whileHover={{
//                   y: -4,
//                   scale: 1.01,
//                   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//                   transition: { type: "spring", stiffness: 200 },
//                 }}
//                 className={`rounded-2xl border p-8 text-center transition-all duration-300 shadow-sm hover:shadow-md
//                   ${
//                     isEven
//                       ? "border-[#F9A826]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF8F1] to-[#FFF1E8]"
//                       : "border-[#F95738]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF5F2] to-[#FFEFEA]"
//                   }
//                 `}
//               >
//                 {/* Icon */}
//                 <div
//                   className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl shadow-sm ${
//                     isEven
//                       ? "bg-gradient-to-r from-[#F9A826]/15 to-[#F95738]/10"
//                       : "bg-gradient-to-r from-[#F95738]/15 to-[#F9A826]/10"
//                   }`}
//                 >
//                   <service.icon
//                     className={`w-7 h-7 ${
//                       isEven ? "text-[#F9A826]" : "text-[#F95738]"
//                     }`}
//                   />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-[#111] mb-3 tracking-tight">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 {/* Link */}
//                 <Link
//                   href={service.link}
//                   prefetch={false}
//                   scroll={true}
//                   className={`inline-block font-medium transition-colors hover:underline ${
//                     isEven
//                       ? "text-[#F9A826] hover:text-[#F95738]"
//                       : "text-[#F95738] hover:text-[#F9A826]"
//                   }`}
//                 >
//                   Learn More →
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { TrendingUp, Star, Video } from "lucide-react";
// import Link from "next/link";

// const services = [
//   {
//     icon: TrendingUp,
//     title: "Influencer Marketing",
//     description:
//       "Partner with top creators to expand your brand visibility and reach authentic audiences.",
//     link: "/services/influencer-marketing",
//   },
//   {
//     icon: Star,
//     title: "Customer Review Management",
//     description:
//       "Leverage genuine feedback to strengthen trust and boost conversions with smart social proof.",
//     link: "/services/review-management",
//   },
//   {
//     icon: Video,
//     title: "Video Marketing Campaigns",
//     description:
//       "Captivating storytelling through video — engage, inspire, and convert your viewers.",
//     link: "/services/video-marketing",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF6F2] will-change-transform"
//     >
//       <div className="max-w-6xl mx-auto px-6 text-center">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             ease: [0.25, 0.1, 0.25, 1],
//           }}
//           className="mb-16"
//         >
//           <p className="bg-gradient-to-r from-[#F9A826] to-[#F95738] bg-clip-text text-transparent font-semibold uppercase mb-2 tracking-wide">
//             Our Services
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-3">
//             Empowering Brands with Smart Strategies
//           </h2>
//           <div className="w-20 h-[3px] bg-gradient-to-r from-[#F9A826] to-[#F95738] mx-auto rounded-full" />
//         </motion.div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;

//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 40, scale: 0.98 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.15,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 whileHover={{
//                   y: -6,
//                   scale: 1.03,
//                   rotateX: 0.5,
//                   rotateY: 0.5,
//                   transition: {
//                     type: "spring",
//                     stiffness: 120,
//                     damping: 15,
//                   },
//                 }}
//                 className={`rounded-2xl border p-8 text-center  shadow-sm hover:shadow-lg
//                   ${
//                     isEven
//                       ? "border-[#F9A826]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF8F1] to-[#FFF1E8]"
//                       : "border-[#F95738]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF5F2] to-[#FFEFEA]"
//                   } will-change-transform`}
//               >
//                 {/* Icon */}
//                 <motion.div
//                   whileHover={{
//                     rotate: [0, -5, 5, 0],
//                     transition: { duration: 0.6, ease: "easeInOut" },
//                   }}
//                   className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl shadow-sm
//                     ${
//                       isEven
//                         ? "bg-gradient-to-r from-[#F9A826]/15 to-[#F95738]/10"
//                         : "bg-gradient-to-r from-[#F95738]/15 to-[#F9A826]/10"
//                     }`}
//                 >
//                   <service.icon
//                     className={`w-7 h-7 ${
//                       isEven ? "text-[#F9A826]" : "text-[#F95738]"
//                     }`}
//                   />
//                 </motion.div>

//                 {/* Title */}
//                 <h3 className="text-lg font-semibold text-[#111] mb-3 tracking-tight">
//                   {service.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                   {service.description}
//                 </p>

//                 {/* Link */}
//                 <Link
//                   href={service.link}
//                   prefetch={false}
//                   scroll={true}
//                   className={`inline-block font-medium transition-colors hover:underline ${
//                     isEven
//                       ? "text-[#F9A826] hover:text-[#F95738]"
//                       : "text-[#F95738] hover:text-[#F9A826]"
//                   }`}
//                 >
//                   Learn More →
//                 </Link>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { TrendingUp, Star, Video } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ import this

const services = [
  {
    icon: TrendingUp,
    title: "Influencer Marketing",
    description:
      "Partner with top creators to expand your brand visibility and reach authentic audiences.",
    link: "/services/influencer-marketing",
  },
  {
    icon: Star,
    title: "Customer Review Management",
    description:
      "Leverage genuine feedback to strengthen trust and boost conversions with smart social proof.",
    link: "/services/review-management",
  },
  {
    icon: Video,
    title: "Video Marketing Campaigns",
    description:
      "Captivating storytelling through video — engage, inspire, and convert your viewers.",
    link: "/services/video-marketing",
  },
];

export default function Services() {
  const router = useRouter(); // ✅ initialize router here

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FFF6F2]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mb-16"
        >
          <p className="bg-gradient-to-r from-[#F9A826] to-[#F95738] bg-clip-text text-transparent font-semibold uppercase mb-2 tracking-wide">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111] mb-3">
            Empowering Brands with Smart Strategies
          </h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-[#F9A826] to-[#F95738] mx-auto rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                  rotateX: 0.5,
                  rotateY: 0.5,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  },
                }}
                className={`rounded-2xl border p-8 text-center shadow-sm hover:shadow-lg ${
                  isEven
                    ? "border-[#F9A826]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF8F1] to-[#FFF1E8]"
                    : "border-[#F95738]/20 bg-gradient-to-br from-[#FFFFFF] via-[#FFF5F2] to-[#FFEFEA]"
                }`}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className={`w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl shadow-sm ${
                    isEven
                      ? "bg-gradient-to-r from-[#F9A826]/15 to-[#F95738]/10"
                      : "bg-gradient-to-r from-[#F95738]/15 to-[#F9A826]/10"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      isEven ? "text-[#F9A826]" : "text-[#F95738]"
                    }`}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[#111] mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Instant navigation button */}
                <button
                  onMouseEnter={() => router.prefetch(service.link)} // ✅ preloads fast
                  onClick={() => router.push(service.link)} // ✅ instant open
                  className={`inline-block font-medium transition-colors hover:underline ${
                    isEven
                      ? "text-[#F9A826] hover:text-[#F95738]"
                      : "text-[#F95738] hover:text-[#F9A826]"
                  }`}
                >
                  Learn More →
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
