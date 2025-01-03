"use client"
import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoanApplicationForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const scriptURL = "https://script.google.com/macros/s/AKfycbz1DUDzavaGOadlQAwEMQy3PHVDdd4Hpw228rQc7QJFyl8xJWGapljeOii8otEUiVZTNA/exec";

   const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formRef.current) {

      const phoneInput = document.createElement('input');
      phoneInput.type = 'hidden';
      phoneInput.name = 'number';
      phoneInput.value = phoneNumber;
      formRef.current.appendChild(phoneInput); 

       // Create a hidden input for the date
      const dateInput = document.createElement('input');
      dateInput.type = 'hidden';
      dateInput.id = 'date';
      dateInput.name = 'date';
      dateInput.value = getCurrentDate();
      formRef.current.appendChild(dateInput);


      
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(formRef.current)
      })
        .then(() => {
          // Add your form submission logic here
          toast.success("Thank you! Your loan application has been submitted successfully. Our Team will contact you soon!");
          formRef.current?.reset();
          setPhoneNumber('');
        })
      
      .catch((error) => {
              toast.error("Error! Something went wrong. Please try again.");
              console.error("Error!", error.message);
            });
      
            // Clean up the temporary inputs
            formRef.current.removeChild(phoneInput);
            formRef.current.removeChild(dateInput);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <h2 className="text-center text-3xl font-bold text-green-700 mb-8 relative">
        <span className="relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-green-500 after:rounded-full">
          Loan Application
        </span>
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="fullname" className="block text-gray-700 text-lg font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="number" className="block text-gray-700 text-lg font-medium mb-2">
              Phone Number
            </label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={(value) => setPhoneNumber(value || '')}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="state" className="block text-gray-700 text-lg font-medium mb-2">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Enter your state"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="panNumber" className="block text-gray-700 text-lg font-medium mb-2">
              PAN Number
            </label>
            <input
              type="text"
              id="panNumber"
              name="panNumber"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none uppercase"
              placeholder="Enter your PAN number"
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              title="Please enter a valid PAN number (e.g., ABCDE1234F)"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-green-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default LoanApplicationForm;