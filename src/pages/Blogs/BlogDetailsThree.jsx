import { FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import blog1 from "../../assets/images/blog3.3.jpg";
import blog2 from "../../assets/images/blog3.jpg";
import blog3 from "../../assets/images/blog3.1.jpg";
import { RiCalendarEventLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const BlogDetailsThree = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Send Successfully",
      text: "Check Your Mail For More Details",
      icon: "success",
      confirmButtonColor: "#00BF63",
    });
  };
  return (
    <div>
      <Helmet>
        <title>
          Server-Side Applications with Node.js, Express, and MongoDB - Blog
        </title>
      </Helmet>
      <div className="w-full h-[220px] md:h-[350px] lg:h-[400px] xl:h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={blog1}
          alt="blog image"
        />
      </div>
      <div className="xl:py-20 py-10 dark:bg-gray-800 dark:text-white">
        <div className="container px-6 lg:px-8  mx-auto flex flex-col gap-10">
          <div className="space-y-5 border-2 md:p-10 p-5 rounded-lg group">
            <div className="flex items-center gap-2 justify-between md:justify-normal md:gap-6 pb-4">
              <div className="flex  flex-col md:flex-row md:items-center  md:gap-6">
                <h3 className="flex items-center gap-2">
                  <FiUser className="text-job-primary" /> Admin
                </h3>
                <h3 className="flex items-center gap-2">
                  <LuMessagesSquare className="text-job-primary" /> 3 Comments
                </h3>
              </div>
              <div className="flex  flex-col md:flex-row md:items-center  md:gap-6">
                <h3 className="flex items-center gap-2">
                  <BiCategory className="text-job-primary" /> Development
                </h3>
                <h3 className="flex items-center gap-2 ">
                  <RiCalendarEventLine className="text-job-primary" /> Nov 8,
                  2023
                </h3>
              </div>
            </div>

            <h2 className="md:text-4xl text-2xl font-bold hover:text-job-primary duration-300">
              Server-Side Applications with Node.js, Express, and MongoDB
            </h2>
            <p>
              In the realm of web development, server-side applications play a
              crucial role in handling data, managing requests, and facilitating
              the interaction between clients and databases. Among the myriad of
              technologies available, Node.js, Express.js, and MongoDB stand out
              as a powerful trio for creating scalable and efficient server-side
              code. In this blog article, we will explore the foundations and
              advantages of using Node.js, Express.js, and MongoDB for
              server-side development.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Node.js: The Runtime Engine
            </h2>
            <p>
              Node.js is an open-source, server-side JavaScript runtime built on
              Chrome&apos;s V8 JavaScript engine. It allows developers to
              execute JavaScript code on the server, making it an ideal choice
              for building scalable and high-performance applications. Here are
              some key aspects of Node.js:
            </p>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">Non-Blocking I/O: </span>Node.js
                uses an event-driven, non-blocking I/O model, which means it can
                handle multiple concurrent connections without blocking the
                execution of code. This makes it highly efficient for tasks like
                handling HTTP requests.
              </li>
              <li>
                <span className="font-bold">NPM (Node Package Manager): </span>
                NPM is the default package manager for Node.js, providing a vast
                ecosystem of libraries and modules that can be easily integrated
                into your applications.
              </li>
              <li>
                <span className="font-bold">JavaScript Everywhere: </span>
                With Node.js, you can use the same language (JavaScript) on both
                the client and server sides, promoting code reusability and
                consistency.
              </li>
            </ul>
            <div className="w-full h-[300px] lg:h-[400px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={blog2}
                alt="blog image"
              />
            </div>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Express.js: The Web Application Framework
            </h2>
            <p>
              Express.js, often referred to as Express, is a minimal and
              flexible web application framework built on top of Node.js. It
              simplifies the process of building robust web applications and
              APIs. Key features of Express.js include:
            </p>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">Middleware: </span>Express.js makes
                extensive use of middleware, which are functions that handle
                requests and responses. Middleware allows you to add custom
                features, authentication, logging, and error handling to your
                application.
              </li>
              <li>
                <span className="font-bold">Routing: </span>Express provides a
                clean and efficient way to define routes, making it easy to
                create RESTful APIs and manage different HTTP methods (GET,
                POST, PUT, DELETE).
              </li>
              <li>
                <span className="font-bold">Extensibility: </span>
                The Express ecosystem includes a wealth of middleware and
                plugins that can be used to extend and customize your
                application to suit your specific needs.
              </li>
              <li>
                <span className="font-bold">Performance: </span>
                Express is known for its speed and low overhead, making it a
                great choice for building high-performance web applications.
              </li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              MongoDB: The NoSQL Database
            </h2>
            <p>
              MongoDB is a popular NoSQL database that is designed for
              scalability and flexibility. It stores data in a flexible,
              JSON-like format, making it an excellent choice for server-side
              applications. Key features of MongoDB include:
            </p>
            <div className="flex flex-col md:flex-row gap-12 py-5">
              <div className="w-full lg:h-[250px] xl:h-[350px]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={blog1}
                  alt="blog image"
                />
              </div>
              <div className="w-full lg:h-[250px] xl:h-[350px]">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={blog3}
                  alt="blog image"
                />
              </div>
            </div>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">Schema-less: </span>MongoDB is
                schema-less, meaning you can store documents with varying
                structures in the same collection. This flexibility is
                advantageous for applications with evolving data models.
              </li>
              <li>
                <span className="font-bold">Horizontal Scalability: </span>
                MongoDB can be easily scaled horizontally, allowing your
                application to handle large amounts of data and high traffic.
              </li>
              <li>
                <span className="font-bold">Document-Oriented: </span>
                MongoDB uses a document-oriented data model, making it a natural
                choice for storing and querying complex data structures.
              </li>
              <li>
                <span className="font-bold">JSON-Like Documents: </span>Data is
                stored in BSON (Binary JSON) format, which is similar to JSON,
                making it easy to work with data in the application code.
              </li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Bringing It All Together:
            </h2>
            <p>
              Node.js, Express.js, and MongoDB make a powerful combination for
              building server-side applications. Node.js provides the runtime
              environment for JavaScript, Express simplifies web application
              development, and MongoDB offers a flexible and scalable database
              solution. When used together, they enable developers to create
              efficient, high-performance applications that can scale with ease.
            </p>

            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Conclusion:
            </h2>
            <p>
              In the world of server-side development, Node.js, Express.js, and
              MongoDB have become a dominant force, empowering developers to
              build versatile, scalable, and robust applications. Whether you
              are creating web APIs, real-time applications, or data-driven
              platforms, this trio offers a solid foundation for your
              server-side code. By leveraging their features and combining them
              effectively, you can unlock the potential to develop innovative
              and performant applications for a wide range of use cases.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 xl:p-10 p-5 rounded-lg">
            <h2 className="font-bold text-xl">Send Message Us</h2>
            <form onSubmit={handleSendMessage}>
              <div className="mt-4">
                <input
                  placeholder="Subject"
                  className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="mt-4">
                <input
                  placeholder="E-mail"
                  required
                  className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="mt-4">
                <input
                  placeholder="Phone"
                  className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="number"
                  name="phone"
                />
              </div>

              <div className="mt-4">
                <textarea
                  placeholder="Message"
                  className="block textarea textarea-lg w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  name="message"
                />
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className=" px-8 py-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-job-primary dark:hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsThree;
