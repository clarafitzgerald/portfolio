import React, { Component } from "react";
import styles from "./Project.module.scss";

class Project extends Component {
  state = {};
  render() {
    return (
      <section window="_blank" className={styles.project}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <img
            className={styles.image}
            src={this.props.image}
            alt={this.props.title}
          />
        </a>

        <p className={styles.title}>{this.props.title}</p>
        {/* <p>{this.props.description}</p> */}
        <a
          href={this.props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View source code
        </a>
      </section>
    );
  }
}

export default Project;
