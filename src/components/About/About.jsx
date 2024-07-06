import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/info_221753.png")} alt="Intro icon" className={styles.intro}/>
            <div className={styles.aboutItemText}>
              <h3>Intro</h3>
              <p>
               I have recently completed my bachelor's in <abbr title="Computer Science and Engineering">CSE     </abbr>  
               from Parul University, located in Vadodara. I am dedicated Software Engineer with  a robust foundation in software development, 
               problem-solving, and system design.I have a strong proficiency in programming languages such as C, C++, and Python and am 
               experienced in developing scalable applications, optimizing performance, and ensuring code quality. 
              
               <br />Hire me for this roles: 
               
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
          <div className={styles.aboutItemText}>
            <h3>UI Designer</h3>
            <p>
              I have designed multiple landing pages and have created design
              systems as well
            </p>
          </div>
        </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
         
        </ul>
      </div>
    </section>
  );
};
