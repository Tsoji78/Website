import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 30 L15 20 L20 25 L30 10"
            stroke="#34D399"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="20" cy="20" r="8" stroke="#3B82F6" strokeWidth="2" fill="none" />
        </svg>
      </div>
    ),
    title: "Futures and Options Trading",
    paragraph:
      "Experience a new level of investment flexibility and higher returns with Nigeria's first Futures & Options trading platform.",
  },
  {
    id: 2,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8" y="20" width="6" height="12" fill="#3B82F6" />
          <rect x="18" y="14" width="6" height="18" fill="#3B82F6" />
          <rect x="28" y="8" width="6" height="24" fill="#3B82F6" />
        </svg>
      </div>
    ),
    title: "Stock Trading",
    paragraph: "Trade stocks confidently with our intuitive platform.",
  },
  {
    id: 3,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 4 A16 16 0 1 1 19.9 4 Z"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <path d="M20 20 L36 20 A16 16 0 0 1 20 36 Z" fill="#3B82F6" />
        </svg>
      </div>
    ),
    title: "Mutual Funds",
    paragraph: "Invest in a diverse range of mutual funds tailored to your needs.",
  },
  {
    id: 4,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 30 L15 22 L22 28 L30 15"
            stroke="#3B82F6"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="20" cy="20" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
        </svg>
      </div>
    ),
    title: "Real-Time Market Insights",
    paragraph: "Stay ahead with expert analysis and market trends.",
  },
  {
    id: 5,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-300">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10 H26 C30 10 30 14 26 14 H8 V30 H26 C30 30 30 34 26 34 H8 C6 34 6 32 6 30 V12 C6 10 8 10 8 10 Z"
            fill="#FFFFFF"
          />
          <path
            d="M26 14 H32 V30 H26 C24 30 24 28 26 28 H32 V16 H26 C24 16 24 14 26 14 Z"
            fill="#3B82F6"
          />
          <line x1="10" y1="14" x2="24" y2="14" stroke="#3B82F6" strokeWidth="2" />
          <line x1="10" y1="18" x2="24" y2="18" stroke="#FFFFFF" strokeWidth="2" />
        </svg>

      </div>
    ),
    title: "Education",
    paragraph: "Learn the essentials of trading with our expert-led courses and tutorials.",
  },
  {
    id: 6,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-100">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Robot Head --> */}
          <rect x="10" y="10" width="20" height="16" rx="2" fill="#3B82F6" />

          {/* <!-- Robot Eyes --> */}
          <circle cx="15" cy="16" r="2" fill="#FFFFFF" />
          <circle cx="25" cy="16" r="2" fill="#FFFFFF" />
          <circle cx="15" cy="16" r="1" fill="#A78BFA" />
          <circle cx="25" cy="16" r="1" fill="#A78BFA" />

          {/* <!-- Robot Mouth --> */}
          <rect x="16" y="20" width="8" height="2" fill="#FFFFFF" rx="1" />

          {/* <!-- Antennas --> */}
          <rect x="19" y="6" width="2" height="4" fill="#A78BFA" />
          <circle cx="20" cy="5" r="1" fill="#A78BFA" />

          {/* Robot Body  */}
          <rect x="12" y="26" width="16" height="8" rx="2" fill="#3B82F6" />
          <rect x="14" y="28" width="12" height="2" fill="#FFFFFF" />
        </svg>

      </div>
    ),
    title: "Our AI-powered Assistant",
    paragraph: "Get personalized trading advice with our AI-powered assistant.",
  },
  {
    id: 7,
    icon: (
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-pink-100">
        <svg
          width="60"
          height="60"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="12" y="15" width="16" height="10" fill="#EC4899" />
          <circle cx="20" cy="30" r="3" fill="#EC4899" />
          <line x1="12" y1="20" x2="28" y2="20" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      </div>
    ),
    title: "Credit/Debit Card",
    paragraph: "Easily fund your account using your credit or debit card.",
  },
];

export default featuresData;
