import React from "react";
import { Timer } from "./Timer";
import { v4 as uuidv4 } from "uuid";

const TimersList: React.FC = () => {
  console.log(uuidv4());
  const timer: string[] = [];

  const [addTimer, setAddTimer] = React.useState<string[]>(timer);

  const reset = (createdAt: string): void => {
    console.log("Reset");
    return setAddTimer(addTimer.filter((element) => element !== createdAt));
  };

  const goTimer = (): void => {
    const idTimer = uuidv4();
    setAddTimer(() => {
      return [...addTimer, idTimer];
    });
  };

  return (
    <ul className="list-group timers-list">
      <li className="list-group-item text-center">
        <button className="btn btn-primary" onClick={goTimer}>
          Add a timer
        </button>
      </li>

      {addTimer.map((timerList) => {
        return <Timer key={timerList} timerId={timerList} removeTimer={reset} />;
      })}
    </ul>
  );
};

export default TimersList;
