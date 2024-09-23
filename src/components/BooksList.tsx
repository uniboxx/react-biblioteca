import classes from './BooksList.module.css';
import initialBooks from '../data/books.ts';
import BooksListItem from './BooksListItem.tsx';
import { useState } from 'react';

function BooksList() {
  const [books, setBooks] = useState(initialBooks);

  function handleRate(id: number, rating: number) {
    setBooks(prev => {
      return prev.map(book => {
        if (book.id === id) {
          book.rating = rating;
        }
        return book;
      });
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
