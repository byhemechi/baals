const Ball = () => <div style={{ background: 'red', width: '20px', height: '20px', borderRadius: '9999px' }} />;

const BallCounter: React.FunctionComponent<{ balls: number }> = ({ balls }) => <div style={{ display: 'flex' }}>
    {[...new Uint8Array(balls ?? 0)].map((i, n) => <Ball key={n} />)}
</div>;

export default BallCounter;