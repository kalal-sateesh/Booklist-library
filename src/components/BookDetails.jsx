import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { pid } = useParams();
  const bookList = useSelector((state) => state.books);

  useEffect(() => {
    const currentId = parseInt(pid);
    const newList = bookList.filter((item) => item.id === currentId);
    setBook(newList);
  }, [bookList, pid]);

  return (
    <div className="md:w-[600px] w-[300px] m-auto bg-white mt-20 flex flex-col md:flex-row rounded-md">
      {book.length > 0 ? (
        <>
          <div className="w-[300px] h-[400px]">
            <img
              src={book[0].cover_image}
              alt="Cover-Image"
              className="w-[100%] h-[100%] p-2"
            />
          </div>
          <div className="w-[300px] h-[400px] p-3 flex flex-col gap-5">
            <div className="text-xl">
              Title :{" "}
              <span className="text-xl font-semibold">{book[0].title}</span>
            </div>
            <div className="text-xl">
              Author :{" "}
              <span className="text-xl font-semibold">{book[0].author}</span>
            </div>
            <div className="text-xl">
              Rating :{" "}
              <span className="text-xl font-semibold">{book[0].rating}</span>
            </div>
            <div className="text-xl">
              Description :{" "}
              <span className="text-sm">{book[0].description}</span>
            </div>
            <div className="flex w-[100%] h-[50px] items-center">
              <Link className="hover:text-blue-600 text-xl" to="/browseBooks">
                {"<<"} Back to Browse
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="text-xl flex justify-center bg-white mt-2 p-5">
            Loading...
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetails;
