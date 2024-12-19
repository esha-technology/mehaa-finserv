import React, { useState, ChangeEvent, FormEvent } from 'react';
import './contactus.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

// Type for form data
interface FormData {
  name: string;
  email: string;
  message: string;
  number: string;
  country: string;
  city: string;
}

const ContactUsForm: React.FC = () => {
  // State to store form data with type
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    number: '',
    country: '',
    city: '',
  });

  // State for validation errors
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

    // Real-time validation for the field
    validateField(name as keyof FormData, value); // Ensure the name is casted to keyof FormData
  };

  // Handle phone number change for PhoneInput
  const handlePhoneChange = (value: string | undefined) => {
    // Type checking since PhoneInput might return undefined
    if (value) {
      setFormData((prevState) => ({
        ...prevState,
        number: value,
      }));
      validateField('number', value);
    }
  };

  // Validate individual field in real-time
  const validateField = (name: keyof FormData, value: string) => {
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
      } else if (isNaN(Number(value))) {
        error = 'Please enter a valid number.';
      }
    } else if (name === 'country' || name === 'city') {
      if (!value) {
        error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error, // Update error for the specific field
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform full form validation before submission
    const isValid = validateForm();
     
    // Check if any required field is empty
    const hasEmptyFields = Object.values(formData).some((field) => field === '');

    if (isValid && !hasEmptyFields) {
      // If form is valid, reset form and display success message
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
    }
  };

  // Validate all form fields before submission
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Validate each field
    Object.keys(formData).forEach((field) => {
      const value = formData[field as keyof FormData];
      validateField(field as keyof FormData, value);
    });

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== '');
    return !hasErrors;
  };

  return (
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
            className="phone-input" // Custom class for styling
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
  );
};

export default ContactUsForm;
