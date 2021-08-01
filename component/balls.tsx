import React from "react";
import styles from "../styles/balls.module.css";

const Ball = () => (
  <div
    className={styles.ball}
  />
);

const BallCounter: React.FunctionComponent<{ balls: number }> = ({ balls }) => (
  <div><div className={[styles.container, balls > 100 ? styles.many : ''].join(' ').trim()}>
    {[...new Uint8Array(balls ?? 0)].map((i, n) => (
      <Ball key={n} />
    ))}
  </div></div>
);

export default BallCounter;
