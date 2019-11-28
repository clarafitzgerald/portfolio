import React, { Component } from "react";
import styles from "./Navbar.module.scss";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav id="navigation" className={styles.navLinks}>
        <p>PROJECTS</p>
        <p>ABOUT</p>
        <p>CONTACT</p>
      </nav>
    );
  }
}

export default Navbar;
