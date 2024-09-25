import BooksList from './components/BooksList';
import BooksListContainer from './components/BooksListContainer';
import ButtonTest from './components/Button';
// import MyComponent from './components/MyComponent';
// import MyComponent2 from './components/MyComponent2';
import Timer from './components/Timer';
import BooksLoader from './components/BooksLoader';
import InAppTest from './components/InAppTest';
import BooksProvider from './components/BooksProvider';

function App() {
  return (
    <div>
      <h1>Books management</h1>
      <BooksProvider>
        <BooksLoader>
          {(books, error, handleRate) => (
            <BooksList books={books} error={error} handleRate={handleRate} />
          )}
        </BooksLoader>
      </BooksProvider>
      {/* <Timer /> */}
      {/* <ButtonTest /> */}
      {/* <InAppTest /> */}
    </div>
  );
}

export default App;
