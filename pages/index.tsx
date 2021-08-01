import React from "react";
import BallMover from "../component/ballmover";
import BallCounter from "../component/balls";
import BallsContext from "../component/ballsContext";
import Head from "next/head";
import styles from '../styles/Home.module.css';

const HomePage = () => {
  const [balls, setBalls] = React.useState<number>(0);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {balls == 0 ? "No" : balls} ball{balls == 1 ? "" : "s"}
        </title>
      </Head>
      <div className={styles.header}>{balls} Balls</div>
      <BallCounter balls={balls} />
      <BallsContext.Provider
        value={{ balls, update: (v) => setBalls(Math.max(v, 0)) }}
      >
        <BallMover />
      </BallsContext.Provider>
    </div>
  );
};

export default HomePage;
