import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Triangle from "../Triangle";

export default function Resources() {
  return (
    <section className={styles.resources}>
      <h2 className="crosshead">Resources</h2>

      <ul className={styles.resourcesList}>
        <li>
          <a href="https://github.com/wearefuturegov/outpost">
            <h3>Outpost Github repository</h3>
          </a>
          <p>See the code for the Outpost platform.</p>
        </li>
        <li>
          <a href="https://github.com/wearefuturegov/outpost-api-service/wiki">
            <h3>Outpost API docs</h3>
          </a>
          <p>See the documentation for Outpost's open API.</p>
        </li>

        <li>
          <a href="https://blog.wearefuturegov.com/how-to-add-an-accessible-opening-times-feature-to-a-rails-app-86f2b0a16c3a">
            <h3>
              How to add an accessible opening times feature to a Rails app
            </h3>
          </a>
          <p>Blog post</p>
        </li>
        <li>
          <a href="https://blog.wearefuturegov.com/how-to-add-a-google-docs-style-edit-history-feature-to-a-rails-app-9b827da37cec">
            <h3>
              How to add a Google Docs-style edit history feature to a Rails app
            </h3>
          </a>
          <p>Blog post</p>
        </li>
      </ul>
    </section>
  );
}
