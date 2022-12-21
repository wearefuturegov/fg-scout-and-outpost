/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export default function ImageWindow({
  children,
  size,
  minHeight,
  dark = false,
  banner = false,
  center = true,
}) {
  return (
    <div
      className={clsx(
        styles.imageWindow,
        dark === true && styles.dark,
        size === "sm" && styles.sm,
        size === "md" && styles.md,
        size === "lg" && styles.lg,
        size === "auto" && styles.auto,
        center === true && styles.center,
        banner === true && styles.banner
      )}
      style={{ minHeight }}
    >
      {children}
    </div>
  );
}
