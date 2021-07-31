import React from "react";
import BallMover from "../component/ballmover";
import BallCounter from "../component/balls";
import BallsContext from "../component/ballsContext";
import Head from 'next/head';

const HomePage = () => {
  const [balls, setBalls] = React.useState<number>(0);
  return <div>
    <Head>
      <title>{balls == 0 ? 'No' : balls} ball{balls == 1 ? '' : 's'}</title>
    </Head>
    <div>this is the home page the value of balls is {balls}</div>
    <BallCounter balls={balls} />
    <BallsContext.Provider value={{ balls, update: (v) => setBalls(v) }}><BallMover /></BallsContext.Provider>

  </div>
};

export default HomePage;