"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const Stock = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NSENG:DANGCEM", title: "Dangote Cement" },
        { proName: "NSENG:GTCO", title: "GTBank" },
        { proName: "NSENG:MTNN", title: "MTN Nigeria" },
        { proName: "NSENG:ZENITHBANK", title: "Zenith Bank" },
        { proName: "NSENG:NESTLE", title: "Nestle Nigeria" },
        { proName: "NSENG:SEPLAT", title: "Seplat Energy" },
        { proName: "NSENG:NB", title: "Nigerian Breweries" },
        { proName: "NSENG:FIDELITYBK", title: "Fidelity Bank" },
        { proName: "NSENG:TRANSCORP", title: "Transcorp" },
        { proName: "NSENG:ACCESS", title: "Access Holdings" },
      ],
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });

    widgetRef.current.innerHTML = ""; // Clear on reload
    widgetRef.current.appendChild(script);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            NGX Real-Time Stock Ticker
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Stay updated with live data from the Nigerian Stock Exchange powered by TradingView.
          </p>
        </div>

        {/* Live Ticker */}
        <div ref={widgetRef} className="tradingview-widget-container" />

        {/* Optional CTA */}
        {/* <div className="mt-12 text-center">
          <a
            href="/signup"
            className="inline-block rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-3 text-lg font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Start Trading
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Stock;
