import React from "react";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles["main"]}>
      <div className={styles["main__cover"]}></div>
      <div className={styles["main__content"]}>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          mollitia, unde quas ipsa rerum doloribus saepe consequuntur pariatur
          harum modi?
        </p>
        <button>Explore our vans</button>
      </div>
    </div>
  );
};

export default Home;
