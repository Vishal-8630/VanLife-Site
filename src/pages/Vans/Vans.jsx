import React, { useEffect, useState } from "react";
import styles from "./Vans.module.scss";
import VanCard from "../../components/Van Card";

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElement = vans.map(van => {
    return <VanCard key={van.id} {...van}  />
  })

  return (
    <div className={styles["vans"]}>
      {vanElement}
    </div>
  );
};

export default Vans;
