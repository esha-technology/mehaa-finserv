import React, { useState, ChangeEvent, FormEvent } from 'react';
import './contactus.css'; // Custom CSS file for any specific styles not handled by Tailwind
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

// Type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
  number: string;
  country: string;
  city: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    number: '',
    country: '',
    city: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    message: '',
    number: '',
    country: '',
    city: '',
  });

  // Handle input change with validation
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  };

  // Handle phone number change for PhoneInput
  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prevState) => ({
      ...prevState,
      number: value || '', // Ensure number is either a string or empty string
    }));
    validateField('number', value || ''); // Ensure empty value validation
  };

  // Validate individual field in real-time
  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'name') {
      if (!value) {
        error = 'Name is required.';
      }
    } else if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!value) {
        error = 'Email is required.';
      } else if (!emailRegex.test(value)) {
        error = 'Please enter a valid email.';
      }
    } else if (name === 'message') {
      if (!value) {
        error = 'Message is required.';
      }
    } else if (name === 'number') {
      if (!value) {
        error = 'Number is required.';
      }
    } else if (name === 'country' || name === 'city') {
      if (!value) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Handle form submission
 const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const isValid = validateForm();
  const hasEmptyFields = Object.values(formData).some((field) => field === '');

  if (isValid && !hasEmptyFields) {
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwStM7ytIGH6BUkTYScRdI1psOruc-28C7tr4WieISD0jgDM91kfhH-KAEsfqU90sf9/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setFormData({
          name: '',
          email: '',
          message: '',
          number: '',
          country: '',
          city: '',
        });
        setErrors({
          name: '',
          email: '',
          message: '',
          number: '',
          country: '',
          city: '',
        });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again later.");
    }
  } else {
    alert("Please fill out all fields correctly.");
  }
};


  // Validate all form fields before submission
  const validateForm = (): boolean => {
    
    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof FormData];
      validateField(field, value);
    });
    const hasErrors = Object.values(errors).some((error) => error !== '');
    return !hasErrors;
  };

return (
    <div className="contact-us-container flex flex-col md:flex-row gap-2 p-4">
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
            <a href="mailto:eshatechnologyprvtltd@gmail.com" className="contact-link text-lg text-green-600">
              eshatechnologyprvtltd@gmail.com
            </a>
          </p>

          <h4 className="contact-heading text-2xl font-bold mt-8 py-3">Mobile</h4>
          <p className="flex items-center">
            <FaPhone className="contact-icon text-xl mr-2" />
            <a href="tel:+918523811173" className="contact-link text-lg text-green-600">
              +91 8523811173
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="social-media-section mt-6 py-4">
          <h3 className="social-media-heading text-2xl font-bold">Follow Us</h3>
          <ul className="social-media flex gap-6 mt-4">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-media-link">
                <FaFacebook className="social-icon text-2xl text-black hover:text-blue-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-media-link">
                <FaInstagram className="social-icon text-2xl text-black hover:text-pink-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
            <li>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-media-link">
                <FaWhatsapp className="social-icon text-2xl text-black hover:text-green-500 hover:scale-110 transform transition-all duration-300" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Form Content */}
      <div className="contact-form-container flex-1 md:w-2/3 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-center text-3xl font-semibold text-green-700 mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="form-group">
            <label htmlFor="name" className="text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your name"
            />
            {errors.name && <span className="error text-red-500">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="number" className="text-lg">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.number}
              onChange={handlePhoneChange}
              className="phone-input w-full"
              placeholder="Enter your phone number"
            />
            {errors.number && <span className="error text-red-500">{errors.number}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Enter your email"
            />
            {errors.email && <span className="error text-red-500">{errors.email}</span>}
          </div>

          <div className="form-group flex gap-4">
            <div className="location-country flex-1">
              <label htmlFor="country" className="text-lg">Country</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your country"
              />
              {errors.country && <span className="error text-red-500">{errors.country}</span>}
            </div>
            <div className="location-city flex-1">
              <label htmlFor="city" className="text-lg">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input-field"
                placeholder="Enter your city"
              />
              {errors.city && <span className="error text-red-500">{errors.city}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message" className="text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field"
              placeholder="Write your message"
            />
            {errors.message && <span className="error text-red-500">{errors.message}</span>}
          </div>

          <button type="submit" className="w-full p-3 bg-green-600 text-white rounded-md transition-all duration-300 hover:bg-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
