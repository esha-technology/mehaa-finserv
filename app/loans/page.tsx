import React,{createContext} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ReactNode } from 'react';

import WhyUseCard from "../components/WhyUseCards";
import { FaRegStar, FaChartLine, FaHandsHelping } from "react-icons/fa";
// import { AiOutlineSolution } from "react-icons/ai";
// import { MdOutlineEventAvailable } from "react-icons/md";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { BsShop } from "react-icons/bs";
// import { MdOutlineDesignServices } from "react-icons/md";
// import { CiBank } from "react-icons/ci";
import { GiHouse } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa6";
import { IoIosPerson } from "react-icons/io";
import { GiGears } from "react-icons/gi";
import { BsMortarboardFill } from "react-icons/bs";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";

interface Service {
  title: string;
  details: string;
  icon: ReactNode;
}
const services: Service[] = [
  {
    title: "Home Loan",
    details:
      "Own your dream home with our easy home loans. Affordable rates and flexible terms to suit your needs.",
    icon: <GiHouse size={36} />,
  },
  {
    title: "vehicle Loan",
    details:
      "Drive your dream with our easy vehicle loans. Enjoy competitive rates and flexible repayment options.",
    icon: <FaMotorcycle size={36} />,
  },
  {
    title: "Bussiness Loan",
    details:
      "Fuel your business growth with our flexible business loans. Competitive rates and easy repayment options to support your success.",
    icon: <FaUserTie size={36} />,
  },
  {
    title: "Mortagage Loan",
    details:
      "Our strategies help your business scale up with a focus on sustainable growth and profitability.",
    icon: <HiOutlineDocumentCurrencyRupee size={36} />,
  },
  {
    title: "Machinary Loan",
    details:
      "Boost your business productivity with our affordable machinery loans, designed for your needs.",
    icon: <GiGears size={36} />,
  },
  {
    title: "Personal Loan",
    details:
      "Access funds easily with our personal loans, offering fast approval and flexible repayment options.",
    icon: < IoIosPerson size={36} />,
  },
  {
    title: "Educational Loan",
    details:
      "Pursue your academic aspirations with confidence, backed by our flexible and competitive educational loans.",
    icon: <BsMortarboardFill  size={36} />,
  },  
];

const LoansPage: React.FC = () => {
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
  
 
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <div key={index} className="w-full px-4 hover:scale-105 duration-300 mx-auto">
        <div
          className={`mb-9 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[350px]`}
        >
          <div className={`mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-slate-800 ${colors[index % colors.length]}`}>
            {service.icon}
          </div>
          <h4 className="mb-4 text-xl font-semibold text-dark">{service.title}</h4>
          <p className="text-body-color dark:text-dark-6">{service.details}</p>
        </div>
      </div>
    ))}
  </div>
  
  );
};


export default LoansPage;
