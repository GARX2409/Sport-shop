import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image }) => {
  return (
    <motion.div
      className={styles.productCard}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </motion.div>
  );
};

export default ProductCard;
