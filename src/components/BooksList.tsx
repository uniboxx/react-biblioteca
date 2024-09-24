import classes from './BooksList.module.css';
import initialBooks, { BookType } from '../data/books.ts';
import BooksListItem from './BooksListItem.tsx';
import { useEffect, useState } from 'react';
import { produce } from 'immer';

function BooksList() {
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setBooks(initialBooks);
    }, 2000);
  }, []);

  useEffect(() => {
    console.log('Elements in the state: ', books.length);
    console.log('Table rows: ', document.querySelectorAll('tbody tr').length);
  });

  function handleRate(id: number, rating: number) {
    setBooks(prevState => {
      //- usando immer
      return produce(prevState, draftState => {
        const index = draftState.findIndex(book => book.id === id);
        draftState[index].rating = rating;
      });
      //- modifica annidata dell'oggetto originale
      // const index = prevState.findIndex(book => book.id === id);o di
      // prevState[index].rating = rating;
      // debugger;
      // return prevState;

      //- modifica della proprietà dell'oggetto originale
      // return prevState.map(book => {
      //   if (book.id === id) {
      //     book.rating = rating;
      //   }
      //   return book;
      // });
    });
  }

  if (books.length === 0) {
    return <div>No books found</div>;
  } else
    return (
      <>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <BooksListItem key={book.id} book={book} onRate={handleRate} />
            ))}
          </tbody>
        </table>
      </>
    );
}

export default BooksList;
