"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LoanApplicationForm from '@/app/components/LoanForm';
import NavBar from '@/app/components/common/Navbar';

const MachineryLoan = () => {
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
          <h1 className="text-4xl font-bold mb-4">Machinery Loan Services</h1>
          <p className="text-lg">Grow your business with Mehaserv’s tailored machinery loans.</p>
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
            <h2 className="text-3xl font-semibold mb-4 text-green-500">Why Choose Mehaserv Machinery Loans?</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Competitive interest rates for machinery purchases.</li>
              <li>Flexible repayment options for businesses.</li>
              <li>Quick approvals to keep your business running smoothly.</li>
              <li>Financing for new and used machinery.</li>
            </ul>
            <p className="mt-6 text-gray-600">
              At Mehaserv, we understand the importance of the right tools. Let us help you equip your business for success.
            </p>
          </motion.div>

          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/machinery-loan.jpg"
              alt="Machinery Loan Services"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Benefits Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">Benefits of Mehaserv Machinery Loans</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Low Interest Rates</h4>
              <p className="text-gray-600 mt-2">Affordable financing for your machinery needs.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Fast Approvals</h4>
              <p className="text-gray-600 mt-2">Get your loan approved in no time.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h4 className="text-lg font-bold text-green-500">Flexible Terms</h4>
              <p className="text-gray-600 mt-2">Customized repayment plans for your business.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-semibold text-green-500 mb-6">What Our Clients Say</h3>
          <div className="space-y-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;Mehaserv helped us acquire the machinery we needed to expand our business!&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Arjun, Factory Owner</span>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">&quot;The loan process was quick and hassle-free. Highly recommend!&quot;</p>
              <span className="text-green-500 font-bold mt-2">- Priya, Small Business Owner</span>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Upgrade Your Business?</h3>
          <p className="mb-6">Apply now and let Mehaserv power your growth with our machinery loans.</p>
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

export default MachineryLoan;
