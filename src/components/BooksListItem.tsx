import { BookType } from '../data/books.ts';
import Rating from './Rating.tsx';

type Props = {
  book: BookType;
  onRate: (id: number, rating: number) => void;
};

function BooksListItem({ book, onRate }: Props) {
  const { title, author, isbn } = book;
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{author || 'Unknown'}</td>
        <td>{isbn}</td>
        <td>
          <Rating item={book} onRate={onRate} />
        </td>
      </tr>
    </>
  );
}

export default BooksListItem;
