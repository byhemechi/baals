import React from "react";

const BallsContext = React.createContext<{
    balls: number, update: (balls) => void
}>({ balls: 0, update: (balls: number) => { } });

export default BallsContext;