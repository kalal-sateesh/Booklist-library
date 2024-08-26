import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

const BrowseBooks = () => {
  const [fiction, setFiction] = useState([]);
  const [scienceFiction, setScienceFiction] = useState([]);
  const [classic, setClassic] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const bookList = useSelector((state) => state.books);

  const filteredBooks = bookList.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  useEffect(() => {
    const newFictionList = bookList.filter(
      (book) => book.category.toLowerCase() === "Fiction".toLowerCase()
    );
    setFiction(newFictionList);
    const newScienceFictionList = bookList.filter(
      (book) => book.category.toLowerCase() === "Science Fiction".toLowerCase()
    );
    setScienceFiction(newScienceFictionList);

    const newClassicList = bookList.filter(
      (book) => book.category.toLowerCase() === "Classic".toLowerCase()
    );
    setClassic(newClassicList);
  }, [bookList]);

  return (
    <div className="w-[98%] m-auto mt-20">
      <div className="w-[100%] bg-white h-auto flex justify-center items-center p-5 mt-2">
        <input
          className="md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
          placeholder="Search book by title"
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {searchValue.length > 0 ? (
        <>
          <div className="w-[100%] h-auto bg-white mt-2 p-2">
            <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-[100%] h-auto bg-white mt-2 p-2">
            <div className="p-5 px-12 text-xl">Fiction</div>
            <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
              {fiction.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="w-[100%] h-[15%] flex justify-center items-center">
              <button className="px-4 py-2 rounded-md text-white bg-blue-700">
                <Link to="/browseBooks/Fiction">View More &raquo;</Link>
              </button>
            </div>
          </div>

          <div className="w-[100%] h-auto bg-white mt-2 p-2">
            <div className="p-5 px-12 text-xl">Science Fiction</div>
            <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
              {scienceFiction.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="w-[100%] h-[15%] flex justify-center items-center">
              <button className="px-4 py-2 rounded-md text-white bg-blue-700">
                <Link to="/browseBooks/Science Fiction">View More &raquo;</Link>
              </button>
            </div>
          </div>

          <div className="w-[100%] h-auto bg-white mt-2 p-2">
            <div className="p-5 px-12 text-xl">Classic</div>
            <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
              {classic.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            <div className="w-[100%] h-[15%] flex justify-center items-center">
              <button className="px-4 py-2 rounded-md text-white bg-blue-700">
                <Link to="/browseBooks/Classic">View More &raquo;</Link>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BrowseBooks;
