import { Link, useNavigate } from "react-router-dom";
import loginSvg from "../../assets/icons/Login-amico.svg";
import logo from "../../assets/logo/dreamjoblogo.png";
import logoDark from "../../assets/logo/dreamjoblogofordark.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const { theme, logIn, googleLogin } = useAuth();
  const navigate = useNavigate();

  //   Login
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginTost = toast.loading("Logging in");
    logIn(email, password)
      .then(() => {
        toast.success("Logged in Successfully", { id: loginTost });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect password. Please try again.", {
            id: loginTost,
          });
        } else if (errorCode === "auth/invalid-email") {
          toast.error("Incorrect Email. Please try again.", { id: loginTost });
        } else {
          toast.error("Logged in Failed", { id: loginTost });
        }
      });
  };

  //   Google Login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Successfully Login");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Logged in Failed");
        console.log(error.message);
      });
  };

  return (
    <div className="py-16  dark:bg-gray-800">
      <div className="flex container px-6 lg:px-8 xl:px-40 gap-20 mx-auto overflow-hidden items-center rounded-lg ">
        <div className="hidden bg-cover lg:block lg:w-1/2">
          <img className="w-auto" src={loginSvg} alt="" />
        </div>

        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <div className="xl:max-w-[300px] lg:max-w-[180px] md:max-w-[250px]">
              <img
                className="w-full"
                src={theme === "light" ? logo : logoDark}
                alt="Dream Jobs Logo"
              />
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 ">
              find your ideal career
            </span>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
          </div>

          <form onSubmit={handleLoginBtn}>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LoggingEmailAddress"
              >
                Email Address
              </label>
              <input
                required
                id="LoggingEmailAddress"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                name="email"
              />
            </div>

            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loggingPassword"
                >
                  Password
                </label>
              </div>

              <input
                required
                id="loggingPassword"
                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                name="password"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-job-primary dark:hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
              >
                Login
              </button>
            </div>
          </form>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
              or login with google
            </span>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="flex w-full items-center justify-center mt-4 text-white transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-black hover:bg-green-600 bg-job-primary dark:bg-white dark:hover:bg-gray-200"
          >
            <div className="px-4 py-2">
              <svg className="w-6 h-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill={theme === "light" ? "white" : "#FFC107"}
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill={theme === "light" ? "white" : "#FF3D00"}
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill={theme === "light" ? "white" : "#4CAF50"}
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill={theme === "light" ? "white" : "#1976D2"}
                />
              </svg>
            </div>

            <span className=" py-3 font-bold text-center">
              Login with Google
            </span>
          </button>
          <div className="mt-4 text-center dark:text-white">
            <Link to="/register" className="group">
              Don&apos;t have an account?{" "}
              <span className="font-bold group-hover:text-job-primary group-hover:underline duration-300">
                Register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
