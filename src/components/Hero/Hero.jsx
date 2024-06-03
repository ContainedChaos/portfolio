import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>I'm Samia Nawsheen</div>
        <p className={styles.description}>
          An enthusiastic software engineering student in my final year with a
          passion for developing innovative solutions
        </p>
        <a
          href="mailto:samianawsheen@iut-dhaka.edu"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/idk.jpg")}
        alt="Hero image of me"
        className={`${styles.heroImg} ${styles["circular-image"]}`}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
