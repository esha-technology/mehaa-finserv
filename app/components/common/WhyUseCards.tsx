import React from "react";

interface WhyUseCardProps {
  icon: React.ReactNode;
  title: string;
  details: string;
  color: string;
}

const WhyUseCard: React.FC<WhyUseCardProps> = ({ icon, title, details, color }) => {
  return (
    <div className="w-80 px-4 hover:scale-110 duration-200 md:mx-0 mx-auto">
      <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 shadow-lg md:px-7 xl:px-10 h-[350px]">
        <div
          className={`mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl ${color} text-slate-800`}
        >
          {icon}
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-dark">{title}</h4>
        <p className="text-body-color dark:text-dark-6">{details}</p>
      </div>
    </div>
  );
};

export default WhyUseCard;
