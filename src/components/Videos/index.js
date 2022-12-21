import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Triangle from "../Triangle";

export default function Videos() {
  return (
    <section className={styles.videos}>
      <Triangle
        inverted={true}
        svgPath="M0.000653049 2000L4.614e-05 -5.24521e-06H2000L0.000653049 2000Z"
      />

      <h2 className="crosshead inverted">See how it works</h2>

      <ul className={styles.videoList}>
        <li className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xsu4pnjFIe0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <h3 className={styles.videoName}>A brief tour of Scout</h3>
          <p className={styles.videoDescription}>
            See how the public service directory works, including how you can
            search the directory and things you might see in the results.
          </p>
        </li>

        <li className={styles.video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IjukJHmd9s4"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3 className={styles.videoName}>Using Outpost to manage listings</h3>
          <p className={styles.videoDescription}>
            See how residents can use the admin tool, Outpost, to create and
            manage their own listings.
          </p>
        </li>
      </ul>

      <Triangle
        inverted={false}
        svgPath="M2000 0L2000 2000H0L2000 0Z"
        fill="--background"
      />
    </section>
  );
}
