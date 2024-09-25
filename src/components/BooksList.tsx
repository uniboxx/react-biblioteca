import classes from './BooksList.module.css';
// import initialBooks, { BookType } from '../data/data.json';
import BooksListItem from './BooksListItem.tsx';

function BooksList({ error, books }: Props) {
  if (error !== null) {
    return <div>An error has occurred: {error.message}</div>;
  } else if (books && books.length === 0) {
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
            {books?.map(book => (
              <BooksListItem key={book.id} book={book} />
            ))}
          </tbody>
        </table>
      </>
    );
}

export default BooksList;
