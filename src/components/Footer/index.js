import React from "react";
import styles from "./styles.module.css";
import Triangle from "../Triangle";

export default function Footer() {
  return (
    <section className={styles.footer}>
      {/* <Triangle inverted={false} svgPath="M2000 0L2000 2000H0L2000 0Z" /> */}
      <Triangle
        inverted={true}
        svgPath="M0.000653049 2000L4.614e-05 -5.24521e-06H2000L0.000653049 2000Z"
        fill="--background"
      />
    </section>
  );
}
