import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>Bienvenido a Sports Store</h1>
        <p>Encuentra los mejores productos deportivos al mejor precio</p>
      </motion.div>
    </div>
  );
};

export default Hero;
