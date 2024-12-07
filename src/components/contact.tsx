import React from "react";
import Swal from "sweetalert2";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    Swal.fire({
      title: "¡Formulario enviado!",
      text: "Gracias por contactarnos. Te responderemos pronto.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    (event.target as HTMLFormElement).reset();
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>
          ¿Tienes alguna pregunta o necesitas ayuda? ¡Estamos aquí para ti!
          Puedes contactarnos a través de los siguientes métodos:
        </p>
        <ul className={styles.contactList}>
          <li>
            <strong>Email:</strong> soporte@Sportshop.com
          </li>
          <li>
            <strong>Teléfono:</strong> +123 456 7890
          </li>
          <li>
            <strong>Dirección:</strong> Calle golf #1, Ciudad rugby
          </li>
        </ul>
        <p>
          También puedes enviarnos un mensaje directo completando el formulario
          a continuación:
        </p>

        {/* Formulario */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tu mensaje"
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
