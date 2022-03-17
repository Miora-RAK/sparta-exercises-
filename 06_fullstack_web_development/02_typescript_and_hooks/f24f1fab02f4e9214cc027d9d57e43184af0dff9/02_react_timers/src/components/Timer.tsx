import React from "react";

type TimerProps = {
  timerId: string;
  removeTimer: (createdAt: string) => void;
};

export const Timer: React.FC<TimerProps> = ({ timerId, removeTimer }) => {
  const [seconds, setSeconds] = React.useState(0);
  const startTimer = (): void => {
    setInterval(() => {
      return setSeconds((seconds) => seconds + 1);
    }, 1000);
  };
  return (
    <li className="list-group-item d-flex align-items-center  justify-content-between">
      <p className="text-center">{seconds} seconds</p>
      <div className="btn btn-success" onClick={startTimer}>
        Start
      </div>
      <div className="btn btn-danger" onClick={(): void => removeTimer(timerId)}>
        Delete
      </div>
    </li>
  );
};
