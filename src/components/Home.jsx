import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const Home = () => {
  const booksData = useSelector((state) => state.books);
  // console.log(booksData)
  return (
    <div className="w-[98%] m-auto mt-20">
      <div className="w-[100%] h-auto mt-2 bg-white flex flex-col p-5 gap-3">
        <div className="sm:text-xl font-semibold">
          Welcome to the Online Library System Portal!
        </div>
        <div className="text-sm">
          Dive into a world of endless knowledge and imagination. Whether
          you&apos;re a fan of timeless Fiction, seeking insights from
          Non-Fiction, exploring futuristic realms in Sci-Fi, or browsing
          through a variety of other genres, we’ve got something for every
          reader.
        </div>
        <div className="text-sm">
          Begin your journey now by exploring our diverse collection, organizing
          your personal library, and discovering new favorite reads. Happy
          reading!
        </div>
      </div>

      <div className="w-[100%] h-auto bg-white mt-2">
        <div className="p-5 px-12 text-xl">Most Popular</div>
        <div className="flex justify-center items-center px-5 py-2 flex-wrap gap-2">
          {booksData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
