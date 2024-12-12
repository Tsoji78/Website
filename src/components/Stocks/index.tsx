"use client";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Stock = () => {
  // Extended stock data
  const stockData = [
    { name: "Dangote Cement", symbol: "DANGCEM", price: 276.5, change: 1.25 },
    { name: "GTBank", symbol: "GTCO", price: 30.15, change: -0.45 },
    { name: "MTN Nigeria", symbol: "MTNN", price: 220.0, change: 2.1 },
    { name: "Zenith Bank", symbol: "ZENITHBANK", price: 28.75, change: -0.8 },
    { name: "Nestle Nigeria", symbol: "NESTLE", price: 1210.0, change: 0.5 },
    { name: "Seplat Energy", symbol: "SEPLAT", price: 1290.0, change: -1.25 },
    { name: "Nigerian Breweries", symbol: "NB", price: 45.5, change: 0.75 },
    { name: "Fidelity Bank", symbol: "FIDELITYBK", price: 6.25, change: -0.2 },
    { name: "Transcorp", symbol: "TRANSCORP", price: 1.3, change: 0.1 },
    { name: "Access Holdings", symbol: "ACCESS", price: 12.85, change: 0.55 },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="analytics" className="py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white md:text-5xl">
            NGX Stock Market Analytics
          </h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Explore top-performing stocks on the Nigerian Exchange and stay informed.
          </p>
        </div>

        {/* Stock Data Section */}
        <Slider {...settings} className="grid grid-cols-1 gap-6">
          {stockData.map((stock, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {stock.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                <strong>Symbol:</strong> {stock.symbol}
              </p>
              <p className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                ₦{stock.price.toFixed(2)}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  stock.change > 0 ? "text-green-500" : "text-red-500"
                }`}
              >
                {stock.change > 0 ? "▲" : "▼"} {stock.change.toFixed(2)}%
              </p>
            </div>
          ))}
        </Slider>

        {/* Call-to-Action */}
        <div className="mt-12 text-center">
          <Link
            href="/signup"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl dark:from-blue-600 dark:to-indigo-700"
          >
            Start Trading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stock;
