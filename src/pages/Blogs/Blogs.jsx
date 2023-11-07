import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import jobImg from "../../assets/images/job2.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import { Link } from "react-router-dom";
import { RiCalendarEventLine } from "react-icons/ri";
const Blogs = () => {
  return (
    <div>
      <Breadcrumbs
        image={jobImg}
        name={"Blogs"}
        breadCrumbs={
          <li>
            <span>{"Blogs"}</span>
          </li>
        }
      ></Breadcrumbs>
      <div className="xl:py-28 lg:py-20 py-10 dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto flex gap-10">
          <div className="w-2/3 space-y-10">
            <div className="space-y-4 border-2 p-10 rounded-lg group">
              <div className="w-full h-[500px] overflow-hidden rounded-lg">
                <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                  <img
                    className="w-full group-hover:scale-110 duration-700 h-full object-cover rounded-lg"
                    src={blog1}
                    alt="blog image"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-6 pb-4">
                <h3 className="flex items-center gap-2">
                  <FiUser className="text-job-primary" /> Admin
                </h3>
                <h3 className="flex items-center gap-2">
                  <LuMessagesSquare className="text-job-primary" /> 3 Comments
                </h3>
                <h3 className="flex items-center gap-2">
                  <BiCategory className="text-job-primary" /> Development
                </h3>
              </div>
              <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                <h2 className="text-4xl font-bold hover:text-job-primary duration-300 cursor-pointer">
                  What is an access token and refresh token?
                </h2>
              </Link>
              <p className="pb-3">
                In the world of modern web applications, security is paramount.
                User authentication and authorization are crucial aspects of web
                development, and they often involve the use of access tokens and
                refresh tokens. In this article, we&apos;ll explore what access
                tokens and refresh tokens are, how they work, and where you
                should store them on the client-side.
              </p>
              <div className="flex items-center justify-between border-t-2 border-dashed pt-7">
                <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                  <button className="font-bold text-xl text-job-primary border-b-2  border-job-primary hover:text-black duration-300 hover:border-black">
                    Read More »
                  </button>
                </Link>
                <h3 className="flex items-center gap-2 text-xl font-medium">
                  <RiCalendarEventLine className="text-job-primary" /> Nov 8,
                  2023
                </h3>
              </div>
            </div>
            <div className="space-y-4 border-2 p-10 rounded-lg group">
              <div className="w-full h-[500px] overflow-hidden rounded-lg">
                <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                  <img
                    className="w-full group-hover:scale-110 duration-700 h-full object-cover rounded-lg"
                    src={blog1}
                    alt="blog image"
                  />
                </Link>
              </div>
              <div className="flex items-center gap-6 pb-4">
                <h3 className="flex items-center gap-2">
                  <FiUser className="text-job-primary" /> Admin
                </h3>
                <h3 className="flex items-center gap-2">
                  <LuMessagesSquare className="text-job-primary" /> 3 Comments
                </h3>
                <h3 className="flex items-center gap-2">
                  <BiCategory className="text-job-primary" /> Development
                </h3>
              </div>
              <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                <h2 className="text-4xl font-bold hover:text-job-primary duration-300 cursor-pointer">
                  What is an access token and refresh token?
                </h2>
              </Link>
              <p className="pb-3">
                In the world of modern web applications, security is paramount.
                User authentication and authorization are crucial aspects of web
                development, and they often involve the use of access tokens and
                refresh tokens. In this article, we&apos;ll explore what access
                tokens and refresh tokens are, how they work, and where you
                should store them on the client-side.
              </p>
              <div className="flex items-center justify-between border-t-2 border-dashed pt-7">
                <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                  <button className="font-bold text-xl text-job-primary border-b-2  border-job-primary hover:text-black duration-300 hover:border-black">
                    Read More »
                  </button>
                </Link>
                <h3 className="flex items-center gap-2 text-xl font-medium">
                  <RiCalendarEventLine className="text-job-primary" /> Nov 8,
                  2023
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
