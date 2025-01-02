"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LoanApplicationForm from '@/app/components/LoanForm';
import NavBar from '@/app/components/common/Navbar';

const BusinessLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <NavBar />
      <header className="bg-green-500 text-white">
        <motion.div
          className="container mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Business Loan Services</h1>
          <p className="text-lg">Empower your business with Mehaserv’s tailored business loan solutions.</p>
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
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Why Choose Mehaserv Business Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Competitive interest rates designed for businesses.</li>
              <li>Customizable repayment schedules to fit your cash flow.</li>
              <li>Fast processing to help you seize opportunities.</li>
              <li>Dedicated financial advisors to guide your growth.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we understand the challenges of running a business. Our business loan solutions are tailored to
              help you achieve your goals and scale new heights.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/business-loan.jpg"
              alt="Business Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">Benefits of Mehaserv Business Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Expand Operations</h4>
              <p className="text-gray-600 mt-2">Invest in infrastructure, technology, or manpower with ease.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Manage Cash Flow</h4>
              <p className="text-gray-600 mt-2">Ensure smooth operations during seasonal fluctuations.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Seize Opportunities</h4>
              <p className="text-gray-600 mt-2">Act on new business prospects without financial constraints.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">What Our Clients Say</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Mehaserv made it so easy to expand our business. Their support was exceptional!&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Sarah, Entrepreneur</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Quick processing and great rates. Highly recommend their business loan services.&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Rajesh, Small Business Owner</span>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Grow Your Business?</h3>
          <p className="mb-6">Apply now and let Mehaserv help you achieve your business ambitions.</p>
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

export default BusinessLoan;
