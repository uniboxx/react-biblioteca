import { useContext } from 'react';
import Context from '../contexts/BooksContext';

function Counter() {
  const value = useContext(Context);

  return (
    <>
      <div>Counter: {value}</div>
    </>
  );
}

export default Counter;
