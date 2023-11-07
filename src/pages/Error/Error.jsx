import Lottie from "lottie-react";
import errorLottie from "../../assets/lottie/error404.json";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";
const Error = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center dark:bg-gray-900">
      <div className="max-w-3xl mx-auto ">
        <Lottie animationData={errorLottie} loop={true} />;
      </div>
      <Link to="/">
        <button className="hover:bg-job-primary dark:hover:bg-white dark:hover:text-black bg-black hover:scale-105 dark:bg-job-primary duration-300 text-white font-medium text-lg py-3 px-6 rounded-md flex justify-center items-center mt-5">
          <FiHome className="mr-2" /> Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
