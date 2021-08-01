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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111827" />
        <meta name="msapplication-TileColor" content="#111827" />
        <meta name="theme-color" content="#111827" />
      </Head>
      <div className={styles.header}>
        <button
          className={styles.resetButton}
          onClick={() => {
            localStorage.removeItem("balls");
            setBalls(0);
          }}
        >
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
