import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function Prose() {
  return (
    <article className={styles.prose}>
      <h2 className={styles.crosshead}>
        A modern, accessible service directory, with a solid data infrastructure
        underneath
      </h2>
      <p>
        Outpost and Scout are built to be flexible: one tool for staff and one
        for residents, <strong>loosely joined by a powerful, open API.</strong>
      </p>
      <p>
        It's a scalable platform that can be built on over time, adding new
        resident-facing services that consume data from the API and use it in
        different ways.
      </p>

      <ul className={styles.tickList}>
        <li>
          <strong>Built from the ground up for the modern web,</strong> meeting
          WCAG AA standards for accessibility.
        </li>
        <li>
          <strong>Location aware search</strong> means it's easy for residents
          to find things in their local area.
        </li>
        <li>
          <strong>Data maintenence can be delegated to residents.</strong> No
          need for council staff to make every single change.
        </li>
        <li>
          <strong>No monoliths in sight.</strong> Scout and Outpost can be used
          by themselves, but Outpost is capable of powering a whole ecosystem of
          products.
        </li>
      </ul>
    </article>
  );
}
