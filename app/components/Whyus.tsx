import React from "react";
import { IoShieldCheckmark, IoTime, IoPeople, IoEye, IoSettings, IoHelpCircle } from "react-icons/io5";

const Whyus: React.FC = () => {
  const cards = [
    {
      icon: <IoShieldCheckmark size={40} className="text-white" />,
      title: "Trusted Loan Partner",
      description: "Your reliable financial ally with years of experience.",
      gradient: "bg-gradient-to-r from-red-400 to-red-500",
    },
    {
      icon: <IoTime size={40} className="text-white" />,
      title: "Quick Loan Approval",
      description: "Fast processing and hassle-free experience for your convenience.",
      gradient: "bg-gradient-to-r from-yellow-400 to-orange-400",
    },
    {
      icon: <IoEye size={40} className="text-white" />,
      title: "Transparent Loan Terms",
      description: "No hidden fees or surprises—clear and upfront policies.",
      gradient: "bg-gradient-to-r from-green-500 to-green-300",
    },
    {
      icon: <IoSettings size={40} className="text-white" />,
      title: "Personalized Loan Offers",
      description: "Tailored solutions that fit your unique financial needs.",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-300",
    },
    {
      icon: <IoPeople size={40} className="text-white" />,
      title: "Flexible Repayment Options",
      description: "Choose a repayment plan that aligns with your budget and timeline.",
      gradient: "bg-gradient-to-r from-purple-500 to-purple-300",
    },
    {
      icon: <IoHelpCircle size={40} className="text-white" />,
      title: "Expert Financial Guidance",
      description: "Our dedicated team is here to guide you every step of the way.",
      gradient: "bg-gradient-to-r from-cyan-500 to-cyan-300",
    },
  ];

  return (
    <div className="text-center py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Why Us</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-20">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6  shadow-md md:w-[21%] lg:w-[20%] px-5 py-10 rounded-3xl mx-5 mb-10 flex flex-col items-center text-center  hover:shadow-xl hover:translate-y-[-5px] transition-all duration-300 "
          >
            <div
              className={`flex justify-center items-center w-16 h-16 mx-auto rounded-full ${card.gradient} mb-6`}
            >
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;
