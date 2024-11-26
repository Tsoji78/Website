// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Policies Page | Rabovel",
//   description: "Learn about Rabovel's privacy policy, terms of use, and refund policy.",
// };

const PolicyPage = () => {
  return (
    <div className="container my-10 mx-auto px-4 py-10 lg:py-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Our Policies</h1>
        <p className="text-lg text-gray-600">
          Learn about how we manage your data, our terms of use, and refund procedures.
        </p>
      </header>

      {/* Privacy Policy Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          At Rabovel, your privacy is of utmost importance to us. We ensure that your personal
          information is handled responsibly and securely. This policy outlines the data we
          collect, how we use it, and the measures we take to protect it.
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>We collect personal data such as your name, email address, and payment details to provide seamless service.</li>
          <li>Your data will never be shared with third parties without your explicit consent.</li>
          <li>We use secure encryption to protect your sensitive information.</li>
        </ul>
      </section>

      {/* Terms of Use Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-primary mb-6">Terms of Use</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing our platform, you agree to the following terms of use:
        </p>
        <ol className="list-decimal pl-6 mt-4 text-gray-700">
          <li>You will use the platform for lawful purposes only.</li>
          <li>You must not engage in fraudulent activities or misuse the services provided.</li>
          <li>We reserve the right to terminate accounts found violating our policies.</li>
        </ol>
        <p className="mt-4 text-gray-700">
          For detailed terms, please contact our support team or refer to the full document provided on this page.
        </p>
      </section>

      {/* Refund Policy Section */}
      <section>
        <h2 className="text-2xl font-semibold text-primary mb-6">Refund Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We strive to ensure customer satisfaction with every purchase. However, our refund policy
          is as follows:
        </p>
        <ul className="list-disc pl-6 mt-4 text-gray-700">
          <li>Refunds are available for cancellations made within 7 days of purchase.</li>
          <li>To initiate a refund, please contact our support team with proof of payment.</li>
          <li>Refunds may take up to 10 business days to process.</li>
        </ul>
        <p className="mt-4 text-gray-700">
          If you have any questions or concerns, please reach out to our customer support team.
        </p>
      </section>
    </div>
  );
};

export default PolicyPage;
