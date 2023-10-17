'use client'

import { useEffect, useState } from 'react';
import './Countdown.css';  
import { FaPause, FaPlay, FaRedo } from "react-icons/fa";
const Countdown = () => {
  const [targetDate, setTargetDate] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isRunning, setIsRunning] = useState(true);

  const calculateTimeRemaining = () => {
    if (!targetDate) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeRemaining(calculateTimeRemaining());
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [targetDate, isRunning]);

  const handleButtonClick = () => {
    const inputDate = document.getElementById('targetDate').value;
    const inputTimestamp = new Date(inputDate).getTime();
    setTargetDate(inputTimestamp);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(true);
    setTargetDate(null);
    setTimeRemaining({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  };

  return (
    <div className='main'>

      <div className='setting'>
      <input type="datetime-local" id="targetDate" />
      <button onClick={handleButtonClick}>Set Timer</button>
      </div>

      <div className='timer'>
        <p className='timerText'><div className='time'>{timeRemaining.days}</div><div className='timeunit'>DAYS</div></p>
        <p className='timerText'><div className='time'>{timeRemaining.hours}</div><div className='timeunit'>HOURS</div></p>
        <p className='timerText'><div className='time'>{timeRemaining.minutes}</div><div className='timeunit'>MINUTES</div></p>
        <p className='timerText'><div className='time'>{timeRemaining.seconds}</div><div className='timeunit'>SECONDS</div></p>
      </div>

      <div className='buttons'>
       <button className='pause' onClick={handleStop}><FaPause/> Pause</button>
       <button className='Pause' onClick={handleResume}><FaPlay/> Resume</button>
       <button className='Pause'onClick={handleReset}><FaRedo/> Reset</button>
      </div>
    </div>
  );
};

export default Countdown;
