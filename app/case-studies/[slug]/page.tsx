import Link from "next/link";
import { caseStudies } from "../data/caseStudy";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default function CaseStudyDetailPage({ params }: PageProps) {
  const study = caseStudies[params.slug];

  if (!study) {
    return (
      <div
        className={`min-h-screen bg-white flex items-center justify-center ${poppins.className}`}
      >
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Case Study Not Found
          </h1>
          <Link
            href="/case-studies"
            className="text-yellow-600 hover:text-yellow-700 underline text-sm font-medium"
          >
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  const formatBriefText = (text: string) => {
    const parts = text.split(/(Goal-|Results-|Result:)/g);
    const formatted: JSX.Element[] = [];

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if (["Goal-", "Results-", "Result:"].includes(part)) {
        formatted.push(
          <h3
            key={i}
            className="text-base sm:text-lg font-semibold text-yellow-600 mt-6 mb-2"
          >
            {part.replace("-", "").replace(":", "")}
          </h3>
        );
      } else if (part.trim() !== "") {
        formatted.push(
          <p
            key={i}
            className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2 whitespace-pre-line"
          >
            {part.trim()}
          </p>
        );
      }
    }
    return formatted;
  };

  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {study.images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-sm"
            >
              <img
                src={image}
                alt={`${study.title} image ${index + 1}`}
                className="w-full h-full object-cover hover:scale-[1.02] transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-gray-900 leading-tight">
          {study.title}
        </h1>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          {/* Left: Brief */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
              Brief
            </h2>
            <div>{formatBriefText(study.brief)}</div>
          </div>

          {/* Right: Results */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-900">
              Results
            </h2>
            <ul className="space-y-2 mb-8">
              {study.result.metrics.map((metric, index) => (
                <li
                  key={index}
                  className="text-sm sm:text-base text-gray-800 flex items-start"
                >
                  <span className="mr-2 text-yellow-500 text-lg leading-none">
                    •
                  </span>
                  <span>{metric}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
              Deliverables
            </h3>
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              {study.deliverables}
            </p>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base font-semibold px-8 py-3 rounded-lg transition-all"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
