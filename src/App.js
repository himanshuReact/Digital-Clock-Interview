import "./styles.css";
import React, { useState, useEffect } from "react";

const Clock = () => {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  let timer;

  const getTime = () => {
    timer = setInterval(() => {
      setHours(() => new Date().getHours());

      setMinutes(() => new Date().getMinutes());

      setSeconds(() => new Date().getSeconds());
    }, 1000);
  };

  useEffect(() => {
    getTime();

    return clearInterval(timer);
  }, []);

  getTime();
  return (
    <div>
      Digital Clock
      <div>
        {hours}:{minutes}:{seconds}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <Clock />
    </div>
  );
}
