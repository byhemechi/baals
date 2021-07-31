import BallsContext from "./ballsContext";

const BallMover = () =>
    <BallsContext.Consumer>
        {({balls, update}) => <div style={{ display: 'flex' }}>
            <button type='button' onClick={() => update(balls + 1)} style={{ flex: 1 }}>Increase balls by one</button>
            <button type='button' onClick={() => update(balls - 1)} style={{ flex: 1 }}>Decrease balls by one</button>
        </div>}
    </BallsContext.Consumer>


export default BallMover;