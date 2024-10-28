import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="4" fill="#E0E0E0" />
        {/* Candlestick Bars */}
        <rect x="8" y="10" width="4" height="15" fill="#34D399"/>
        <rect x="18" y="7" width="4" height="21" fill="#F87171"/>
        <rect x="28" y="14" width="4" height="12" fill="#34D399"/>
        
         {/* Arrows */}
        <path d="M35 10 L30 5" stroke="#374151" stroke-width="2" />
        <path d="M30 5 L33 5 L33 8" stroke="#374151" stroke-width="2" fill="none" />
        
        <path d="M5 30 L10 35" stroke="#374151" stroke-width="2" />
        <path d="M10 35 L7 35 L7 32" stroke="#374151" stroke-width="2" fill="none" />
      </svg>
    ),
    title: "Futures and Options trading",
    paragraph:
      " Rabovel stands out by offering unique trading features like futures and options being the first Nigerian stock broker to offer F&O trading. Experience a new level of investment flexibility and potential for higher returns. ",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">

        <rect width="40" height="40" rx="4" fill="#E5E7EB"/>
        
        <rect x="10" y="20" width="4" height="12" fill="#34D399"/>
        <rect x="18" y="14" width="4" height="18" fill="#34D399"/>
        <rect x="26" y="8" width="4" height="24" fill="#34D399"/>

        <path d="M30 18 L34 14 L30 10" stroke="#34D399" stroke-width="2" fill="none" />
        <line x1="34" y1="14" x2="18" y2="14" stroke="#34D399" stroke-width="2" />
      </svg>

    ),
    title: "Stock Trading",
    paragraph:
      " Trade stocks with confidence using our user-friendly platform. ",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">

      <circle cx="20" cy="20" r="18" stroke="black" stroke-width="2" fill="none"/>

      <path d="M20 2 A18 18 0 0 1 38 20 L20 20 Z" fill="lightblue"/>

      <path d="M20 20 L38 20 A18 18 0 0 1 20 38 Z" fill="orange"/>

      <circle cx="10" cy="10" r="3" fill="green"/>
      <circle cx="30" cy="10" r="3" fill="green"/>
      <circle cx="10" cy="30" r="3" fill="green"/>
      <circle cx="30" cy="30" r="3" fill="green"/>
    </svg>

    ),
    title: "Mutual Funds",
    paragraph:
      " Invest in mutual funds of your choice.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke="#000" stroke-width="2" fill="none" />
        <path d="M10 25 L15 18 L18 22 L25 12" stroke="#00C853" stroke-width="2" fill="none" />
        <path d="M24 12 L26 18 L22 16 L28 14" stroke="#00C853" stroke-width="2" fill="none" />
        <path d="M30 15 L25 22 L22 18 L15 28" stroke="#D32F2F" stroke-width="2" fill="none" />
        <path d="M16 28 L14 22 L18 24 L12 26" stroke="#D32F2F" stroke-width="2" fill="none" />
        <rect x="8" y="10" width="4" height="20" fill="#00C853" />
        <rect x="18" y="15" width="4" height="15" fill="#00C853" />
        <rect x="28" y="5" width="4" height="25" fill="#D32F2F" />
      </svg>

    ),
    title: "Real-Time Market Insights and Analysis",
    paragraph:
      "Stay ahead of the market with our expert insights.",
  },
];
export default featuresData;
