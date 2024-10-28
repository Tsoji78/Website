import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="flex flex-wrap items-center justify-between">
            {/* Left Section - Text and Button */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[500px]">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Unlock Your Trading Potential with Rabovel
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Experience a new era of trading in Nigeria with Rabovel. Join 
                  us today to explore innovative features like options and futures trading that 
                  elevate your investment strategy. 
                </p>
                <Link
                  href="/signup"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="hidden lg:block lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/hero/image2.jpg"
                  alt="Stock Exchange Chart"
                  width={700}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
