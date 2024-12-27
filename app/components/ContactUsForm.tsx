import React, { useState, ChangeEvent, FormEvent } from 'react';
import './contactus.css';
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
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateForm();
    const hasEmptyFields = Object.values(formData).some((field) => field === '');
    if (isValid && !hasEmptyFields) {
      alert('Form submitted successfully');
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
      alert('Please fill out all fields correctly.');
    }
  };

  // Validate all form fields before submission
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof FormData];
      validateField(field, value);
    });
    const hasErrors = Object.values(errors).some((error) => error !== '');
    return !hasErrors;
  };

  return (
    <div className="contact-us-container">
      {/* Left Side Content */}
      <div className="left-content">
        <h1 className="left-content-title">Let's Talk</h1>
        <p className="left-content-description">
          "Have a major business idea or brand that needs development? Reach out to us— we’re eager to learn about your project and offer strategic support to help drive its growth and success."
        </p>

        <div className="contact-details">
          <h4 className="contact-heading">Email</h4>
          <p className="flex">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:eshatechnologyprvtltd@gmail.com" className="contact-link">
              eshatechnologyprvtltd@gmail.com
            </a>
          </p>

          <h4 className="contact-heading">Mobile</h4>
          <p className="flex">
            <FaPhone className="contact-icon" />
            <a href="tel:+918523811173" className="contact-link">
              +91 8523811173
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="social-media-section">
          <h3 className="social-media-heading">Follow Us</h3>
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-media-link">
                <FaFacebook className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-media-link">
                <FaInstagram className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-media-link">
                <FaWhatsapp className="social-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Form Content */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          {/* Phone number section with country code dropdown */}
          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={formData.number}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
              className="phone-input"
            />
            {errors.number && <span className="error">{errors.number}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <div className="location">
              <div className="location-country">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Enter your country"
                />
                {errors.country && <span className="error">{errors.country}</span>}
              </div>
              <div className="location-city">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter your city"
                />
                {errors.city && <span className="error">{errors.city}</span>}
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
