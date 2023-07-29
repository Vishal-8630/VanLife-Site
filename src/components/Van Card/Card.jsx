import React from "react";
import styles from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({ id, name, price, imageUrl, description, type }) => {
  return (
    <div className={styles["card"]}>
      <Link to={`/van/${id}`}>
        <div className={styles["card__img"]}>
          <img src={imageUrl} alt="Van" />
        </div>
        <div className={styles["card__info"]}>
          <h3>{name}</h3>
          <p>
            <strong>${price}</strong> / day
          </p>
        </div>
        <div className={styles["card__button"]}>
          <button>{type}</button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
