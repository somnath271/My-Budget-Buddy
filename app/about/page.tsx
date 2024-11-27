"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on page load
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#1A2A38] text-gray-100 p-8 flex flex-col items-center">
      {/* Page Title */}
      <h1
        className={`text-4xl font-bold mb-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        About Us
      </h1>

      {/* Introduction Section */}
      <div
        className={`max-w-3xl p-6 bg-[#2F4A62] rounded-lg shadow-lg mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Welcome to our platform, where we redefine personal assistance by
          seamlessly integrating financial tracking and note-taking solutions.
          Our application is designed to simplify and streamline your daily
          tasks, helping you keep track of your expenses and organize your
          thoughts all in one place. Built with a commitment to user privacy and
          convenience, our platform provides a smooth, secure, and efficient
          experience.
        </p>
      </div>

      {/* Mission Section */}
      <div
        className={`max-w-3xl p-6 bg-[#2F4A62] rounded-lg shadow-lg mb-8 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed text-gray-200">
          Our mission is to empower users with tools that foster better
          management of personal finances and enhance productivity. Whether it's
          tracking what you owe and are owed, organizing notes, or managing
          expenses in a group, we aim to create a user-friendly space that makes
          complex tasks feel simple. With features like expense splitting,
          budget management, and real-time updates, we aim to be your trusted
          partner in achieving personal and financial well-being.
        </p>
      </div>

      {/* Values Section */}
      <div
        className={`max-w-3xl p-6 bg-[#2F4A62] rounded-lg shadow-lg mb-8 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
          <li>Transparency: Clear and straightforward communication.</li>
          <li>Innovation: Continuously improving and evolving our features.</li>
          <li>Security: Protecting your data with top-notch security measures.</li>
          <li>Empowerment: Providing tools that give you control over your finances.</li>
        </ul>
      </div>

      {/* Features Section */}
      <div
        className={`max-w-3xl p-6 bg-[#2F4A62] rounded-lg shadow-lg mb-8 transition-all duration-1000 delay-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Our Key Features</h2>
        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
          <li>Expense Tracking: Keep a record of every transaction, split, and balance.</li>
          <li>Note-Taking: Capture your ideas, to-dos, and reminders instantly.</li>
          <li>Real-Time Updates: See updates as they happen, keeping you always informed.</li>
          <li>Secure Access: Login and access your data with complete peace of mind.</li>
        </ul>
      </div>

      {/* Footer with Contact Information */}
      <div
        className={`max-w-3xl p-6 bg-[#2F4A62] rounded-lg shadow-lg transition-all duration-1000 delay-1100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-200">
          We’re here to help you make the most of our platform. For questions,
          feedback, or support, please reach out to us.
        </p>
        <div className="mt-4 text-gray-400">
          <p>Email: support@ourplatform.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
}
