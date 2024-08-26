/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="w-[200px] h-[300px] border-[1px] border-gray-300 rounded-md p-1 hover:scale-105 transition-all duration-300">
      <img src={book.cover_image} alt="" className="w-[100%] h-[70%]" />
      <div className="w-[100%] h-[15%] flex justify-center items-center">
        {book.title}
      </div>

      <div className="w-[100%] h-[15%] flex justify-center items-center">
        <Link
          to={`/bookDetails/${book.category}/${book.id}`}
          className="hover:text-blue-600"
        >
          View details &raquo;
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
