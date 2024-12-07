import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import ProductList from "@/components/ProductList";
import About from "@/components/about";
import Contact from "@/components/contact";

const Home = () => {
  const [currentSection, setCurrentSection] = useState<string>("hero");

  const renderSection = () => {
    switch (currentSection) {
      case "products":
        return (
          <section className={styles.section}>
            <h2>Catálogo de Productos</h2>
            <ProductList />
          </section>
        );
      case "about":
        return (
          <section className={styles.section}>
            <h2>Sobre Nosotros</h2>
            <About/>
          </section>
        );
      case "contact":
        return (
          <section className={styles.section}>
            <h2>Contacto</h2>
            <Contact/>
          </section>
        );
      default:
        return (
          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Bienvenido a Sports Store</h1>
              <p>
                Encuentra los mejores productos deportivos para todos los
                gustos.
              </p>
              <button onClick={() => setCurrentSection("products")}>
                Ver Productos
              </button>
            </div>
          </section>
        );
    }
  };

  return (
    <div className={styles.container}>
      {/* Navegación */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>🏆 Sports Store</div>
        <div className={styles.navLinks}>
          <button onClick={() => setCurrentSection("products")}>Productos</button>
          <button onClick={() => setCurrentSection("about")}>Sobre Nosotros</button>
          <button onClick={() => setCurrentSection("contact")}>Contacto</button>
        </div>
      </nav>

      {/* Renderizar la sección actual */}
      {renderSection()}
    </div>
  );
};

export default Home;
