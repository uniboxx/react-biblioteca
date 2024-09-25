import { useContext } from 'react';
import BooksContext from '../contexts/BooksContext';
import { produce } from 'immer';
import { StarBorder, Star } from '@mui/icons-material';
import { BookType } from './BooksLoader';

interface Props {
  book: BookType;
}

function BooksListItem({ book }: Props) {
  const [, setBooks] = useContext(BooksContext);

  function handleRate(id: number, rating: number) {
    if (setBooks)
      setBooks((prevState) => {
        return produce(prevState, (draftState: BookType[]) => {
          if (draftState)
            draftState?.map((book: BookType) => {
              if (book.id === id) {
                book.rating = rating;
              }
              return book;
            });
        });
      });
  }

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : 'Unknown'}</td>
      <td>{book.isbn}</td>
      <td>
        {new Array(5).fill('').map((item, i) => (
          <button
            className="ratingButton"
            key={i}
            onClick={() => handleRate(book.id, i + 1)}
          >
            {book.rating < i + 1 ? <StarBorder /> : <Star />}
          </button>
        ))}
      </td>
    </tr>
  );
}

export default BooksListItem;
