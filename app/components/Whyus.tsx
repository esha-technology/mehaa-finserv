import React from "react";
import './Why.css';
import { IoShieldCheckmark, IoTime, IoPeople, IoEye, IoSettings, IoHelpCircle } from "react-icons/io5";

const Whyus: React.FC = () => {
  const cards = [
    {
      icon: <IoShieldCheckmark size={40} className="icon" />,
      title: "Trusted Loan Partner",
      description: "Your reliable financial ally with years of experience.",
    },
    {
      icon: <IoTime size={40} className="icon" />,
      title: "Quick Loan Approval",
      description: "Fast processing and hassle-free experience for your convenience.",
    },
    {
      icon: <IoEye size={40} className="icon" />,
      title: "Transparent Loan Terms",
      description: "No hidden fees or surprises—clear and upfront policies.",
    },
    {
      icon: <IoSettings size={40} className="icon" />,
      title: "Personalized Loan Offers",
      description: "Tailored solutions that fit your unique financial needs.",
    },
    {
      icon: <IoPeople size={40} className="icon" />,
      title: "Flexible Repayment Options",
      description: "Choose a repayment plan that aligns with your budget and timeline.",
    },
    {
      icon: <IoHelpCircle size={40} className="icon" />,
      title: "Expert Financial Guidance",
      description: "Our dedicated team is here to guide you every step of the way.",
    },
  ];

  return (
    <div className="why-us-container">
      <h2 className="why-us-heading">Why Us</h2>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whyus;