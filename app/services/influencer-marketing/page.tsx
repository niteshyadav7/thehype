"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InfluencerMarketing() {
  return (
    <section className="w-full bg-white py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-stretch">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 flex flex-col justify-center"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            Influencer <span className="text-yellow-500">Marketing</span>
          </h1>

          <div className="text-gray-700 text-lg leading-relaxed space-y-5">
            <p>
              Are you a growing brand? Every time it’s important to seek
              attention on the internet because every business, big or small,
              has significantly invaded the online world. Micro-Influencer
              Marketing creates online buzz.
            </p>

            <p>
              On average,{" "}
              <span className="text-yellow-500 font-semibold">84%</span> of
              global marketers run micro-influencer campaigns, and{" "}
              <span className="text-yellow-500 font-semibold">80%</span> find
              them highly effective.{" "}
              <span className="font-semibold text-gray-900">The Hype</span>{" "}
              helps brands connect with influencers who best reflect their brand
              and target audience.
            </p>

            <p>
              Collaborating with micro-influencers builds trust, creates brand
              loyalty, and helps your business rise above the noise.
            </p>

            <p>
              If you’re still wondering why micro-influencer marketing is so
              popular, it’s time to refine your strategy — improve SEO, increase
              engagement, and boost conversions.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="pt-2"
          >
            <Link
              href="/"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-md transition-all duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex items-center"
        >
          <motion.img
            src="https://static.wixstatic.com/media/e1c78c_7648994396e44d2784a9b52d9261434a.jpg/v1/fill/w_918,h_575,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e1c78c_7648994396e44d2784a9b52d9261434a.jpg"
            alt="Influencer Marketing Visual"
            className="w-full h-full max-h-[600px] rounded-sm shadow-xl object-cover"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
