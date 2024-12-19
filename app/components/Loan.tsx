import React, { createContext, useRef, useEffect} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ReactNode } from "react";
import WhyUseCard from "./common/WhyUseCards";
import { FaRegStar, FaChartLine, FaHandsHelping } from "react-icons/fa";
import Heading from "./common/Heading";
import { GiHouse } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa6";
import { GiGears } from "react-icons/gi";
import { BsMortarboardFill } from "react-icons/bs";
import { HiOutlineDocumentCurrencyRupee } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Link from "next/link";

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
    icon: <FaCar  size={36} />,
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
    icon: <GiReceiveMoney size={36} />,
  },
  {
    title: "Educational Loan",
    details:
      "Pursue your academic aspirations with confidence, backed by our flexible and competitive educational loans.",
    icon: <BsMortarboardFill size={36} />,
  },
];

const Loan: React.FC = () => {
  const targetSectionRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (location.hash === "#ourServices" && targetSectionRef.current) {
        targetSectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [location]);
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
    < div
    className="py-16 md:mt-5 lg:mt-16"
    ref={targetSectionRef}
    id="ourServices">
      <Heading heading="Our Loans" color="bg-indigo-100" />
      <div className="flex flex-wrap justify-center gap-4 pt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-80 px-4 hover:scale-105 duration-300 mx-auto ${
              index >= 4 ? "mt-2" : "" // Add smaller margin for second row only
            }`}
          >
            <div className="mb-6 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-[350px]">
              <div
                className={`mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl text-slate-800 ${
                  colors[index % colors.length]
                }`}
              >
                {service.icon}
              </div>
              <h4 className="mb-4 text-xl font-semibold text-dark">
                {service.title}
              </h4>
              <p className="text-body-color dark:text-dark-6">
                {service.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loan;
