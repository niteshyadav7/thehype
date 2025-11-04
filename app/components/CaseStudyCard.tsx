"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export interface CaseStudyCardProps {
  title: string;
  images: string[];
  brief: string;
  result: {
    metrics: string[];
  };
  deliverables: string;
  slug: string;
}

export default function CaseStudyCard({
  title,
  images,
  brief,
  result,
  deliverables,
  slug,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer"
      >
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500"></div>
          <h2 className="absolute bottom-6 left-6 text-white text-3xl font-bold drop-shadow-md">
            {title}
          </h2>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {brief}
          </p>

          <div className="flex flex-wrap gap-4 mb-4">
            {result.metrics.slice(0, 2).map((metric, index) => (
              <span
                key={index}
                className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full"
              >
                {metric}
              </span>
            ))}
          </div>

          <p className="text-gray-600 text-sm mb-4">
            <span className="font-semibold text-gray-800">Deliverables:</span>{" "}
            {deliverables}
          </p>

          <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-1 transition-transform">
            View Case Study →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
