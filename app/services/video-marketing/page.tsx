
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function VideoMarketing() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-6"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Video <span className="text-pink-500">Marketing</span>
          </h1>

          <div className="text-gray-700 text-lg leading-relaxed space-y-5">
            <p>
              Why Video Marketing? Because your brand image matters. At{" "}
              <span className="font-semibold text-gray-900">The Hype</span>, we
              help your brand attract, explain, and connect with audiences that
              convert.
            </p>

            <p>
              Over <span className="text-pink-500 font-semibold">72%</span> of
              customers say they prefer learning about a product or service
              through video. Videos not only boost brand awareness but also
              increase conversion rates and engagement.
            </p>

            <p>
              Our team creates engaging video campaigns — from{" "}
              <span className="font-semibold text-gray-900">
                Explainer Videos, Video Ads, to Motion Posters
              </span>{" "}
              — all designed to tell your brand’s story with clarity and impact.
            </p>

            <p>
              Whether it’s sales, training, or storytelling — the right
              animation style helps your brand stand out and connect emotionally
              with viewers.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-center h-full"
        >
          <motion.img
            src="https://static.wixstatic.com/media/e1c78c_6258cb2399a14df5acb313a79928b124.jpg/v1/fill/w_918,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1c78c_6258cb2399a14df5acb313a79928b124.jpg"
            alt="Video Marketing Visual"
            className="w-full h-full max-h-[700px] object-cover rounded-xl shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
