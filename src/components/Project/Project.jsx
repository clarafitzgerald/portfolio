import React, { Component } from "react";
import styles from "./Project.module.scss";

class Project extends Component {
  state = {};
  render() {
    return (
      <section
        href="https://hall-of-mirrors.clarafitzgerald.co.uk/"
        window="_blank"
      >
        <img
          className={styles.image}
          src={this.props.image}
          alt={this.props.title}
        />
        <p>HALL OF MIRRORS</p>
      </section>
    );
  }
}

export default Project;
