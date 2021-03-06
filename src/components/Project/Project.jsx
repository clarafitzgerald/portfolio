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
        <section className={styles.languages}>
          {this.props.languages.map((language, index) => (
            <i key={index}>{language}</i>
          ))}
        </section>
        <p>{this.props.description}</p>
        <a
          className={styles.viewCode}
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
