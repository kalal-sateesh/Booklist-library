import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="w-[98%] h-auto bg-white m-auto mt-20 p-5 flex justify-center items-center flex-col gap-3">
      <div className="text-lg flex justify-center items-center p-2">
        Unfortunately the page you are looking for has been not found or deleted
      </div>
      <Link to="/">
        <button className="bg-[#2874F0] text-white text-lg cursor-pointer rounded-md border-none px-3 py-2">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default Error;
