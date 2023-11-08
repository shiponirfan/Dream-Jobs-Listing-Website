import { FiUser } from "react-icons/fi";
import { LuMessagesSquare } from "react-icons/lu";
import { BiCategory } from "react-icons/bi";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog1.1.png";
import blog3 from "../../assets/images/blog1.2.jpg";
import { RiCalendarEventLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
const BlogDetailsOne = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Send Successfully",
      text: "Check Your Mail For More Details",
      icon: "success",
      confirmButtonColor: "#00BF63",
    });
  };
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }
  return (
    <div>
      <ScrollToTopOnMount/>
      <Helmet>
        <title>What is an access token and refresh token? - Blog</title>
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
              What is an access token and refresh token?
            </h2>
            <p>
              In the world of modern web applications, security is paramount.
              User authentication and authorization are crucial aspects of web
              development, and they often involve the use of access tokens and
              refresh tokens. In this article, we&apos;ll explore what access
              tokens and refresh tokens are, how they work, and where you should
              store them on the client-side.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Access Tokens and Refresh Tokens: An Overview
            </h2>
            <div className="w-full h-[300px] lg:h-[400px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={blog2}
                alt="blog image"
              />
            </div>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              What is an Access Token?
            </h2>
            <p>
              An access token is a string of characters that is used to grant
              access to specific resources or perform actions on behalf of an
              authenticated user. Think of it as a digital key that allows you
              to open certain doors within an application. When a user logs in
              or is authenticated, they receive an access token that is included
              in each subsequent request to the server. This token acts as proof
              that the user has the necessary permissions to access the
              requested resources.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              What is a Refresh Token?
            </h2>
            <p>
              A refresh token is a separate token that accompanies the access
              token. Its primary purpose is to obtain a new access token when
              the current access token expires. Access tokens have a limited
              lifespan for security reasons. When an access token expires, the
              refresh token can be used to obtain a new access token without
              requiring the user to re-enter their credentials. This provides a
              smoother user experience and enhances security by reducing the
              risk of long-lived access tokens.
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
              How Access Tokens and Refresh Tokens Work
            </h2>
            <p>
              Now that we know what access and refresh tokens are let&apos;s
              dive into how they work in practice:
            </p>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">User Authentication: </span>When a
                user logs in or authenticates, the server validates their
                credentials and generates both an access token and a refresh
                token.
              </li>
              <li>
                <span className="font-bold">Access Token Usage: </span>The
                client includes the access token in the header of each HTTP
                request when requesting protected resources. The server
                validates the access token for each request to ensure that the
                user has the required permissions.
              </li>
              <li>
                <span className="font-bold">Access Token Expiration: </span>
                Access tokens typically have a relatively short lifespan, often
                measured in minutes. When an access token expires, the client
                receives a 401 Unauthorized response.
              </li>
              <li>
                <span className="font-bold">Refresh Token Usage: </span>When the
                access token expires, the client can use the refresh token to
                request a new access token without prompting the user to log in
                again. This process extends the user&apos;s session and
                maintains security.
              </li>
              <li>
                <span className="font-bold">Token Revocation: </span>It&apos;s
                important to note that refresh tokens can usually only be used
                once to obtain a new access token. If a refresh token is used,
                it is invalidated and can no longer be used.
              </li>
              <li>
                <span className="font-bold">
                  Log Out and Token Revocation:{" "}
                </span>
                When a user logs out or revokes their access, both the access
                token and the refresh token become invalid.
              </li>
            </ul>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Where to Store Access and Refresh Tokens on the Client-side
            </h2>
            <p>
              One of the critical considerations when working with access and
              refresh tokens is where to store them securely on the client-side.
              Here are some common approaches:
            </p>
            <ul className="list-decimal">
              <li>
                <span className="font-bold">HTTP Cookies: </span>Storing tokens
                as HTTP cookies is a widely used method. Cookies are sent
                automatically with every HTTP request, making it a convenient
                option. However, they are vulnerable to certain attacks like
                Cross-Site Scripting (XSS).
              </li>
              <li>
                <span className="font-bold">
                  Browser&apos;s Local Storage:{" "}
                </span>
                Access tokens can be stored in the browser&apos;s local storage,
                which is accessible via JavaScript. This method is convenient
                but can be vulnerable to XSS attacks.
              </li>
              <li>
                <span className="font-bold">
                  Browser&apos;s Session Storage:{" "}
                </span>
                Similar to local storage, session storage is another option.
                However, it has the same security concerns related to XSS
                attacks.
              </li>
              <li>
                <span className="font-bold">In-memory Storage: </span>Storing
                tokens in memory variables within your application is the most
                secure option. It offers protection against XSS attacks, but you
                may need to handle token persistence between page refreshes or
                browser sessions.
              </li>
              <li>
                <span className="font-bold">Secure HTTP Cookies: </span>You can
                use HttpOnly and Secure flags with cookies to make them more
                secure against XSS attacks. However, this approach might not
                work for single-page applications (SPAs).
              </li>
            </ul>
            <p>
              The choice of where to store tokens largely depends on your
              application&apos;s architecture and security requirements. Keep in
              mind that while in-memory storage is the most secure, it may not
              be feasible for all scenarios, especially for SPAs.
            </p>
            <h2 className="text-2xl font-bold hover:text-job-primary duration-300">
              Conclusion
            </h2>
            <p>
              Access tokens and refresh tokens play a vital role in user
              authentication and maintaining secure user sessions in web
              applications. Understanding how they work and where to store them
              on the client-side is essential for building robust and secure web
              applications. Make your choice based on your application&apos;s
              specific requirements and always prioritize security to protect
              your users and their data.
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

export default BlogDetailsOne;
