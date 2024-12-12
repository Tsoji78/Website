"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat pb-16 pt-[100px] dark:bg-gray-500 md:pb-[100px] md:pt-[120px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[120px] 2xl:pt-[90px]">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-35"
        style={{
          backgroundImage: `url('/images/hero/background1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      {/* Hero Content */}
      <div className="container relative z-5 mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Section - Text and Button */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[600px]">
              <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                Unlock Your Trading Potential with Rabovel
              </h1>
              <p className="mb-8 text-lg font-extrabold leading-tight sm:text-xl">
                Experience a new era of trading in Nigeria with Rabovel. Join us today to explore innovative features like options and futures trading that elevate your investment strategy.
              </p>
              <Link
                href="/signup"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-blue-600 dark:to-indigo-700"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative floating-animation">
              <Image
                src="/images/hero/trade07.png"
                alt="Stock Exchange Chart"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .floating-animation {
          animation: float 2s ease-in-out infinite;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .zoom-in-animation {
          transition: transform 0.3s ease-in-out;
        }
        .zoom-in-animation:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Hero;
