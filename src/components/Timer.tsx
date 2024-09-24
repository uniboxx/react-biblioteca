import { useState, useRef, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [reset, setReset] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    console.log('useEffect');
    setTime(0);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);
    return () => {
      console.log('clearInterval');
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [reset]);

  return (
    <div>
      <div>{time}</div>
      <button onClick={() => setReset(Math.random())}>reset</button>
      <button
        onClick={() => {
          if (intervalRef.current) clearInterval(intervalRef.current);
        }}
      >
        stop
      </button>
    </div>
  );
}

export default Timer;
