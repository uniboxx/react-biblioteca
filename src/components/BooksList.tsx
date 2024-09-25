import { produce } from 'immer';
import { books } from '../data/data';
import { useEffect, useMemo, useReducer } from 'react';
import { StarBorder, Star } from '@mui/icons-material';
import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
});

type BooksType = BookType[];
type Dispatch = (action: BookAction) => void;

interface BookType {
  id: number;
  rating: number;
  title: string;
  author: string;
  isbn: string;
}

type BookAction = {
  type: string;
  payload: BooksType;
};

function middleware(dispatch: Dispatch) {
  return async function (action: BookAction) {
    switch (action.type) {
      case 'FETCH':
        const { data } = await client.get('/books');
        dispatch({ type: 'LOAD_SUCCESS', payload: data });
        break;
      case 'RATE':
        console.log(action.payload);
        await client.patch(`/books/${action.payload.id}`, action.payload);
        dispatch({
          type: 'RATE_SUCCESS',
          payload: { id: action.payload.id, rating: action.payload.rating },
        });
        break;
    }
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_SUCCESS':
      return action.payload;
    case 'RATE_SUCCESS':
      return produce(state, (draftState) => {
        const index = draftState.findIndex(
          (book) => book.id === action.payload.id
        );
        draftState[index].rating = action.payload.rating;
      });
    default:
      return state;
  }
}

function BooksList() {
  const [books, dispatch] = useReducer(reducer, []);

  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);

  useEffect(() => {
    middlewareDispatch({ type: 'FETCH' });
  }, [middlewareDispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books?.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  {new Array(5).fill('').map((item, i) => (
                    <BooksListItem
                      book={book}
                      key={i}
                      i={i}
                      middlewareDispatch={middlewareDispatch}
                    />
                  ))}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default BooksList;

interface ItemProps {
  book: BookType;
  i: number;
  middlewareDispatch: (action: BookAction) => void;
}

function BooksListItem({ book, i, middlewareDispatch }: ItemProps) {
  return (
    <button
      className="ratingButton"
      onClick={() =>
        middlewareDispatch({
          type: 'RATE',
          payload: { id: book.id, rating: i + 1 },
        })
      }
    >
      {book.rating < i + 1 ? <StarBorder /> : <Star />}
    </button>
  );
}
