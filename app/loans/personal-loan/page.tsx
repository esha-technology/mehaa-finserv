"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LoanApplicationForm from '@/app/components/LoanForm';
import NavBar from '@/app/components/common/Navbar';

const PersonalLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <NavBar />
      <header className="bg-green-500 text-white">
        <motion.div
          className="container mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Personal Loan Services</h1>
          <p className="text-lg">Achieve your dreams with Mehaserv’s flexible personal loans.</p>
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
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Why Choose Mehaserv Personal Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Low-interest rates tailored to your needs.</li>
              <li>Flexible repayment plans to suit your budget.</li>
              <li>Quick disbursal for your urgent financial needs.</li>
              <li>Minimal documentation for a hassle-free process.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we prioritize your aspirations. Let us help you achieve your goals with ease.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/personal-loan.jpg"
              alt="Personal Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">Benefits of Mehaserv Personal Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Affordable Rates</h4>
              <p className="text-gray-600 mt-2">Enjoy low-interest rates on your personal loan.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Quick Processing</h4>
              <p className="text-gray-600 mt-2">Get your loan approved and disbursed in no time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Customizable Terms</h4>
              <p className="text-gray-600 mt-2">Choose repayment options that fit your lifestyle.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">What Our Clients Say</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Mehaserv made it possible for me to renovate my home effortlessly.&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Ramesh, IT Professional</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;The entire process was seamless and quick. Thank you!&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Sneha, Freelancer</span>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Fulfill Your Dreams?</h3>
          <p className="mb-6">Apply now and take the first step towards achieving your goals with Mehaserv Personal Loans.</p>
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

export default PersonalLoan;
