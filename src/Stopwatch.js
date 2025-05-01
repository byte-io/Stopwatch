import { useEffect, useState } from "react";

export const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timeList, setTimeList] = useState([]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleLap = () => {
    setTimeList((prev) => [...prev, `${min}: ${sec}:${milsec}`]);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setTimeList([]);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 10);
    }
    return () => clearInterval(intervalId);
  }, [time, isRunning]);

  const millisecond = Math.floor(time % 100);
  const second = Math.floor(time / 60) % 60;
  const minute = Math.floor(time / 3600) % 60;
  const milsec = millisecond < 10 ? "0" + millisecond : millisecond;
  const sec = second < 10 ? "0" + second : second;
  const min = minute < 10 ? "0" + minute : minute;

  return (
    <div>
      <h1>
        {min} : {sec} : {milsec}
      </h1>
      <button onClick={handleStart}>Start</button>&nbsp;
      <button onClick={handleStop}>Stop</button>&nbsp;
      <button onClick={handleLap}>Lap</button>&nbsp;
      <button onClick={handleReset}>Reset</button>
      <div>
        {timeList.map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
    </div>
  );
};
