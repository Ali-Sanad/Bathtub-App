import {useEffect, useState} from 'react';
import {increaseWaterLevel, decreaseWaterLevel} from '../utils/constants';
const useBathtub = () => {
  const [level, setLevel] = useState(0);
  const [actionType, setActionType] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      if (actionType === increaseWaterLevel && level < 5) {
        setLevel((level) => level + 1);
      }
      if (actionType === decreaseWaterLevel && level > 0) {
        setLevel((level) => level - 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [level, actionType]);

  return {level, setActionType};
};

export default useBathtub;
