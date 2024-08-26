import { Link, useParams } from "react-router-dom";
import BookCard from "./BookCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const BooksCategory = () => {
  const [categoryList, setCategoryList] = useState([]);

  const { category } = useParams();
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    const newList = bookList.filter((book) => book.category === category);
    setCategoryList(newList);
  }, [bookList, category]);

  return (
    <div className="w-[98%] m-auto mt-20">
      <div className="w-[100%] h-auto bg-white mt-2 p-2">
        <div className="p-5 px-12 text-xl">{category}</div>
        <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
          {categoryList.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div className="w-[100%] h-[15%] flex justify-center items-center">
          <button className="px-4 py-2 rounded-md text-white bg-blue-700">
            <Link to="/browseBooks">{"<<"} BACK TO BROWSE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksCategory;
