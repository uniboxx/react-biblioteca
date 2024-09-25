import { FC, ReactNode, useState } from 'react';
import BooksContext from '../contexts/BooksContext';

interface BookType {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
}

interface Props {
  children: ReactNode;
}

function BooksProvider({ children }: Props) {
  const [books, setBooks] = useState([]);

  return (
    <>
      <BooksContext.Provider value={[books, setBooks]}>
        {children}
      </BooksContext.Provider>
    </>
  );
}

export default BooksProvider;
