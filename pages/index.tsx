import React, { useEffect } from "react";
import BallMover from "../component/ballmover";
import BallCounter from "../component/balls";
import BallsContext from "../component/ballsContext";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const HomePage = () => {
  const [balls, setBalls] = React.useState<number>(0);
  useEffect(() => {
    if (localStorage.getItem("balls")) {
      const b = JSON.parse(localStorage.getItem("balls") ?? balls.toString());
      setBalls(b ?? 0);
    }
  }, [balls]);
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {balls == 0 ? "No" : balls} ball{balls == 1 ? "" : "s"}
        </title>
        <meta name="description" content="balls" />
      </Head>
      <div className={styles.header}>
        <button className={styles.resetButton} onClick={() => {localStorage.removeItem('balls'); setBalls(0)}}>
          {balls == 0 ? "No" : balls} ball{balls == 1 ? "" : "s"}
        </button>
      </div>
      <BallCounter balls={balls} />
      <BallsContext.Provider
        value={{
          balls,
          update: (v) => {
            let nb = Math.max(v, 0);
            setBalls(nb);
            localStorage.setItem("balls", JSON.stringify(nb));
          },
        }}
      >
        <BallMover />
      </BallsContext.Provider>
    </div>
  );
};

export default HomePage;
