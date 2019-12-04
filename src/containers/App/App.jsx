import React, { Component } from "react";
import styles from "./App.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../../components/Navbar/Navbar";
import Project from "../../components/Project/Project";
import hallOfMirrors from "../../images/hall-of-mirrors.jpg";
import calendar from "../../images/calendar.jpg";
import minesweeper from "../../images/minesweeper.jpg";
import toDoList from "../../images/to-do-list.JPG";
import tugOfWar from "../../images/tug-of-war.JPG";
import shortestPath from "../../images/shortest-path.JPG";
import finalisedCV from "../../finalisedCV.pdf";

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
              <a href={finalisedCV} download>
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
                languages={[
                  "Javascript",
                  "React.js",
                  "Firebase (auth & database)"
                ]}
                description={
                  "Brief set in week 7/12 of _nology, to create a react app in which a user logs in with their Google account and a hall of distorted versions of their Gmail display images is returned. On click, the images should toggle between the distorted and normal look. This was intended for practice of Firebase auth and the process of using props and state to manage unidirectional data flow in React. I later extended this brief, by adding a game and leaderboard."
                }
              />
            </div>
            <div>
              <Project
                link={"https://calendar.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/calendar"}
                image={calendar}
                title={"Calendar"}
                languages={["Javascript", "React.js", "Google Calendar API"]}
                description={
                  "Brief set in week 10/12 of _nology, to create a react app which renders calendar data from a Google REST API, given only the calendar ID. Prior to this brief, we hadn’t used APIs at _nology, so the core challenge here was working out how to do this purely based on the documentation. Following this, we had to add filters so that a user could filter the events by date and category. Filtering the date was particularly challenging due to the format in which a date is given. I also secured the API key so that this can be safely hosted."
                }
              />
            </div>
            <div>
              <Project
                image={shortestPath}
                title={"Shortest Path Calculator"}
                link={"http://shortest-path.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/shortest-path"}
                languages={["Javascript"]}
                description={
                  "Brief set in week 10/12 of _nology, to build a program that finds the shortest path between two vertices in a given weighted, bidirectional graph.We were given the points and distances between them (the shortest route being the one with minimal total weight, rather than minimal number of edges traversed). The application was required to be written using only vanilla Javascript (without libraries or frameworks). The main challenge I had here was deciding which algorithm was most appropriate for finding the shortest route, and how to structure the data. In the end, I used Dijkstra’s algorithm to optimise the path distance, and an adjacency list to describe the relationship between graph vertices."
                }
              />
            </div>
            <div>
              <Project
                image={tugOfWar}
                title={"Tug of War"}
                link={"https://tug-of-war.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/tug-of-war"}
                languages={["Javascript"]}
                description={
                  "Brief set in week 3/12 of _nology, the first week of  learning Javascript. We had 3 hours to complete this task to the best of our abilities at the time. The app required 2-player functionality on one device, with the player who did the most actions winning the war. The app also had to be responsive, allow the game to be reset without browser refresh and keep track of how many times each player had won. Libraries and frameworks were not permitted."
                }
              />
            </div>
            <div>
              <Project
                image={toDoList}
                link={"https://to-do-list.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/to-do-list"}
                title={"To Do List"}
                languages={[
                  "Javascript",
                  "React.js",
                  "Firebase (auth & database)"
                ]}
                description={
                  "Brief set in week 9/12 of _nology, to create an application that allows a user to create their own personal to do list. Users should be able to create, update, delete, mark as done any item on their to-do list. Users can also filter their list via a text search or selecting to see only done or undone items. They should be able to access this to-do list from their phone or computer. "
                }
              />
            </div>
            <div>
              <Project
                image={minesweeper}
                languages={["Javascript"]}
                link={"https://minesweeper.clarafitzgerald.co.uk/"}
                githubLink={"https://github.com/clarafitzgerald/minesweeper"}
                title={"Minesweeper"}
                description={
                  "Brief set in week 8/12 of _nology, to build a program which generates and visualises the minesweeper (uncovered) game field. Should have an input of 3 parameters - number of rows, number of columns and number of mines. Mines should be generated randomly, and change on refresh of the page. There can only be one mine in each field. The output should be a simple visualisation of an uncovered game board. The main challenge of this was the logic of generating clues for mine location."
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
              <a href={finalisedCV} download>
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </p>
          </section>
        </section>
      </>
    );
  }
}

export default App;
