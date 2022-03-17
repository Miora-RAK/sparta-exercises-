import React from "react";
import { Timer } from "./Timer";

const TimersList: React.FC = () => {
  // const [timer, setTimer] = React.useState();

  const [seconds, setSeconds] = React.useState(60);
  const [isActive, setIsActive] = React.useState(false);

  const toggle = (): void => {
    setIsActive(!isActive);
  };

  const reset = (): void => {
    console.log("Reset");
    return setSeconds(0);
  };
  React.useEffect(() => {
    const addTimer = (): void => {
      return setSeconds((seconds) => seconds + 1);
    };
    return setSeconds((seconds) => seconds + 1);
    // if (isActive) {
    //   setInterval(() => {
    //     setSeconds((seconds) => seconds + 1);
    //   }, 1000);
    // } else if (!isActive && seconds !== 0) {
    //   clearInterval();
    // }
  }, [seconds]);
  // const addTimer = (): void => {
  //   console.log("add");
  //   return setSeconds((seconds) => seconds + 1);
  // };
  return (
    <ul className="list-group timers-list">
      <li className="list-group-item text-center">
        <button className="btn btn-primary" onClick={addTimer}>
          Add a timer
        </button>
      </li>

      <li className="list-group-item d-flex align-items-center  justify-content-between">
        <p className="text-center">{seconds} seconds</p>
        <div className="btn btn-danger" onClick={reset}>
          Delete
        </div>
      </li>
    </ul>
  );
};

export default TimersList;
