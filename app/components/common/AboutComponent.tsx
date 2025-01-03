import React from "react";
import Heading from "./Heading";

const AboutComponent: React.FC = () => {
  return (
    <>
      <Heading heading="About Us" color="bg-green-200" />

      <section className="py-14 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="mehaa about us.jpg"
              alt="about Us image"
            />

            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              At <b>Mehaa-Finserv</b>, we are dedicated to providing comprehensive financial solutions to individuals and businesses. Our core offerings include Home Loans, Vehicle Loans, Business Loans, Mortgage Loans, Machinery Loans, Personal Loans, and Education Loans. With a team of experienced financial experts, we are committed to delivering customized loan solutions that cater to the diverse needs of our clients. Whether you are seeking to purchase a home, finance your business, or invest in education, Mehaa-Finserv ensures that you receive competitive rates, flexible terms, and the highest level of service throughout the loan process. Our goal is to empower you with the financial resources you need to achieve your aspirations, backed by our unwavering commitment to excellence and customer satisfaction.
              </p>

              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
               With Mehaa-Finserv, you gain a dedicated team committed to driving your financial success.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="mb-20 px-10">
        <div className="mt-20">
          <h1 className="font-medium font-poppins lg:text-2xl text-xl mt-5"></h1>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
