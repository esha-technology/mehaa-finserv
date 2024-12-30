import React, { ReactNode } from "react";
import { TbExternalLink } from "react-icons/tb";
import { motion } from "framer-motion";
import Heading from "./common/Heading";
import Link from "next/link";
import { GiHouse, GiGears, GiReceiveMoney } from "react-icons/gi";
import {  FaUserTie, FaCar } from "react-icons/fa6";
import { BsMortarboardFill } from "react-icons/bs";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";

const Loan: React.FC = () => {
  const colors = [
    "bg-orange-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-teal-100",
    "bg-red-100",
  ];

  interface Service {
    title: string;
    details: string;
    icon: ReactNode;
    color: string;
    slug: string; // Add a slug for each loan type to use in the URL
  }

  const services: Service[] = [
    {
      title: "Home Loan",
      details:
        "Own your dream home with our easy home loans. Affordable rates and flexible terms to suit your needs.",
      icon: <GiHouse size={42} />,
      color: colors[0],
      slug: "home-loan", // Add slug
    },
    {
      title: "Vehicle Loan",
      details:
        "Drive your dream with our easy vehicle loans. Enjoy competitive rates and flexible repayment options.",
      icon: <FaCar size={36} />,
      color: colors[1],
      slug: "vehicle-loan", // Add slug
    },
    {
      title: "Business Loan",
      details:
        "Fuel your business growth with our flexible business loans. Competitive rates and easy repayment options to support your success.",
      icon: <FaUserTie size={36} />,
      color: colors[2],
      slug: "business-loan", // Add slug
    },
    {
      title: "Mortgage Loan",
      details:
        "Our strategies help your business scale up with a focus on sustainable growth and profitability.",
      icon: <HiOutlineDocumentCurrencyRupee size={36} />,
      color: colors[3],
      slug: "mortgage-loan", // Add slug
    },
    {
      title: "Machinery Loan",
      details:
        "Boost your business productivity with our affordable machinery loans, designed for your needs.",
      icon: <GiGears size={36} />,
      color: colors[4],
      slug: "machinery-loan", // Add slug
    },
    {
      title: "Personal Loan",
      details:
        "Access funds easily with our personal loans, offering fast approval and flexible repayment options.",
      icon: <GiReceiveMoney size={36} />,
      color: colors[5],
      slug: "personal-loan", // Add slug
    },
    {
      title: "Educational Loan",
      details:
        "Pursue your academic aspirations with confidence, backed by our flexible and competitive educational loans.",
      icon: <BsMortarboardFill size={36} />,
      color: colors[6],
      slug: "educational-loan", // Add slug
    },
  ];

  return (
    <div className="scroll-py-14 md:mt-5 lg:mt-16">
      <Heading heading="Our Loans" color="bg-sky-200" />
      <div className="container mx-auto px-5">
        <div className="flex flex-wrap justify-center gap-6 mt-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "linear", delay: 0.1 }}
              id="hoverAnimation"
              className="border w-full md:w-[21%] lg:w-[20%] px-5 py-10 rounded-3xl mx-5 mb-10 flex flex-col items-center text-center shadow-lg"
            >
              <Link href={`/loans/${service.slug}`}> {/* Use the dynamic link here */}
                <div className="flex flex-col justify-center items-center">
                  <div className={`p-7 rounded-md mb-6 ${service.color}`}>
                    {service.icon}
                  </div>
                  <h2 className="font-bold text-xl sm:text-2xl mb-4 mt-2">
                    {service.title}
                  </h2>
                  <p className="text-base sm:text-lg mb-4">{service.details}</p>
                  <Link
                    href="/loans" 
                    className="text-sky-600 font-medium hover:underline flex gap-1"
                  >
                    Read More <TbExternalLink className="mt-1" />
                  </Link>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>|
    </div>
  );
};

export default Loan;
