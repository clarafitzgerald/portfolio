import React, { Component } from "react";
import styles from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import hallOfMirrors from "../../images/hall-of-mirrors.jpg";
import calendar from "../../images/calendar.jpg";
import minesweeper from "../../images/minesweeper.jpg";
import toDoList from "../../images/to-do-list.JPG";
import tugOfWar from "../../images/tug-of-war.JPG";
import shortestPath from "../../images/shortest-path.JPG";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <section className={styles.titles}>
            <p className={styles.name}>CLARA FITZGERALD</p>
            <p className={styles.jobTitle}>- WEB DEVELOPER -</p>
            <p className={styles.contact}>
              <a
                href="https://github.com/clarafitzgerald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:claraisabelfitzgerald@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://www.linkedin.com/in/clara-fitzgerald/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              {/* <a>
                <FontAwesomeIcon icon={faDownload} />
              </a> */}
            </p>
          </section>
          <a href="#navigation" className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </header>
        <Navbar />
        <section className={styles.projects}>
          <p id="projects" className={styles.title}>
            MY PROJECTS
          </p>
          <div>
            <div>
              <Project
                githubLink={
                  "https://github.com/clarafitzgerald/hall-of-mirrors"
                }
                image={hallOfMirrors}
                link={"https://hall-of-mirrors.clarafitzgerald.co.uk/"}
                title={"Hall of Mirrors"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
            <div>
              <Project
                link={"https://calendar.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/calendar"}
                image={calendar}
                title={"Calendar"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
            <div>
              <Project
                image={shortestPath}
                title={"Shortest Path Calculator"}
                link={"http://shortest-path.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/shortest-path"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
            <div>
              <Project
                image={tugOfWar}
                title={"Tug of War"}
                link={"https://tug-of-war.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/tug-of-war"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
            <div>
              <Project
                image={toDoList}
                link={"https://to-do-list.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/to-do-list"}
                title={"To Do List"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
            <div>
              <Project
                image={minesweeper}
                link={"https://minesweeper.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/minesweeper"}
                title={"Minesweeper"}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in "
                }
              />
            </div>
          </div>
        </section>
        <section className={styles.aboutMe}>
          <p id="about" className={styles.title}>
            ABOUT ME
          </p>
          <p>
            In 2019 I graduated from Cardiff University with a BSc in Financial
            Mathematics.
          </p>
          <p>
            The first thorough exposure I had to coding was at University, using
            R for data analysis. We primarily used this for the analysis of
            financial data, in order to make predictions about market activity
            to educate simulated trades in{" "}
            <a
              href="https://www.stellartradingsystems.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stellar
            </a>
            . I really enjoyed this. I was amazed by coding, and the more I
            looked into it, the greater the capabilities of programming seemed.
            So, when I graduated I decided I wanted to work in Software
            Development, which brought me to{" "}
            <a
              href="https://www.nology.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              _nology.
            </a>
          </p>
          <p>
            On this course, I've learned how to build a website in HTML, how to
            use CSS/SCSS to style it, but best of all I've learned how to use
            Javascript to create interactivity, build things dynamically and so
            much more. Beyond this, I've learned how to build things in
            React.js, how to test my code using Jest & Enzyme and how to use{" "}
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Firebase
            </a>{" "}
            for Auth, Database, Storage and Hosting.{" "}
          </p>
          <p>
            This has reaffirmed my passion for tech - the more I learn, the more
            I want to learn. I've realised that my interests lie in logic more
            so than design, and I'm really keen to expand my repetoire of
            languages to facilitate more server-side programming.
          </p>
          <p>
            Overall, I just want to keep learning and being challenged, so I'm
            hoping I can find a role that will help me do that.
          </p>
        </section>

        <section className={styles.contact}>
          <section className={styles.titles}>
            <p id="contact" className={styles.description}>
              GET IN TOUCH
            </p>
            <p className={styles.links}>
              <a
                href="https://github.com/clarafitzgerald"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:claraisabelfitzgerald@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://www.linkedin.com/in/clara-fitzgerald/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              {/* <a>
                <FontAwesomeIcon icon={faDownload} />
              </a> */}
            </p>
          </section>
        </section>
      </>
    );
  }
}

export default App;
