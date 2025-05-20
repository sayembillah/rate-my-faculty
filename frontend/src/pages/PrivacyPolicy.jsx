import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-lg leading-relaxed">
        At Rate My Faculty, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and safeguard your personal
        information when you use our platform.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        We collect only the information necessary to provide and improve our
        services, and we never share your personal data with third parties
        without your consent.
      </p>
      <p className="mb-4 text-lg leading-relaxed">
        By using Rate My Faculty, you agree to the collection and use of
        information in accordance with this policy.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>
          Personal details you provide when creating an account or submitting
          reviews.
        </li>
        <li>Usage data to help us improve the platform.</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        How We Use Your Information
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>To provide and maintain our services.</li>
        <li>
          To communicate with you about updates and important information.
        </li>
        <li>To protect against fraudulent or unauthorized activities.</li>
      </ul>
      <p className="mb-4 text-lg leading-relaxed">
        If you have any questions about our Privacy Policy, please contact us.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
