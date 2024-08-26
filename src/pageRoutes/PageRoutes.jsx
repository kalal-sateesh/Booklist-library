import { Navigate, Route, Routes, useParams } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BrowseBooksPage from "../pages/BrowseBooksPage";
import AddBookPage from "../pages/AddBookPage";
import BooksCategory from "../components/BooksCategory";
import BookDetailsPage from "../pages/BookDetailsPage";
import ErrorPage from "../pages/ErrorPage";

const PageRoutes = () => {
  const ValidatedBooksCategory = () => {
    const { category } = useParams();
    const validCategories = ["fiction", "classic", "science fiction"];
    if (validCategories.includes(category.toLowerCase())) {
      return <BooksCategory />;
    }
    return <Navigate to="*" />;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/browseBooks" element={<BrowseBooksPage />} />
      <Route
        path="/browseBooks/:category"
        element={<ValidatedBooksCategory />}
      />
      <Route path="/addBook" element={<AddBookPage />} />
      <Route path="/bookDetails/:category/:pid" element={<BookDetailsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default PageRoutes;
