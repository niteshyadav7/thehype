"use client";

import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";

type ClientRowProps = {
  logos: string[];
  speed?: number;
};

const ClientRow = ({ logos = [], speed = 0.5 }: ClientRowProps) => {
  const baseX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const displayedLogos = [...logos, ...logos]; // double for smooth looping

  useAnimationFrame((t, delta) => {
    baseX.current -= speed * (delta / 16);
    if (containerRef.current) {
      const totalWidth = containerRef.current.scrollWidth / 2;

      if (speed > 0 && baseX.current <= -totalWidth) baseX.current = 0;
      if (speed < 0 && baseX.current >= 0) baseX.current = -totalWidth;

      containerRef.current.style.transform = `translate3d(${baseX.current}px, 0, 0)`;
    }
  });

  return (
    <div className="overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex items-center will-change-transform"
      >
        {displayedLogos.map((logo, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <img
              src={logo}
              alt={`Client ${i}`}
              className="h-24 sm:h-28 md:h-32 object-contain mix-blend-multiply brightness-100 contrast-125"
              draggable={false}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Clients() {
  const rows = [
    {
      logos: [
        "https://static.wixstatic.com/media/afc6e0_024dc26922d94276860e49e905053007~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_23208b62b4164cccab4544550e40dda9~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_dbda0f9e5b6a4e5c9c873469457b1fe8~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_bf4847b159ae4915839a75d83cdeef7f~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_c3026d1863f641a9ae6dab1693aac94c~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_65cb854844d84a0bb74bf2d18238680c~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_5f5b8cdd816748488ff7aabaae4256e9~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_ea2fd3e5c9374802838eaafe4f54c34b~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_c96c637af11a4111b3a2423f775c5b17~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_148c4ec835634ed4bda47aae21a3eafb~mv2.png",
      ],
      speed: 0.4,
    },
    {
      logos: [
        "https://static.wixstatic.com/media/afc6e0_e76ffbdcaf4b4184bb447985ac300dec~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_13e3688436594fceaeb839e1feab613d~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_281a86e29548488b9106170a64f275cc~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_ba23a7499a004d18b1ac4de4b4e0b74e~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_469d0c3bd06a44f7a300bf42255afc8f~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_b1305dca32ee45bd80faec7771a4bc63~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_bf978fbe7959421abf950fb38d2581f6~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/afc6e0_bf978fbe7959421abf950fb38d2581f6~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_22ce32f6f0a042679691eee8f247424d~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/afc6e0_22ce32f6f0a042679691eee8f247424d~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_830872752beb402dafe980e2a0b4a715~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/afc6e0_830872752beb402dafe980e2a0b4a715~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_3cd8f517480a4b9cb3a36693e0c97753~mv2.png/v1/fill/w_163,h_163,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/afc6e0_3cd8f517480a4b9cb3a36693e0c97753~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_c76b8031b4ee43c3871e4aa0f20583da~mv2.png",
      ],
      speed: -0.3,
    },
    {
      logos: [
        "https://static.wixstatic.com/media/afc6e0_1e552409f6d844febb485aac123d31a4~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_1d5345ad303c4be09755f23496613b92~mv2.jpg",
        "https://static.wixstatic.com/media/afc6e0_62e7c135b97d4726ae0337f1864f824d~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_9a6e135ca72e4d07b8e6ba9b888b8cef~mv2.jpg",
        "https://static.wixstatic.com/media/afc6e0_51abde78442f41198424f4f71bd2c32f~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_9a08acf90d4644eda76e3d2d3c1a3a11~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_f03cbb54fd11462a9c9ca11df42ee2b8~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_ccd2379b901d4347b69f26c727e29b5d~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_ee6948706707420e9c5113a2b66d4dad~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_dd93898e383a42a59be6ecd64d348c42~mv2.png",
        "https://static.wixstatic.com/media/afc6e0_a924a30a97974af59cc755e81d06f06d~mv2.png",
      ],
      speed: 0.45,
    },
  ];

  return (
    <section className="w-full bg-white py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
          Our <span className="text-yellow-500">Clients</span>
        </h2>
        <div className="space-y-8">
          {rows.map((r, i) => (
            <ClientRow key={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
