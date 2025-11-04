
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CustomerReviewManagement() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Column - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
            Customer <span className="text-yellow-500">Review Management</span>
          </h1>

          <div className="text-gray-700 text-lg leading-relaxed space-y-5">
            <p>
              Customer Review Management is the process of maintaining a healthy
              brand reputation. While your brand grows on social media, it’s
              equally important to maintain a solid online reputation. Our
              dedicated team monitors and improves your brand’s presence daily.
            </p>

            <p>
              This process can boost sales by up to 25%. Nearly 35% of
              businesses plan to invest more in review management for its proven
              impact on growth and trust.
            </p>

            <p>
              At The Hype, we enhance your brand visibility by improving public
              feedback — directly shaping how people perceive your business. We
              ensure your reputation stays positive and your brand ranks higher
              across platforms.
            </p>

            <p>
              Give your brand the right nourishment through quality content,
              consistent monitoring, and better online rankings.
            </p>
          </div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all"
            >
              GET IN TOUCH
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full flex items-center"
        >
          <motion.img
            src="https://static.wixstatic.com/media/e1c78c_9cb23653b9354731abc58fefe75d59af.jpg/v1/fill/w_917,h_574,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1c78c_9cb23653b9354731abc58fefe75d59af.jpg"
            alt="Customer Review Management"
            className="w-full h-full max-h-[600px] object-cover rounded-sm shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
