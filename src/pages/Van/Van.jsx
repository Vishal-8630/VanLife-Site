import React, { useEffect, useState } from "react";
import styles from "./Van.module.scss";
import { Link, useParams } from "react-router-dom";

const Van = () => {
  const [van, setVan] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res => res.json()))
      .then((data => setVan(data.vans)));
  }, []);


  return (
    <div className={styles["van"]}>
      <div>
        <Link to="/vans" className={styles["back__link"]}>
          <span>&larr;</span> Back to all vans
        </Link>
      </div>

      <section className={styles["van__info"]}>
        <div className={styles["van__img"]}>
          <img src={van.imageUrl} alt="Van Image" />
        </div>
        <div className={styles["details"]}>
          <button>{van.type}</button>
          <h1>{van.name}</h1>
          <p>
            <strong>${van.price}</strong> / day
          </p>
        </div>
      </section>
      <p className={styles["description"]}>{van.description}</p>

      <div className={styles["rent__button"]}>
        <button>Rent this van</button>
      </div>
    </div>
  );
};

export default Van;
