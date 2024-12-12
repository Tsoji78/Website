import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions Page | Rabovel",
  description: "Learn about Rabovel's terms and conditions.",
};

const TermsPage = () => {
  const terms = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the Rabovel platform, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.",
    },
    {
      title: "2. Account Registration",
      content:
        "You must register an account to access our services. Ensure that all information provided is accurate and up-to-date. Rabovel reserves the right to suspend or terminate accounts with false or incomplete details.",
    },
    {
      title: "3. Privacy Policy",
      content:
        "Your data is governed by our Privacy Policy. By using our platform, you consent to the collection and use of your data as outlined in our Privacy Policy.",
    },
    {
      title: "4. Limitation of Liability",
      content:
        "Rabovel is not liable for any losses or damages arising from the use of our platform, including but not limited to financial losses due to trading decisions.",
    },
    {
      title: "5. Modifications to Terms",
      content:
        "Rabovel reserves the right to update or modify these Terms at any time. Changes will be effective immediately upon posting on this page.",
    },
  ];

  return (
    <div className="container my-10 mx-auto px-4 py-10 lg:py-20">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="text-lg text-gray-600">
          Please read the terms and conditions carefully before using Rabovel&rsquo;s services.
        </p>
      </header>

      {/* Terms Section */}
      <section className="max-w-4xl mx-auto">
        {terms.map((term, index) => (
          <div
            key={index}
            className="mb-6 border-b border-gray-200 pb-6 last:border-none"
          >
            <h2 className="text-xl font-semibold mb-2">{term.title}</h2>
            <p className="">{term.content}</p>
          </div>
        ))}
      </section>

      {/* Footer Note */}
      <footer className="text-center mt-10 text-sm">
        <p>
          If you have any questions about these terms, please contact our support team.
        </p>
      </footer>
    </div>
  );
};

export default TermsPage;
