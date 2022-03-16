import React, { useEffect } from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  // const [seconds, setSeconds] = React.useState(0);
  // const [isActive, setIsActive] = React.useState(false);

  // timerId = setIsActive(!isActive);

  // removeTimer = (): void => {
  //   setSeconds(0);
  //   setIsActive(false);
  // };

  // React.useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds + 1);
  //     }, 1000);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return (): void => clearInterval(interval);
  // }, [isActive, seconds]);
  // onClick={removeTimer}
  return (
    // <li className="list-group-item d-flex align-items-center  justify-content-between">
    //   <p className="text-center">{seconds} seconds</p>
    //   <div className="btn btn-danger">Delete</div>
    // </li>
    <p>TIMER</p>
  );
};
