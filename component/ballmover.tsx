import BallsContext from "./ballsContext";
import React from 'react';
import styles from "../styles/mover.module.css";

const BallMover = () => {
    const buttonbox = React.createRef<HTMLDivElement>();
  return (
    <BallsContext.Consumer>
      {({ balls, update }) => (
        <div className={styles.container} ref={buttonbox}>
          <button
            type="button"
            onClick={() => {update(balls + 1); buttonbox?.current.scrollIntoView()}}
            className={styles.button}
          >
            Add Ball
          </button>
          <button
            type="button"
            onClick={() => update(balls - 1)}
            disabled={balls <= 0}
            className={styles.button}
          >
            Remove Ball
          </button>
        </div>
      )}
    </BallsContext.Consumer>
  );
};

export default BallMover;
