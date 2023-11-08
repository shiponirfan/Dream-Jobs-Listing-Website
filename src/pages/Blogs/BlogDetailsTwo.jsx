import { FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import blog1 from "../../assets/images/blog2.2.jpg";
import blog2 from "../../assets/images/blog2.1.jpg";
import blog3 from "../../assets/images/blog2.jpg";
import { RiCalendarEventLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
const BlogDetailsTwo = () => {
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
        <title>Understanding Express.js and Nest.js - Blog</title>
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
              Understanding Express.js and Nest.js: A Comprehensive Comparison
            </h2>
            <p>
              When it comes to building web applications, choosing the right
              framework can make a world of difference in terms of efficiency,
              scalability, and maintainability. Two popular options for
              developing server-side applications in JavaScript are Express.js
              and Nest.js. In this blog post, we will delve into what these two
              frameworks are and explore their key features and use cases.
            </p>

            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Express.js: The Fast and Minimalistic Web Framework
            </h2>
            <div className="w-full h-[300px] lg:h-[400px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={blog2}
                alt="blog image"
              />
            </div>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Express.js
            </h2>
            <p>
              Express.js, often referred to simply as Express, is a fast and
              minimalistic web application framework for Node.js. It is known
              for its simplicity and flexibility, making it a popular choice for
              building web APIs and web applications. Express provides a robust
              set of features for web and mobile applications and follows the
              middleware pattern, which allows you to build custom features and
              functionality.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              NestJS
            </h2>
            <p>
              NestJS is a progressive Node. js framework that helps build
              server-side applications. Nest extends Node. js frameworks like
              Express or Fastify adding modular organization and a wide range of
              other libraries to take care of repetitive tasks. Nest. js is a
              server-side Node. js framework that&apos;s great for building
              highly testable and maintainable backend applications. You can
              create countless types of applications with Node. js; you&apos;re
              only limited by your applications&apos; features.
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
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Key Features of Express.js:
            </h2>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">Middleware: </span>Express.js
                utilizes middleware functions that can handle requests and
                responses. This middleware-based architecture makes it easy to
                add features like authentication, logging, and error handling to
                your application.
              </li>
              <li>
                <span className="font-bold">Routing: </span>Express provides a
                simple and efficient way to define routes, making it easy to
                create RESTful APIs.
              </li>
              <li>
                <span className="font-bold">Extensibility: </span>
                With a vast ecosystem of middleware and plugins, you can easily
                extend and customize your Express application to suit your
                specific needs.
              </li>
              <li>
                <span className="font-bold">Performance: </span> Express is
                known for its speed and low overhead. It&apos;s designed to be
                fast and efficient, making it a great choice for building
                high-performance applications.
              </li>
              <li>
                <span className="font-bold">Simplicity: </span>Express&apos;s
                minimalistic design allows developers to quickly get started and
                build applications with minimal boilerplate code.
              </li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Use Cases:
            </h2>
            <ul className="list-decimal">
              <li>Building RESTful APIs</li>
              <li>Creating lightweight web applications</li>
              <li>Microservices development</li>
              <li>Prototyping and experimentation</li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Nest.js: A Progressive Node.js Framework
            </h2>
            <p>
              Nest.js is a relatively new but rapidly growing framework for
              building efficient, scalable, and maintainable server-side
              applications. It&apos;s often referred to as a progressive
              framework because it allows developers to start with a basic setup
              and progressively add complexity as the application grows. Nest.js
              is built on top of Express, which means you get the benefits of
              Express along with a more structured and opinionated architecture.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Key Features of Nest.js:
            </h2>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">Modular Structure: </span>Nest.js
                encourages a modular and organized codebase, making it easier to
                manage larger applications.
              </li>
              <li>
                <span className="font-bold">Dependency Injection:</span>
                It leverages dependency injection, a design pattern that
                promotes code reusability and testability.
              </li>
              <li>
                <span className="font-bold">TypeScript:</span>
                Nest.js is built with TypeScript, which provides strong typing,
                static analysis, and code scalability.
              </li>
              <li>
                <span className="font-bold">Decorators: </span>The framework
                uses decorators for defining routes, middleware, and more,
                making the code cleaner and more readable.
              </li>
              <li>
                <span className="font-bold">Built-in Support: </span>Nest.js
                provides built-in support for WebSockets, GraphQL, and
                microservices, making it versatile and suitable for various use
                cases.
              </li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Use Cases:
            </h2>
            <ul className="list-decimal">
              <li>Developing scalable and maintainable APIs</li>
              <li>Real-time applications with WebSockets</li>
              <li>Building GraphQL APIs</li>
              <li>Microservices architecture</li>
              <li>Enterprise-level applications</li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Express.js vs. Nest.js: Which Should You Choose?
            </h2>
            <p>
              The choice between Express.js and Nest.js largely depends on your
              project&apos;s requirements and your personal preferences. If you
              need a minimalistic and highly flexible framework for small to
              medium-sized applications, Express.js may be the better choice.
              However, if you are working on a larger-scale project with a need
              for maintainability, organization, and TypeScript support, Nest.js
              could be the better fit.
            </p>
            <p>
              In summary, Express.js is known for its simplicity and
              flexibility, while Nest.js offers a structured and opinionated
              approach to building Node.js applications. Both have their
              strengths, and the choice ultimately depends on your specific use
              case.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Conclusion
            </h2>
            <p>
              Express.js and Nest.js are two remarkable JavaScript frameworks,
              each with its own set of features and strengths. Express is
              perfect for small to medium-sized projects and provides the
              freedom to build applications your way. Nest, on the other hand,
              is a more structured and scalable framework that excels in large,
              complex applications. Your choice between the two should be driven
              by the unique needs of your project and your development
              team&apos;s familiarity with the framework. Regardless of which
              one you choose, both Express and Nest are excellent tools for
              building robust server-side applications in the JavaScript
              ecosystem.
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

export default BlogDetailsTwo;
