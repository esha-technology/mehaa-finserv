import React from 'react';
import { motion } from 'framer-motion';

const LoanForm: React.FC = () => {
  return (
    <motion.div 
      className="bg-gray-200 py-10 px-28 rounded-3xl max-w-2xl mx-auto my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form className="space-y-2">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            placeholder="Fullname"
            className="w-full p-3 bg-white-500 text-black rounded-lg"
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
            placeholder="Ph-number"
            className="w-full p-3 bg-white-500 text-balck rounded-lg"
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
            className="w-full p-3 bg-white-500 text-balck rounded-lg"
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
            className="w-1/2 p-3 bg-white-500 text-balck rounded-lg"
          />
        </motion.div>

        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <input
            type="file"
            placeholder="Enter pancard"
            className="w-full p-3 bg-white-500 text-grey rounded-lg"
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
