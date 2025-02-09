import React from "react";
import { FaCode, FaChartLine, FaUserFriends, FaLightbulb } from "react-icons/fa";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-cyan-800 text-white text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to Code Metrics</h1>
        <p className="text-xl mt-4">
          Unlock your full potential with personalized insights and real-time performance tracking.
        </p>
        <a
          href="/dashboard"
          className="mt-6 text-black inline-block px-8 py-3 bg-blue-100 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-200 transition duration-300"
        >
          Get Started
        </a>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 bg-white">
        <h2 className="text-4xl font-bold text-center mb-6">Why Choose Code Metrics?</h2>
        <p className="text-lg text-center mb-12">
          Code Metrics empowers developers to enhance their coding journey through actionable analytics,
          personalized recommendations, and predictive insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-sky-100 text-center py-8 px-4 rounded-lg shadow-lg">
            <FaChartLine size={40} className="text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Performance Analytics</h3>
            <p className="text-gray-600 mt-2">
              Track your coding activity across platforms like LeetCode, CodeForces, and CodeChef
              with detailed visualizations.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-emerald-100 text-center py-8 px-4 rounded-lg shadow-lg">
            <FaUserFriends size={40} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Community Leaderboard</h3>
            <p className="text-gray-600 mt-2">
              Compare your progress with peers and stay motivated with real-time leaderboards.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-amber-100 text-center py-8 px-4 rounded-lg shadow-lg">
            <FaLightbulb size={40} className="text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold">Personalized Recommendations</h3>
            <p className="text-gray-600 mt-2">
              Get tailored insights and resources to improve your problem-solving and coding skills.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 px-4 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-6">How It Works</h2>
        <p className="text-lg text-center mb-12">
          Code Metrics integrates with top coding platforms and utilizes advanced machine learning
          techniques to deliver accurate and meaningful insights.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-slate-50 text-center py-8 px-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 1: Connect Your Profiles</h3>
            <p className="text-gray-600 mt-2">
              Link your accounts from LeetCode, CodeForces, HackerRank, and more to start tracking your progress.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-slate-50 text-center py-8 px-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 2: View Detailed Insights</h3>
            <p className="text-gray-600 mt-2">
              Access comprehensive analytics, streak trackers, and predictions to monitor your growth.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-slate-50 text-center py-8 px-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Step 3: Improve with Recommendations</h3>
            <p className="text-gray-600 mt-2">
              Leverage personalized learning paths and tips to enhance your coding performance.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 px-4 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold">Ready to Elevate Your Coding Skills?</h2>
        <p className="text-lg mt-4">
          Join thousands of developers who are already using Code Metrics to take their programming
          journey to the next level.
        </p>
        <a
          href="/signup"
          className=" text-white mt-6 inline-block px-8 py-3 bg-cyan-700 text-lg font-semibold rounded-lg shadow-md hover:bg-cyan-800 transition duration-300"
        >
          Sign Up Now
        </a>
      </div>

      {/* Contact Section */}
      <div className="py-16 px-4 bg-gray-200 text-center">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg mb-8">
          Have any questions? We're here to help. Reach out to us and we'll get back to you as soon as possible.
        </p>
        <form action="#" method="POST" className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-cyan-800 text-white py-12">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-4">&copy; 2025 Code Metrics. All Rights Reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
