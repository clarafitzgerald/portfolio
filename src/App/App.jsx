import React, { Component } from "react";
import styles from "./App.module.scss";

class App extends Component {
  state = {};
  render() {
    return (
      <main className={styles.main}>
        <section className={styles.header}>
          <p className={styles.name}>CLARA FITZGERALD</p>
          <p>- WEB DEVELOPER -</p>
        </section>
      </main>
    );
  }
}

export default App;
