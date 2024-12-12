'use client';

const Education = () => {
  return (
    <div className="container mx-auto px-6 py-10 lg:px-16 lg:py-20">
      {/* Header Section */}
      <header className="text-center mt-14 mb-12">
        <h1 className="text-4xl font-bold mb-4">How to Trade Nigerian Stocks with Rabovel</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Learn how to use the Rabovel stock trading platform to buy, sell, and manage your Nigerian stock investments.
        </p>
      </header>

      {/* Getting Started */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Getting Started with Rabovel</h2>
        <p className="text-lg mb-4">
          To start trading Nigerian stocks on Rabovel, follow these steps to create your account and begin investing.
        </p>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Visit the <a href="https://rabovel.com" className="text-blue-600 hover:text-blue-800 transition duration-200">Rabovel website</a> and click on "Sign Up".</li>
          <li>Fill in your personal information, including your National ID, address, and bank details.</li>
          <li>Complete the KYC (Know Your Customer) process by submitting documents for identity verification.</li>
          <li>Once your account is verified, you will receive login credentials to access the platform.</li>
          <li>Deposit funds into your trading account to begin your stock trading journey.</li>
        </ol>
      </section>

      {/* Placing Orders */}
      <section className="mb-16 bg-gray-50 text-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">Placing Stock Orders on Rabovel</h2>
        <p className="text-lg mb-4">
          Once your account is set up, you can place stock orders. Here’s how:
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Market Orders</h3>
            <p className="text-lg">
              A market order is an order to buy or sell a stock immediately at the best available price.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Limit Orders</h3>
            <p className="text-lg">
              A limit order is an order to buy or sell a stock at a specific price or better. This gives you control over the price at which your trade is executed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Stop Loss Orders</h3>
            <p className="text-lg">
              A stop loss order helps you limit potential losses by automatically selling a stock when it reaches a pre-defined price.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Market Trends */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Understanding Market Trends in Nigerian Stocks</h2>
        <p className="text-lg mb-4">
          Before placing orders, understanding market trends is key to making informed decisions. Here are some tips:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Track Stock Charts</h3>
            <p className="text-lg">
              Rabovel provides tools to track stock charts. Watch for patterns, such as candlestick formations and trends, to make better predictions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Use Technical Indicators</h3>
            <p className="text-lg">
              Utilize technical indicators such as Relative Strength Index (RSI) and Moving Averages to gauge market sentiment and stock performance.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Monitor News and Events</h3>
            <p className="text-lg">
              Stay updated with local and global financial news, which can influence Nigerian stock prices and market movements.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Video Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Watch and Learn: Trading Nigerian Stocks</h2>
        <p className="text-lg mb-4">
          Learn through our detailed video guides. Watch the video below to understand how to effectively trade Nigerian stocks using Rabovel.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src="https://www.youtube.com/embed/example-video-id"
            title="How to Trade Nigerian Stocks"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-lg"
          ></iframe>
        </div>
        <p className="text-lg font-medium text-blue-600">
          <a href="https://www.youtube.com/channel/example-channel-id" target="_blank" rel="noopener noreferrer">
            Visit our YouTube Channel for more tutorials
          </a>
        </p>
      </section>

      {/* Frequently Asked Questions */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">How do I withdraw funds from Rabovel?</h3>
            <p className="text-lg">
              To withdraw funds, log in to your Rabovel account, go to the "Funds" section, and choose "Withdraw". Enter your bank details to receive the transfer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">What is a Nigerian Stock Trading Account?</h3>
            <p className="text-lg text-gray-600">
              A trading account is where your stocks are held electronically. Rabovel offers a fully integrated Nigerian stock trading account for seamless transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-8 px-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Need Help?</h2>
        <p className="text-lg text-gray-600 mb-4">
          If you have any questions or need assistance, feel free to reach out to our customer support team. We are here to help!
        </p>
        <p className="text-lg font-medium text-blue-600">
          <a href="mailto:support@rabovel.com">support@rabovel.com</a>
        </p>
      </section>
    </div>
  );
};

export default Education;
