// "use client";

// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";

// interface GalleryItem {
//   id: number;
//   image: string;
//   title: string;
//   color: string;
//   slug: string;
// }

// const WorkGallery: React.FC = () => {
//   const galleryItems: GalleryItem[] = [
//     {
//       id: 1,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_93202b7339124548843d8d680d9aacc5~mv2.jpg",
//       title: "Tuborg",
//       color: "from-green-700/80 via-green-500/60 to-transparent",
//       slug: "sunburn-tuborg",
//     },
//     {
//       id: 2,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_a88ea0c7d4554bfe8cf15ea1159e1f28~mv2.jpg",
//       title: "Oral-B",
//       color: "from-sky-700/80 via-sky-500/60 to-transparent",
//       slug: "oral-b",
//     },
//     {
//       id: 3,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_9b1defe695194026acfd4792b6ed9227~mv2.jpg",
//       title: "Nivea",
//       color: "from-blue-800/80 via-blue-500/60 to-transparent",
//       slug: "nivea",
//     },
//     {
//       id: 4,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_adfafb44d5d242f18e940b9d5ee66efa~mv2.jpg",
//       title: "Puma",
//       color: "from-red-700/80 via-red-500/60 to-transparent",
//       slug: "puma",
//     },
//     {
//       id: 5,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_528241bef95d4b5e825327307923d0e5~mv2.jpg",
//       title: "Nayo Clothing",
//       color: "from-pink-600/80 via-pink-400/60 to-transparent",
//       slug: "nayo-clothing",
//     },
//     {
//       id: 6,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_5c9e05ae4ab840d8a11e07ce793a9d6d~mv2.jpg",
//       title: "Borosil",
//       color: "from-amber-600/80 via-amber-400/60 to-transparent",
//       slug: "borosil",
//     },
//     {
//       id: 7,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_c66dc841f8fd4bba80411e47f30d8637~mv2.jpg/v1/fill/w_488,h_536,fp_0.54_0.44,q_90,enc_avif,quality_auto/afc6e0_c66dc841f8fd4bba80411e47f30d8637~mv2.jpg",
//       title: "Imagicaa",
//       color: "from-indigo-700/80 via-indigo-500/60 to-transparent",
//       slug: "imagicaa",
//     },
//     {
//       id: 8,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_fe5550df2e3f436fa13c786dc2f9f7c9~mv2.jpg",
//       title: "Saffola",
//       color: "from-yellow-600/80 via-yellow-400/60 to-transparent",
//       slug: "saffola",
//     },
//     {
//       id: 9,
//       image:
//         "https://static.wixstatic.com/media/afc6e0_a20749e7cd6c4f40af6394cd7f412dd6~mv2.jpg/v1/fill/w_244,h_268,fp_0.29_0.37,q_90,enc_avif,quality_auto/afc6e0_a20749e7cd6c4f40af6394cd7f412dd6~mv2.jpg",
//       title: "Truke",
//       color: "from-gray-800/80 via-gray-500/60 to-transparent",
//       slug: "truke",
//     },
//   ];

//   return (
//     <section
//       id="work"
//       className="relative w-full min-h-screen overflow-hidden bg-white"
//     >
//       {/* Header */}
//       <div className="text-center py-4 md:py-5">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
//           Our Work
//         </h1>
//         <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
//           Collaborations with leading brands — designed for authenticity,
//           creativity, and measurable impact.
//         </p>
//         <div className="w-16 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
//       </div>

//       {/* Grid */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
//       >
//         {galleryItems.map((item) => (
//           <Link
//             key={item.id}
//             href={`/case-studies/${item.slug}`}
//             className="relative overflow-hidden group cursor-pointer block"
//           >
//             {/* Image */}
//             <div className="aspect-[4/3] w-full overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 loading="lazy"
//               />
//             </div>

//             {/* Gradient overlay */}
//             <div
//               className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
//             ></div>

//             {/* Title on hover */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//               <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-wide drop-shadow-lg text-center">
//                 {item.title}
//               </h3>
//             </div>
//           </Link>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default WorkGallery;

"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // ✅ useRouter import

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  color: string;
  slug: string;
}

const WorkGallery: React.FC = () => {
  const router = useRouter(); // ✅ Initialize router

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image:
        "https://static.wixstatic.com/media/afc6e0_93202b7339124548843d8d680d9aacc5~mv2.jpg",
      title: "Tuborg",
      color: "from-green-700/80 via-green-500/60 to-transparent",
      slug: "sunburn-tuborg",
    },
    {
      id: 2,
      image:
        "https://static.wixstatic.com/media/afc6e0_a88ea0c7d4554bfe8cf15ea1159e1f28~mv2.jpg",
      title: "Oral-B",
      color: "from-sky-700/80 via-sky-500/60 to-transparent",
      slug: "oral-b",
    },
    {
      id: 3,
      image:
        "https://static.wixstatic.com/media/afc6e0_9b1defe695194026acfd4792b6ed9227~mv2.jpg",
      title: "Nivea",
      color: "from-blue-800/80 via-blue-500/60 to-transparent",
      slug: "nivea",
    },
    {
      id: 4,
      image:
        "https://static.wixstatic.com/media/afc6e0_adfafb44d5d242f18e940b9d5ee66efa~mv2.jpg",
      title: "Puma",
      color: "from-red-700/80 via-red-500/60 to-transparent",
      slug: "puma",
    },
    {
      id: 5,
      image:
        "https://static.wixstatic.com/media/afc6e0_528241bef95d4b5e825327307923d0e5~mv2.jpg",
      title: "Nayo Clothing",
      color: "from-pink-600/80 via-pink-400/60 to-transparent",
      slug: "nayo-clothing",
    },
    {
      id: 6,
      image:
        "https://static.wixstatic.com/media/afc6e0_5c9e05ae4ab840d8a11e07ce793a9d6d~mv2.jpg",
      title: "Borosil",
      color: "from-amber-600/80 via-amber-400/60 to-transparent",
      slug: "borosil",
    },
    {
      id: 7,
      image:
        "https://static.wixstatic.com/media/afc6e0_c66dc841f8fd4bba80411e47f30d8637~mv2.jpg/v1/fill/w_488,h_536,fp_0.54_0.44,q_90,enc_avif,quality_auto/afc6e0_c66dc841f8fd4bba80411e47f30d8637~mv2.jpg",
      title: "Imagicaa",
      color: "from-indigo-700/80 via-indigo-500/60 to-transparent",
      slug: "imagicaa",
    },
    {
      id: 8,
      image:
        "https://static.wixstatic.com/media/afc6e0_fe5550df2e3f436fa13c786dc2f9f7c9~mv2.jpg",
      title: "Saffola",
      color: "from-yellow-600/80 via-yellow-400/60 to-transparent",
      slug: "saffola",
    },
    {
      id: 9,
      image:
        "https://static.wixstatic.com/media/afc6e0_a20749e7cd6c4f40af6394cd7f412dd6~mv2.jpg/v1/fill/w_244,h_268,fp_0.29_0.37,q_90,enc_avif,quality_auto/afc6e0_a20749e7cd6c4f40af6394cd7f412dd6~mv2.jpg",
      title: "Truke",
      color: "from-gray-800/80 via-gray-500/60 to-transparent",
      slug: "truke",
    },
  ];

  // ✅ Optional: Prefetch all case study routes on load for smoother experience
  useEffect(() => {
    galleryItems.forEach((item) =>
      router.prefetch(`/case-studies/${item.slug}`)
    );
  }, [router]);

  return (
    <section
      id="work"
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Header */}
      <div className="text-center py-4 md:py-5">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
          Our Work
        </h1>
        <p className="text-gray-600 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Collaborations with leading brands — designed for authenticity,
          creativity, and measurable impact.
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
      >
        {galleryItems.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/case-studies/${item.slug}`)} // ✅ instant open
            onMouseEnter={() => router.prefetch(`/case-studies/${item.slug}`)} // ✅ prefetch on hover
            className="relative overflow-hidden group cursor-pointer block"
          >
            {/* Image */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            ></div>

            {/* Title on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <h3 className="text-white text-3xl md:text-4xl font-semibold tracking-wide drop-shadow-lg text-center">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkGallery;
