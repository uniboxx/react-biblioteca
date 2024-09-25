import { createContext } from 'react';
import { BookType } from '../components/BooksLoader';

const BooksContext = createContext([null, (prev?: BookType[]) => {}]);

export default BooksContext;
