import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] lg:mb-0 lg:mx-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-2.png"
                alt="about image"
                fill
                className="drop-shadow-lg dark:drop-shadow-none"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              {/* Heading Section */}
              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-3xl lg:text-2xl xl:text-3xl">
                  Discover Rabovel: Shaping the Future of Digital Trading in Nigeria
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  Founded with the goal of revolutionizing the trading landscape in 
                  Nigeria, Rabovel is committed to providing innovative solutions like 
                  options and futures trading. Our vision is to empower investors with 
                  cutting-edge tools and resources, making trading accessible and efficient 
                  for everyone.
                </p>
              </div>

              {/* Subheading Section */}
              <div className="mb-10">
                <h3 className="mb-6 text-2xl font-extrabold text-gray-800 dark:text-gray-100 sm:text-3xl lg:text-2xl xl:text-3xl">
                  Empowering Your Investments
                </h3>
                <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg sm:leading-relaxed">
                  Rabovel is revolutionizing the Nigerian stock market with innovative 
                  trading options and futures for everyone.
                </p>
              </div>

              {/* Call-to-Action */}
              <Link
                href="/signup"
                className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-blue-600 dark:to-indigo-700"
              >
                Join Us!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
