import React, { Component } from "react";
import styles from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
          <section className={styles.title}>
            <p className={styles.name}>CLARA FITZGERALD</p>
            <p className={styles.jobTitle}>- WEB DEVELOPER -</p>
            <p className={styles.contact}>
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a>
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a>
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </p>
          </section>
          <a href="#navigation" className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronDown} />
          </a>
        </header>
        <Navbar />
        <section className={styles.projects}>
          <p className={styles.projectsTitle}>MY PROJECTS</p>
          <div>
            <p>Hall of Mirrors</p>
            <p>Calendar</p>
            <p>Tug of War</p>
            <p>To Do List</p>
            <p>Minesweeper</p>
            <p>Filtration System</p>
            <p>Hangman</p>
            <p>Hostile Aliens</p>
            <p>Blog Brief</p>
          </div>
        </section>
      </>
    );
  }
}

export default App;
