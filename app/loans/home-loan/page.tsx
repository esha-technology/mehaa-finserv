"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LoanApplicationForm from "@/app/components/LoanForm";
import NavBar from "@/app/components/common/Navbar";
import Whyus from "@/app/components/Whyus";
import Footer from "@/app/components/common/Footer";
import { TbExternalLink } from "react-icons/tb";
import { GiHouse, GiGears, GiReceiveMoney } from "react-icons/gi";


const HomeLoan = () => {
  const [showForm, setShowForm] = useState(false);

  const handleApplyNowClick = () => {
    setShowForm(true);
  };

  const closePopup = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NavBar */}
      <NavBar />

      {/* Hero Section */}
      <header className="text-black">
        <motion.div
          className="container mx-auto px-6 py-16 text-center flex gap-2 justify-center items-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GiHouse size={70} className="bg-orange-100 p-3 rounded-xl" /> 
          <h1 className="text-5xl font-bold">Home Loan Services</h1>
         
        </motion.div>
      </header>

      {/* Content Section */}
     <main className="container mx-auto px-6 py-10 shadow-lg rounded-lg bg-white">
  <h2 className="text-3xl font-semibold text-center mt-4">
    Why Choose <span className="text-green-700">MehaaFinserv</span> Home Loans?
  </h2>
  
  {/* Content Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border border-gray-300 rounded-lg p-8 shadow-lg mt-8">
    {/* Text Content */}
    <motion.div
      className="order-2 lg:order-1"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <ul className="list-disc pl-5 space-y-4 text-gray-700">
        <li>Low interest rates starting at just 6.5% per annum.</li>
        <li>Flexible repayment options tailored to your needs.</li>
        <li>Quick and hassle-free loan approval process.</li>
        <li>Access to expert financial advisors for personalized support.</li>
      </ul>
      <p className="mt-6 text-gray-600">
        At MehaaFinserv, we understand the importance of owning a home. Our team is dedicated to providing
        financial solutions that help you achieve your dreams.
      </p>
    </motion.div>

    {/* Image */}
    <motion.div
      className="order-1 lg:order-2 flex justify-end"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src="/images/home loan.jpg"
        alt="Home Loan Services"
        width={500}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </motion.div>
  </div>

  {/* Apply Now Button */}
  <div className="flex justify-center mt-12">
    <button
      onClick={handleApplyNowClick}
      className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-all"
    >
      Apply Now
    </button>
  </div>

  {/* Benefits Section */}
  <section className="mt-16">
    <Whyus />
  </section>
</main>

      

      {/* Footer */}
      <Footer />

      {/* Loan Application Form Popup */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-6 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>
            <LoanApplicationForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeLoan;
