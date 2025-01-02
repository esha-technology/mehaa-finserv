"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LoanApplicationForm from "@/app/components/LoanForm";
import NavBar from "@/app/components/common/Navbar";

const HomeLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <NavBar />

      {/* Hero Section */}
      <header className="bg-green-500 text-white">
        <motion.div
          className="container mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold mb-4">Home Loan Services</h1>
          <p className="text-lg">
            Unlock your dream home with Mehaserv&#39;s easy and flexible home loan plans.
          </p>
        </motion.div>
      </header>

      {/* Content Section */}
      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Why Choose Mehaserv Home Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Low interest rates starting at just 6.5% per annum.</li>
              <li>Flexible repayment options tailored to your needs.</li>
              <li>Quick and hassle-free loan approval process.</li>
              <li>Access to expert financial advisors for personalized support.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we understand the importance of owning a home. Our team is dedicated to providing
              financial solutions that help you achieve your dreams.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/home-loan.jpg"
              alt="Home Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-bold text-center text-green-500 mb-8">Our Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-green-500 mb-2">Affordable Rates</h4>
              <p className="text-gray-600">Enjoy competitive rates designed to fit your budget.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-green-500 mb-2">Flexible Tenures</h4>
              <p className="text-gray-600">Repay on your terms with options ranging up to 20 years.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h4 className="text-xl font-semibold text-green-500 mb-2">Fast Processing</h4>
              <p className="text-gray-600">Get approvals in as little as 48 hours.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-bold text-center text-green-500 mb-8">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="italic text-gray-600 mb-4">
                “Mehaserv made buying my first home so easy. Their rates and customer service were top-notch!”
              </p>
              <h4 className="text-right text-gray-700 font-semibold">- John Doe</h4>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <p className="italic text-gray-600 mb-4">
                “I couldn’t believe how fast and smooth the process was. Highly recommend!”
              </p>
              <h4 className="text-right text-gray-700 font-semibold">- Jane Smith</h4>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="mt-16">
          <h3 className="text-3xl font-bold text-center text-green-500 mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-semibold text-green-500">What documents do I need to apply?</h4>
              <p className="text-gray-600">You will need ID proof, address proof, income documents, and property details.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h4 className="font-semibold text-green-500">How long does the approval take?</h4>
              <p className="text-gray-600">Approvals typically take 48-72 hours.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <motion.section
        className="bg-green-500 text-white py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Get Started?</h3>
          <p className="mb-6">Apply now and take the first step toward your dream home with Mehaserv.</p>
          <button
            onClick={handleApplyNowClick}
            className="bg-white text-green-500 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition-all"
          >
            Apply Now
          </button>
        </div>
      </motion.section>

      {/* Render LoanForm if Apply Now button is clicked */}
      {showForm && <LoanApplicationForm />}
    </div>
  );
};

export default HomeLoan;
