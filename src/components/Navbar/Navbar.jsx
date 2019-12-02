import React, { Component } from "react";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav id="navigation" className={styles.navLinks}>
        <a href="#projects">PROJECTS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }
}

export default Navbar;
