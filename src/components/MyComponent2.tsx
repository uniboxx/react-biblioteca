import { useState, useEffect, useRef } from 'react';

function MyComponent2() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), 5000);
  });

  return show ? <Child /> : <div />;
}

export default MyComponent2;

function Child() {
  const intervalRef = useRef<number | null>(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('Mount');
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 1);
    }, 1000);

    return () => {
      console.log('Unmount');
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return <div>{time}</div>;
}
