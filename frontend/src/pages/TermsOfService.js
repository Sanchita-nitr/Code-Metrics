import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-cyan-800">Terms of Service</h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          These Terms of Service govern your use of our services. By using our services, you agree to these terms.
        </p>

        <div className="space-y-6">
          {/* User Responsibilities */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-cyan-600">
            <h2 className="text-2xl font-semibold text-cyan-800">User Responsibilities</h2>
            <p className="text-gray-700 mt-2">
              You are responsible for your use of the services and for any content you provide.
            </p>
          </div>

          {/* Intellectual Property */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-green-600">
            <h2 className="text-2xl font-semibold text-green-800">Intellectual Property</h2>
            <p className="text-gray-700 mt-2">
              All content and materials provided through our services are the property of Code Metrics or our licensors.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-blue-600">
            <h2 className="text-2xl font-semibold text-blue-800">Limitation of Liability</h2>
            <p className="text-gray-700 mt-2">
              We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-yellow-600">
            <h2 className="text-2xl font-semibold text-yellow-800">Changes to Terms</h2>
            <p className="text-gray-700 mt-2">
              We may update these Terms of Service from time to time. We will notify you of any changes by posting the new terms on our website.
            </p>
          </div>

          {/* Contact Us */}
          <div className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-red-600">
            <h2 className="text-2xl font-semibold text-red-800">Contact Us</h2>
            <p className="text-gray-700 mt-2">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <span className="font-semibold text-red-600">sanchitapriyadarshinee@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
