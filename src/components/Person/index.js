/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";

import styles from "./styles.module.css";

export function Person({ children, name, role, pronouns, image, height }) {
  return (
    <div className={clsx(styles.person)}>
      <div className={styles.row}>
        <img
          src={image}
          alt={name}
          className={styles.image}
          style={{ height }}
        />
        <div>
          <div className={styles.name}>
            {name}
            <span className={styles.pronouns}>{pronouns}</span>
          </div>
          <div className={styles.role}>{role}</div>
        </div>
      </div>
      {children && <div className={styles.content}>{children}</div>}
    </div>
  );
}

export function PersonGrid({ children, cols }) {
  return <div className={styles.personGrid}>{children}</div>;
}
