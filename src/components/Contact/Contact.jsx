import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1>Reach out to me!</h1>
        <a
          href={getImageUrl("pdf/Samia_Nawsheen_Resume.pdf")}
          download
          className={styles.resumeLink}
        >
          My resume!
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:samianawsheen@iut-dhaka.edu">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/samia-nawsheen-aa93032bb/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ContainedChaos">GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
