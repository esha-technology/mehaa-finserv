import React, { useRef, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);
  
  const scriptURL = "https://script.google.com/macros/s/AKfycbyG7qxFarG5YYpgSjRl5EdUeZW-bmU86r4V_F93qH3RvMd2WoaZ4I92-Z8N919D-G8GUA/exec";

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
      // Create a hidden input for the phone number
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
        toast.success("Thank you! Your data has been submitted successfully. Our Team will contact you soon!!");
        formRef.current?.reset(); // Optional: reset the form
        setPhoneNumber(''); // Clear phone number state
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
    <div id="contact-us" className="contact-us-container flex flex-col md:flex-row gap-2 p-4">
      {/* Left Content Container */}
      <div className="left-content flex-1 md:w-1/3 bg-white p-4 rounded-lg text-gray-800">
        <h1 className="left-content-title text-3xl font-bold mb-4">Let&#39;s Talk</h1>
        <p className="left-content-description text-lg opacity-70">
          &quot;Have a major business idea or brand that needs development? Reach out to us— we&#39;re eager to learn about your project and offer strategic support to help drive its growth and success.&quot;
        </p>

        <div className="contact-details mt-8 py-4">
          <h4 className="contact-heading text-2xl font-bold mt-8 py-3">Email</h4>
          <p className="flex items-center">
            <FaEnvelope className="contact-icon text-xl mr-2" />
            <a href="mailto:mehaafinserv@gmail.com" className="contact-link text-lg text-green-600">
              mehaafinserv@gmail.com
            </a>
          </p>

          <h4 className="contact-heading text-2xl font-bold mt-8 py-3">Mobile</h4>
          <p className="flex items-center">
            <FaPhone className="contact-icon text-xl mr-2" />
            <a href="tel:+919848197223" className="contact-link text-lg text-green-600">
              +91 9848197223
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="social-media-section mt-6 py-4">
          <h3 className="social-media-heading text-2xl font-bold">Follow Us</h3>
          <ul className="social-media flex gap-6 mt-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-media-link">
                <FaFacebook className="social-icon text-3xl text-blue-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-media-link">
                <FaInstagram className="social-icon text-3xl text-pink-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
            <li>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-media-link">
                <FaWhatsapp className="social-icon text-3xl text-green-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Form Content */}
      <div className="contact-form-container max-w-3xl mx-auto md:w-2/3 bg-white p-8 rounded-xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
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
          Contact Us
        </span>
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Enter your name"
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

        <div className="form-group">
          <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="country" className="block text-gray-700 text-lg font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Enter your country"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="city" className="block text-gray-700 text-lg font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none"
              placeholder="Enter your city"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-gray-700 text-lg font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
            placeholder="Write your message"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 bg-green-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;