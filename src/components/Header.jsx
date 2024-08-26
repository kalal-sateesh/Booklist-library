import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="w-[100%] h-16 bg-[#FFFFFF] flex items-center justify-evenly fixed top-0 z-10">
        <div>
          <Link className="hover:text-red-500" to="/">
            Home
          </Link>
        </div>
        <div>
          <Link className="hover:text-red-500" to="/browseBooks">
            Browse Books
          </Link>
        </div>
        <div>
          <Link className="hover:text-red-500" to="/addBook">
            Add Book
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
