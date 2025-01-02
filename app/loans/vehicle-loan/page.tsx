"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LoanApplicationForm from '@/app/components/LoanForm';
import NavBar from '@/app/components/common/Navbar';

const VehicleLoan = () => {
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
          <h1 className="text-4xl font-bold mb-4">Vehicle Loan Services</h1>
          <p className="text-lg">Drive your dreams with Mehaserv’s flexible vehicle loan plans.</p>
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
            <h2 className="text-3xl font-semibold mb-4 text-blue-500">Why Choose Mehaserv Vehicle Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Low interest rates for both new and used vehicles.</li>
              <li>Flexible repayment terms to suit your budget.</li>
              <li>Quick approvals and minimal documentation.</li>
              <li>Special offers on electric and hybrid vehicles.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we believe everyone deserves the joy of owning a vehicle. Let us help you hit the road with ease.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/vehicle-loan.jpg"
              alt="Vehicle Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">Benefits of Mehaserv Vehicle Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">Affordable EMIs</h4>
              <p className="text-gray-600 mt-2">Enjoy pocket-friendly monthly installments.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">Wide Coverage</h4>
              <p className="text-gray-600 mt-2">Loans available for cars, bikes, and commercial vehicles.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-blue-500">Hassle-Free Processing</h4>
              <p className="text-gray-600 mt-2">Minimal paperwork for a seamless experience.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-blue-500 mb-6">What Our Clients Say</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Thanks to Mehaserv, I now own my dream car. The process was smooth and quick!&quot;</p>
              <span className="text-blue-500 font-bold mt-2">- Priya, Car Owner</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Their support team was exceptional. I highly recommend their vehicle loan services.&quot;</p>
              <span className="text-blue-500 font-bold mt-2">- Amit, Bike Owner</span>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Hit the Road?</h3>
          <p className="mb-6">Apply now and make your dream vehicle a reality with Mehaserv.</p>
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

export default VehicleLoan;