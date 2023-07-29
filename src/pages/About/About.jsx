import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className="container">
      <main className={styles['main']}>
        <div className={styles['hero__img']}></div>
        <section className={styles['main__content']}>
          <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi debitis odit quas amet id atque pariatur, tenetur repellendus doloribus sit blanditiis provident, quasi ea, fugiat consequuntur ipsum enim iure velit vel optio. At nulla iusto temporibus odio, fugiat quod itaque obcaecati sequi. Accusantium veritatis expedita quibusdam ex, ipsam similique accusamus!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat hic eaque dolor beatae, quae nostrum sit. In, molestiae doloribus!</p>
        </section>
        <section className={styles['main__card']}>
          <h3>Your destination is waiting. <br /> Your van is ready.</h3>
          <button>Explore your vans</button>
        </section>
      </main>
    </div>
  );
};

export default About;
