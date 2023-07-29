import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles["header"]}>
      <nav className={`${styles["nav"]} container`}>
        <h1>
          <Link to="/" className={styles["nav__logo"]}>
            #VanLife
          </Link>
        </h1>
        <ul className={styles["nav__list"]}>
          <li>
            <Link to="/about" className={styles["nav__list__link"]}>
              About
            </Link>
          </li>
          <li>
            <Link to="/vans" className={styles["nav__list__link"]}>
              Vans
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
