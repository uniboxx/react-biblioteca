import { useState } from 'react';
import Context from '../contexts/BooksContext';
import Counter from './Counter';

function InAppTest() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(prevState => prevState + 1);
  }

  return (
    <>
      <Context.Provider value={counter}>
        <Counter />
        <button onClick={increment}>increment</button>
      </Context.Provider>
    </>
  );
}

export default InAppTest;
