import { MouseEvent } from 'react';
import { BookType } from '../data/books.ts';
import Rating from './Rating.tsx';

type Props = {
  book: BookType;
  onRate: (id: number, rating: number) => void;
};

function BooksListItem({ book, onRate }: Props) {
  function handleRate(e: MouseEvent<HTMLElement>) {
    const rating = (e.target as HTMLElement).closest<HTMLElement>(
      '[data-value]'
    )?.dataset.value;
    if (rating) {
      onRate(book.id, +rating);
    }
  }

  const { title, author, isbn } = book;
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{author || 'Unknown'}</td>
        <td>{isbn}</td>
        <td onClick={handleRate}>
          <Rating item={book} />
        </td>
      </tr>
    </>
  );
}

export default BooksListItem;
