import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import jobImg from "../../assets/images/job2.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.2.jpg";
import blog3 from "../../assets/images/blog3.3.jpg";
import { Link } from "react-router-dom";
import { RiCalendarEventLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";
const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blogs - Dream Jobs</title>
      </Helmet>
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
        <div className="container mx-auto grid xl:grid-cols-3 2xl:gap-10 gap-6 xl:px-0 lg:px-8 px-6">
          <div className="space-y-4 border-2 2xl:p-8 p-4 rounded-lg group">
            <div className="w-full xl:h-[200px] md:h-[400px] h-[200px] overflow-hidden rounded-lg">
              <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                <img
                  className="w-full group-hover:scale-110 duration-700 h-full object-cover rounded-lg"
                  src={blog1}
                  alt="blog image"
                />
              </Link>
            </div>
            <div className="flex md:items-center md:gap-6 gap-2 flex-col md:flex-row pb-4">
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
              <h2 className="text-2xl font-bold hover:text-job-primary duration-300 cursor-pointer">
                Access Tokens and Refresh Tokens, How They Work on the
                Client-side
              </h2>
            </Link>
            <p className="pb-3">
              In the world of modern web applications, security is paramount.
              User authentication and authorization are crucial aspects of web
              development, and they often...
            </p>
            <div className="flex items-center justify-between border-t-2 border-dashed pt-7">
              <Link to="/blog/what-is-an-access-token-and-refresh-token?">
                <button className="font-bold text-xl text-job-primary border-b-2  border-job-primary hover:text-black duration-300 hover:border-black">
                  Read More »
                </button>
              </Link>
              <h3 className="flex items-center gap-2 text-xl font-medium">
                <RiCalendarEventLine className="text-job-primary" /> Nov 8, 2023
              </h3>
            </div>
          </div>
          <div className="space-y-4 border-2 2xl:p-8 p-4 rounded-lg group">
            <div className="w-full xl:h-[200px] md:h-[400px] h-[200px] overflow-hidden rounded-lg">
              <Link to="/blog/understanding-expressjs-and-nestjs">
                <img
                  className="w-full group-hover:scale-110 duration-700 h-full object-cover rounded-lg"
                  src={blog2}
                  alt="blog image"
                />
              </Link>
            </div>
            <div className="flex md:items-center md:gap-6 gap-2 flex-col md:flex-row pb-4">
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
            <Link to="/blog/understanding-expressjs-and-nestjs">
              <h2 className="text-2xl font-bold hover:text-job-primary duration-300 cursor-pointer">
                Understanding Express.js and Nest.js: A Comprehensive Comparison
              </h2>
            </Link>
            <p className="pb-3">
              When it comes to building web applications, choosing the right
              framework can make a world of difference in terms of efficiency,
              scalability, and maintainability...
            </p>
            <div className="flex items-center justify-between border-t-2 border-dashed pt-7">
              <Link to="/blog/understanding-expressjs-and-nestjs">
                <button className="font-bold text-xl text-job-primary border-b-2  border-job-primary hover:text-black duration-300 hover:border-black">
                  Read More »
                </button>
              </Link>
              <h3 className="flex items-center gap-2 text-xl font-medium">
                <RiCalendarEventLine className="text-job-primary" /> Nov 8, 2023
              </h3>
            </div>
          </div>
          <div className="space-y-4 border-2 2xl:p-8 p-4 rounded-lg group">
            <div className="w-full xl:h-[200px] md:h-[400px] h-[200px] overflow-hidden rounded-lg">
              <Link to="/blog/server-side-applications-with-nodejs-express-and-mongodb">
                <img
                  className="w-full group-hover:scale-110 duration-700 h-full object-cover rounded-lg"
                  src={blog3}
                  alt="blog image"
                />
              </Link>
            </div>
            <div className="flex md:items-center md:gap-6 gap-2 flex-col md:flex-row pb-4">
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
            <Link to="/blog/server-side-applications-with-nodejs-express-and-mongodb">
              <h2 className="text-2xl font-bold hover:text-job-primary duration-300 cursor-pointer">
                Building Robust Server-Side Applications with Node.js, Express,
                and MongoDB
              </h2>
            </Link>
            <p className="pb-3 ">
              In the realm of web development, server-side applications play a
              crucial role in handling data, managing requests, and facilitating
              the...
            </p>
            <div className="flex items-center justify-between border-t-2 border-dashed pt-7">
              <Link to="/blog/server-side-applications-with-nodejs-express-and-mongodb">
                <button className="font-bold text-xl text-job-primary border-b-2  border-job-primary hover:text-black duration-300 hover:border-black">
                  Read More »
                </button>
              </Link>
              <h3 className="flex items-center gap-2 text-xl font-medium">
                <RiCalendarEventLine className="text-job-primary" /> Nov 6, 2023
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
