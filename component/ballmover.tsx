import BallsContext from "./ballsContext";
import styles from "../styles/mover.module.css";

const BallMover = () => (
  <BallsContext.Consumer>
    {({ balls, update }) => (
      <div className={styles.container}>
        <button
          type="button"
          onClick={() => update(balls + 1)}
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

export default BallMover;
