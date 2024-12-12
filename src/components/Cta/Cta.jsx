"use client";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <div
      id="about"
      className="pt-12 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="border-b border-gray-300/50 pb-16 dark:border-gray-700/50">
          <div className="flex flex-wrap items-center -mx-4">
            {/* Left Section - Text and CTA */}
            <div className="w-full px-4 mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative mx-auto max-w-lg overflow-hidden rounded-lg shadow-lg transition-transform duration-500 ease-in-out group hover:scale-105">
                <Image
                  src="/images/about/about-1.png"
                  alt="Trading Image"
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            {/* Right Section - Image */}
            <div className="w-full px-4 lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl md:text-5xl leading-tight">
                Start Your Trading Journey Today
              </h2>
              <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 sm:text-xl leading-relaxed">
                Open an account now to explore innovative trading options and 
                maximize your investment potential.
              </p>
              <div className="mt-8">
                <Link
                  href="/signup"
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-blue-600 dark:to-indigo-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
