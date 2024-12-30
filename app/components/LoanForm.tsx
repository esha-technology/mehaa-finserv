import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoanForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    state: '',
    panNumber: '',
  });
  const [errors, setErrors] = useState({
    fullname: '',
    phoneNumber: '',
    state: '',
    panNumber: '',
  });
  const [showPopup, setShowPopup] = useState(false);

  const validateForm = () => {
    const newErrors = { fullname: '', phoneNumber: '', state: '', panNumber: '' };
    if (formData.fullname.length < 6) newErrors.fullname = 'Name should be at least 6 characters';
    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.state) newErrors.state = 'State is required';
    if (!/[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(formData.panNumber)) newErrors.panNumber = 'Invalid PAN number';
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (validateForm()) {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyn6BQEOYY24SrCn4UOf9GnvzZj5JU8IYeXkHh258_YDkG2h0ykrEcgIsA4D72PaJHixA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.result === 'Success') {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          window.location.href = '/';
        }, 3000);
      } else {
        alert('There was an error submitting the form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const shakingAnimation = { x: [0, -10, 10, -10, 10, 0] };

  return (
    <motion.div
      className="bg-gray-200 py-8 px-4 sm:px-8 rounded-3xl max-w-2xl mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showPopup && (
        <motion.div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-5 rounded-lg text-center">
            <h2 className="text-xl font-bold">Thank you!</h2>
            <p>We will contact you soon.</p>
          </div>
        </motion.div>
      )}
      <h2 className="text-center text-3xl font-bold mb-5">Loan Form</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <motion.div
          className="space-y-1"
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          {...(errors.fullname && { animate: shakingAnimation })}
        >
          <label className="block text-lg font-medium">Full Name</label>
          <input
            type="text"
            name="fullname"
            placeholder="Fullname"
            value={formData.fullname}
            onChange={handleChange}
            className={`w-full border p-2 bg-white text-black rounded-lg ${errors.fullname ? 'border-red-500 bg-red-100' : 'border-green-600'}`}
          />
          {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
        </motion.div>

        <motion.div
          className="space-y-1"
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          {...(errors.phoneNumber && { animate: shakingAnimation })}
        >
          <label className="block text-lg font-medium">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className={`w-full border p-2 bg-white text-black rounded-lg ${errors.phoneNumber ? 'border-red-500 bg-red-100' : 'border-green-600'}`}
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
        </motion.div>

        <motion.div
          className="space-y-1"
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          {...(errors.state && { animate: shakingAnimation })}
        >
          <label className="block text-lg font-medium">State</label>
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className={`w-full border p-2 bg-white text-black rounded-lg ${errors.state ? 'border-red-500 bg-red-100' : 'border-green-600'}`}
          />
          {errors.state && <p className="text-red-500">{errors.state}</p>}
        </motion.div>

        <motion.div
          className="space-y-1"
          initial={{ opacity: 1, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          {...(errors.panNumber && { animate: shakingAnimation })}
        >
          <label className="block text-lg font-medium">PAN Number</label>
          <input
            type="text"
            name="panNumber"
            placeholder="PAN Number"
            value={formData.panNumber}
            onChange={handleChange}
            className={`w-full border p-2 bg-white text-black rounded-lg ${errors.panNumber ? 'border-red-500 bg-red-100' : 'border-green-600'}`}
          />
          {errors.panNumber && <p className="text-red-500">{errors.panNumber}</p>}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium py-3 px-6 rounded-lg"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LoanForm;
