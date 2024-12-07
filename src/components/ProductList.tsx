import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styles from "../styles/Home.module.css";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
};

const products: Product[]= [
  { id: 1, title: "Balón de Fútbol", price: 29.99, image: "/img/balon", category: "Equipamiento" },
  { id: 2, title: "Camiseta Deportiva", price: 19.99, image: "/img/camisa.jpg", category: "Ropa" },
  { id: 3, title: "Zapatillas Running", price: 59.99, image:"/img/zapatillas", category: "Calzado" },
  { id: 4, title: "Guantes de Boxeo", price: 45.00, image: "/img/guantes", category: "Equipamiento" },
  { id: 5, title: "Short Deportivo", price: 15.00, image: "/img/short", category: "Ropa" },
  { id: 6, title: "Botas de Montaña", price: 99.99, image: "/img/botas", category: "Calzado" },
];

const ProductList = () => {
  const [filter, setFilter] = useState<string>("");

  const filteredProducts = filter
    ? products.filter((product) => product.category.toLowerCase() === filter.toLowerCase())
    : products;

  return (
    <div className={styles.productList}>
      <div className={styles.searchBar}>
        <button onClick={() => setFilter("")}>Todos</button>
        <button onClick={() => setFilter("Equipamiento")}>Equipamiento</button>
        <button onClick={() => setFilter("Ropa")}>Ropa</button>
        <button onClick={() => setFilter("Calzado")}>Calzado</button>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
