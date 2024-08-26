import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    publication_year: "",
    category: "",
    rating: "",
    description: "",
    cover_image: "",
  });

  const bookList = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddBook = (e) => {
    e.preventDefault();
    let newId = bookList[bookList.length - 1].id + 1;
    newBook.id = newId;
    if (newBook.id) {
      dispatch(addBook(newBook));
      alert(`Book added in ${newBook.category} category`);
      setNewBook({
        id: "",
        title: "",
        author: "",
        publication_year: "",
        category: "",
        rating: "",
        description: "",
        cover_image: "",
      });
      navigate("/browseBooks");
    }
  };

  return (
    <>
      <div className="md:w-[600px] w-[400px] h-auto m-auto mt-20 bg-white p-5 text-center text-xl">
        Add Book
      </div>
      <div className="md:w-[600px] w-[400px] h-auto m-auto bg-white mb-5">
        <form className="py-5 flex flex-col gap-3" onSubmit={handleAddBook}>
          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Title <span className="text-red-500">*</span>
            </div>
            <input
              className="md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400 placeholder:text-sm"
              placeholder="Please Enter title"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, title: e.target.value })
              }
              required
              value={newBook.title}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Author <span className="text-red-500">*</span>
            </div>
            <input
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
              placeholder="Please Enter author name"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, author: e.target.value })
              }
              required
              value={newBook.author}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Publication_year <span className="text-red-500">*</span>
            </div>
            <input
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
              placeholder="Please Enter Publication year"
              type="number"
              onChange={(e) =>
                setNewBook({ ...newBook, publication_year: e.target.value })
              }
              required
              value={newBook.publication_year}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Select Category <span className="text-red-500">*</span>
            </div>
            <select
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400 cursor-pointer"
              value={newBook.category}
              onChange={(e) =>
                setNewBook({ ...newBook, category: e.target.value })
              }
            >
              <option value="Fiction">Fiction</option>
              <option value="Classic">Classic</option>
              <option value="Science Fiction">Science Fiction</option>
            </select>
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Rating <span className="text-red-500">*</span>
            </div>
            <input
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
              placeholder="Please Enter rating out of 5"
              type="number"
              onChange={(e) =>
                setNewBook({ ...newBook, rating: e.target.value })
              }
              required
              value={newBook.rating}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Description <span className="text-red-500">*</span>
            </div>
            <input
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
              placeholder="Please Enter Description"
              type="text"
              onChange={(e) =>
                setNewBook({ ...newBook, description: e.target.value })
              }
              required
              value={newBook.description}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto">
            <div>
              Coverimage Link <span className="text-red-500">*</span>
            </div>
            <input
              className="placeholder:text-sm md:w-[400px] w-[300px] h-[40px] outline-none rounded-md px-4 py-2 bg-gray-200 focus:border-2 focus:border-red-400"
              placeholder="Please Enter Image link"
              type="url"
              onChange={(e) =>
                setNewBook({ ...newBook, cover_image: e.target.value })
              }
              required
              value={newBook.cover_image}
            />
          </div>

          <div className="md:w-[400px] w-[300px] m-auto flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 hover:bg-black text-white rounded-md transition-all duration-300"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBook;
