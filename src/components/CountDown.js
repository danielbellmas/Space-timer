import React, { useState, useEffect } from "react";
import "../styles/_countdown.scss";
import Swal from "sweetalert2";

const initializeLocalStorage = (key, value) => {
  localStorage.setItem(
    key,
    localStorage.getItem(key) !== null
      ? JSON.parse(localStorage.getItem(key))
      : value
  );
};

const CountDown = ({ index }) => {
  const initialMinutes = 5;
  const initialSeconds = 0;
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);

  //Keep data
  useEffect(() => {
    initializeLocalStorage(`minutes${index}`, 5);
    initializeLocalStorage(`seconds${index}`, 0);
    setMinutes(JSON.parse(localStorage.getItem(`minutes${index}`)));
    setSeconds(JSON.parse(localStorage.getItem(`seconds${index}`)));
  }, []);

  useEffect(() => {
    localStorage.setItem(`minutes${index}`, minutes);
    localStorage.setItem(`seconds${index}`, seconds);
  }, [seconds, minutes]);

  //Timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
          Swal.fire({
            icon: "error",
            title: "You missed the last rocket to Mars!",
          });
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  const handleReset = () => {
    setMinutes(initialMinutes);
    setSeconds(initialSeconds);
  };

  return (
    <div className="countdown">
      <span>Countdown to lift off</span>

      <div className="container">
        <div className="box">{minutes}</div>:
        <div className="box">{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      <button type="button" onClick={handleReset}>
        Reset timer
      </button>
    </div>
  );
};

export default CountDown;
