import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function Button({ children, href, size, type }) {
  return (
    <a
      href={href}
      className={clsx(
        styles.button,
        size === "md" && styles.md,
        size === "lg" && styles.lg,
        type === "primary" && styles.primary,
        type === "secondary" && styles.secondary,
        type === "grey" && styles.grey
      )}
    >
      {children}
    </a>
  );
}
