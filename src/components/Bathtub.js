import useBathtub from '../hooks/useBathtub';
import classes from '../styles/Bathtub.module.css';
import {increaseWaterLevel, decreaseWaterLevel} from '../utils/constants';

const Bathtub = () => {
  const {level, setActionType} = useBathtub();

  return (
    <>
      <div className={classes.container}>
        <button
          className={classes.increase}
          onClick={() => setActionType(increaseWaterLevel)}
        >
          Increase
        </button>
        <button
          className={classes.decrease}
          onClick={() => setActionType(decreaseWaterLevel)}
        >
          Decrease
        </button>
        <span className={classes.counter}>Counter: {level}</span>
      </div>
      <div className={classes.BathContainer}>
        {level
          ? Array(level)
              .fill('')
              .map((_, idx) => <div className={classes.waterLevel} key={idx} />)
          : null}
      </div>
    </>
  );
};

export default Bathtub;
