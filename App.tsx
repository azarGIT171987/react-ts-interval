import * as React from 'react';
import './style.css';

export default function App() {
  let intitalState = 0;
  const [timer, setTimer] = React.useState(intitalState);
  const [active, setActive] = React.useState(false);

  function toggle() {
    setActive(!active);
  }

  function resetTimer() {
    setTimer(0);
    setActive(false);
  }

  React.useEffect(() => {
    let interval = null;
    if (active) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds + 1);
      }, 1000);
    } else if (!active && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active, timer]);

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={toggle}>{active ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
      <p>Start/Pause or Reset the Timer</p>
    </div>
  );
}
