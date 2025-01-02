"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LoanApplicationForm from '@/app/components/LoanForm';
import NavBar from '@/app/components/common/Navbar';

const MortgageLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <NavBar />
      <header className="bg-blue-500 text-white">
        <motion.div
          className="container mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-4">Mortgage Loan Services</h1>
          <p className="text-lg">Turn your dream home into reality with Mehaserv’s flexible mortgage plans.</p>
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
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">Why Choose Mehaserv Mortgage Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Competitive interest rates tailored to your needs.</li>
              <li>Flexible repayment options for long-term affordability.</li>
              <li>Streamlined application process with quick approvals.</li>
              <li>Expert guidance for first-time home buyers.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we are committed to making home ownership accessible and stress-free for everyone.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/mortgage-loan.jpg"
              alt="Mortgage Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">Benefits of Mehaserv Mortgage Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">Low Interest Rates</h4>
              <p className="text-gray-600 mt-2">Affordable rates to fit your budget.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">High Loan Amounts</h4>
              <p className="text-gray-600 mt-2">Finance up to 80% of your property value.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">Expert Support</h4>
              <p className="text-gray-600 mt-2">Dedicated team to assist throughout the process.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">What Our Clients Say</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Mehaserv made buying my first home so easy. Highly recommend their services!&quot;</p>
              <span className="text-blue-500 font-bold mt-2">- Ramesh, Homeowner</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;The process was quick and hassle-free. Great experience overall.&quot;</p>
              <span className="text-blue-500 font-bold mt-2">- Anjali, Homeowner</span>
            </div>
          </div>
        </section>
      </main>

      {/* Call to Action */}
      <motion.section
        className="bg-blue-500 text-white py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Own Your Dream Home?</h3>
          <p className="mb-6">Apply now and take the first step towards homeownership with Mehaserv.</p>
          <button
            onClick={handleApplyNowClick}
            className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition-all"
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

export default MortgageLoan;
