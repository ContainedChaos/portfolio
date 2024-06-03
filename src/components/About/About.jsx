import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/frontendd.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend</h3>
              <p>Experience in Flutter and React</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backendd.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend</h3>

              <p>Experience in Express, NodeJS and FastAPI</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
