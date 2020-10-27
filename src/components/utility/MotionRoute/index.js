import React from 'react';
import { Route } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageTrasition = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    x: -30,
  },
};

const MotionRoute = ({ ...props }) => {
  return (
    <motion.div variants={pageTrasition} initial="hidden" animate="visible" exit="exit">
      <Route {...props} />
    </motion.div>
  );
};

export default MotionRoute;
