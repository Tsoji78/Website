"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark bg-cover bg-center bg-no-repeat md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-30"
        style={{
          backgroundImage: `url('/images/hero/background1.jpg')`, // Replace with your actual image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      ></div>

      <div className="container relative z-10">
        <div className="flex flex-wrap items-center justify-between">
          {/* Left Section - Text and Button */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Unlock Your Trading Potential with Rabovel
              </h1>
              <p className="mb-12 text-base leading-relaxed font-bold sm:text-lg md:text-xl">
                Experience a new era of trading in Nigeria with Rabovel. Join us today to explore innovative features like options and futures trading that elevate your investment strategy.
              </p>
              <Link
                href="/signup"
                className="zoom-in-animation rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block lg:w-1/2">
            <div className="relative floating-animation">
              <Image
                src="/images/hero/trade07.png"
                alt="Stock Exchange Chart"
                width={700}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

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
