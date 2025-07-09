// src/components/SectionWrapper.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = (Component) => function HOC() {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
        >
            <Component />
        </motion.div>
    );
};

export default SectionWrapper;