import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import BooksContext from '../contexts/BooksContext';

export type BookType = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
};

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
});

interface Props {
  children: (
    books: BookType[],
    error: Error | null,
    handleRate: (id: number, rating: number) => void
  ) => ReactNode;
}

function BooksLoader({ children }: Props) {
  // const [books, setBooks] = useState<BookType[]>([]);
  const [books, setBooks] = useContext(BooksContext);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await client.get('/books');
        setBooks(data);
      } catch (error) {
        if (error instanceof Error) setError(error);
      }
    }
    getData();
  }, []);

  return children(books, error);
}

export default BooksLoader;
