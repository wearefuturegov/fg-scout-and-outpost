// import { useColorMode } from "@docusaurus/theme-common";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

export default function Triangle({
  inverted = false,
  svgPath,
  fill = "white",
}) {
  const { colorMode } = useColorMode();

  return (
    <svg
      className={clsx(styles.triangle, inverted && styles.triangleInverted)}
      viewBox="0 0 2000 2000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={svgPath}
        className={clsx(
          "triangle",
          colorMode === "light" && fill === "--background" && "grey"
        )}
      />
    </svg>
  );
}
