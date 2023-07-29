import React from "react";
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p>
        &copy; 2023 by <strong>Vishal Chaudhary</strong>
      </p>
    </div>
  );
};

export default Footer;
