import React from "react";
import styles from "./styles.module.css";
import Triangle from "../Triangle";
import Button from "../Button";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useGlobalData from "@docusaurus/useGlobalData";

export default function Hero() {
  const globalData = useGlobalData();
  const docsData = globalData["docusaurus-plugin-content-docs"]["default"];
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.hero}>
      <p className={styles.caption}>{siteConfig.title}</p>
      <h1 className={styles.headline}>{siteConfig.tagline}</h1>
      <Button href={docsData?.path} size="lg" type="secondary">
        View Documentation
      </Button>
      <Triangle inverted={false} svgPath="M2000 0L2000 2000H0L2000 0Z" />
    </section>
  );
}
