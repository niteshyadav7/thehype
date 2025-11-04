// "use client";

// import { motion } from "framer-motion";
// import { Sparkles, Instagram, Youtube, Linkedin } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#222] text-white py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//           <div className="flex items-center space-x-2">
//             <Sparkles className="w-8 h-8 text-[#FFC107]" />
//             <span
//               className="text-2xl font-black"
//               style={{ fontFamily: "Poppins, sans-serif" }}
//             >
//               THE HYPE
//             </span>
//           </div>

//           <div className="text-center">
//             <p className="text-gray-400 text-sm">
//               Making connections. Delivering results.
//             </p>
//           </div>

//           <div className="flex justify-end space-x-4">
//             <motion.a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="bg-[#FFC107] p-3 rounded-full hover:bg-[#FFD54F] transition-colors"
//               aria-label="Follow us on Instagram"
//             >
//               <Instagram className="w-5 h-5 text-[#222]" />
//             </motion.a>
//             <motion.a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//               className="bg-[#FFC107] p-3 rounded-full hover:bg-[#FFD54F] transition-colors"
//               aria-label="Connect with us on LinkedIn"
//             >
//               <Linkedin className="w-5 h-5 text-[#222]" />
//             </motion.a>
//           </div>
//         </div>

//         <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
//           <p>
//             &copy; {new Date().getFullYear()} The Hype. All rights reserved.
//           </p>
//           <div className="flex space-x-6 mt-4 md:mt-0">
//             <a href="#" className="hover:text-[#FFC107] transition-colors">
//               Privacy Policy
//             </a>
//             <a href="#" className="hover:text-[#FFC107] transition-colors">
//               Terms of Service
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[rgb(95,94,97)] to-[#0e0e0e] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Top Section === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* ✅ Brand Logo + Text */}
          <div className="flex items-center space-x-3">
            <img
              src="https://static.wixstatic.com/media/afc6e0_912c153020104eedb7a293da44447843~mv2.png/v1/fill/w_148,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/512px.png"
              alt="The Hype Logo"
              className="h-14 md:h-16 object-contain drop-shadow-md"
              draggable={false}
            />
            
          </div>

          {/* ✅ Tagline */}
          <div className="text-center">
            <p className="text-gray-300 text-sm md:text-base font-light tracking-wide">
              Making connections. Delivering results.
            </p>
          </div>

          {/* ✅ Social Icons */}
          <div className="flex justify-end space-x-4">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="bg-[#FFC107] p-3 rounded-full hover:bg-[#FFD54F] transition-transform shadow-md"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5 text-[#222]" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              className="bg-[#FFC107] p-3 rounded-full hover:bg-[#FFD54F] transition-transform shadow-md"
              aria-label="Connect with us on LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-[#222]" />
            </motion.a>
          </div>
        </div>

        {/* === Divider === */}
        <div className="mt-10 pt-6 border-t border-gray-600" />

        {/* === Bottom Section === */}
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} The Hype. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#FFC107] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#FFC107] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
