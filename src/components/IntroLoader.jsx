// src/components/IntroLoader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import './IntroLoader.css';

const IntroLoader = () => {
    const text = "INITIALIZING_SYSTEM...";

    const textVariants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: 0.5 * i },
        }),
    };

    const charVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        // 'exit' prop dari framer-motion akan dieksekusi saat komponen di-unmount
        <motion.div
            className="loader-container"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.div
                className="glitch-wrapper"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.9, 1, 0.9, 1], transition: { duration: 2.5, repeat: Infinity } }}
            >
                <div className="glitch" data-text="[AO]">
                    [AO] {/* Ganti dengan inisial Anda */}
                </div>
            </motion.div>
            <motion.div
                className="loading-text"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                {text.split("").map((char, index) => (
                    <motion.span key={index} variants={charVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default IntroLoader;