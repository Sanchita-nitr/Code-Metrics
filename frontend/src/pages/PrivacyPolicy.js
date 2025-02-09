import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-cyan-800">Privacy Policy</h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          This Privacy Policy explains how we collect, use, and protect your information when you use our services.
        </p>

        <div className="space-y-6">
          {/* Information We Collect */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-cyan-600">
            <h2 className="text-2xl font-semibold text-cyan-800">Information We Collect</h2>
            <p className="text-gray-700 mt-2">
              We may collect personal information such as your name, email address, and any other information you provide to us.
            </p>
          </div>

          {/* How We Use Your Information */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800">How We Use Your Information</h2>
            <p className="text-gray-700 mt-2">
              We use your information to provide and improve our services, communicate with you, and respond to your inquiries.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-blue-800">Data Security</h2>
            <p className="text-gray-700 mt-2">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
            </p>
          </div>

          {/* Changes to This Policy */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-semibold text-yellow-800">Changes to This Policy</h2>
            <p className="text-gray-700 mt-2">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-red-600">
            <h2 className="text-2xl font-semibold text-red-800">Contact Us</h2>
            <p className="text-gray-700 mt-2">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <span className="font-semibold text-red-600">sanchitapriyadarshinee@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
