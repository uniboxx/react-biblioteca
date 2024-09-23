export type BookType = {
  id: number;
  title: string;
  author: string;
  isbn: string;
  rating: number;
};

const books: Array<BookType> = [
  {
    id: 1,
    title: 'JavaScript—The Comprehensive Guide',
    author: 'Philip Ackermann',
    isbn: '978-3836286299',
    rating: 5,
  },
  {
    id: 2,
    title: 'Clean Code',
    author: 'Robert Martin',
    isbn: '978-0132350884',
    rating: 2,
  },
  {
    id: 3,
    title: 'Design Patterns',
    author: 'Erich Gamma',
    isbn: '978-0201633610',
    rating: 5,
  },
];

export default books;
