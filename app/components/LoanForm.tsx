import React from 'react';
import { motion } from 'framer-motion';

const LoanForm: React.FC = () => {
  return (
    <motion.div 
      className="bg-gray-400 p-8 rounded-lg max-w-md mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="space-y-4">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="Ph number"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <input
            type="text"
            placeholder="Pan number"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <input
            type="text"
            placeholder="Enter pancard"
            className="w-full p-3 bg-blue-500 text-white rounded-lg"
          />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg"
          >
            Submit
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default LoanForm;
