import emailjs from 'emailjs-com';
import React, { useState } from "react";
import { FaChartLine, FaLightbulb, FaUserFriends } from "react-icons/fa";
import { toast } from 'react-toastify';

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        setFeedback("Message sent successfully!");
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        setFeedback("Failed to send message. Please try again.");
        toast.error("Failed to send message. Please try again.");
      });
    setFeedback("Message sent successfully!");
  };

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
          Code Metrics empowers developers to enhance their coding journey through actionable analytics, personalized recommendations, and predictive insights. With real-time performance tracking and in-depth progress analysis, our platform helps you identify strengths, overcome challenges, and optimize your problem-solving approach. Whether you're preparing for competitive programming, technical interviews, or personal growth, Code Metrics provides the tools and guidance you need to excel.
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
          Code Metrics integrates with top coding platforms and utilizes advanced machine learning techniques to deliver accurate and meaningful insights. By analyzing your coding patterns, performance trends, and problem-solving approaches, it provides personalized feedback to help you improve efficiently. Whether you're tracking competitive programming progress or refining your coding skills, Code Metrics ensures data-driven growth with smart recommendations and real-time analytics.
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
      <div className="py-20 px-4 bg-blue-100 text-center">
        <h2 className="text-4xl font-bold">Ready to Elevate Your Coding Skills?</h2>
        <p className="text-lg mt-4">
          Join the Code Metrics community and take your programming journey to the next level. Whether you're just starting out or striving to enhance your problem-solving skills, our platform provides valuable insights, analytics, and recommendations tailored to help you grow. Track your progress, refine your coding abilities, and stay motivated with real-time performance metrics. Be among the first to experience a smarter way to improve your coding efficiency and achieve your goals!
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
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div id="form-feedback" className="mt-4">{feedback}</div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="mb-4 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="w-full px-8 py-3 bg-cyan-700 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800  text-white py-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-6">
            <a href="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          </div>
          <p className="text-lg mb-4">&copy; 2025 Code Metrics. All Rights Reserved.</p>
        </div>
        
      </footer>
    </div>
  );
};

export default Home;
