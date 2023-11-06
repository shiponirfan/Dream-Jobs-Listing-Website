import { Link, NavLink } from "react-router-dom";
import { PiSignInBold, PiSignOutBold } from "react-icons/pi";
import logo from "../../assets/logo/dreamjoblogo.png";
import logoDark from "../../assets/logo/dreamjoblogofordark.png";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  // Dark Mode Theme Toggles
  const { user, theme, setTheme, logOut } = useAuth();
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      setTheme("light");
    }
  };
  // Logout Button
  const handleLogoutBtn = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        toast.error("Logout Failed");
        console.log(error.message);
      });
  };
  const navMenu = (
    <>
      <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
        <NavLink
          className={({ isActive }) => (isActive ? "text-job-primary" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
        <NavLink
          className={({ isActive }) => (isActive ? "text-job-primary" : "")}
          to="/all-jobs"
        >
          All Jobs
        </NavLink>
      </li>
      {user?.email ? (
        <>
          <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
            <NavLink
              className={({ isActive }) => (isActive ? "text-job-primary" : "")}
              to="/applied-jobs"
            >
              Applied Jobs
            </NavLink>
          </li>
          <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
            <NavLink
              className={({ isActive }) => (isActive ? "text-job-primary" : "")}
              to="/add-job"
            >
              Add A Job
            </NavLink>
          </li>
          <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
            <NavLink
              className={({ isActive }) => (isActive ? "text-job-primary" : "")}
              to="/my-jobs"
            >
              My Jobs
            </NavLink>
          </li>
        </>
      ) : (
        ""
      )}
      <li className="hover:text-job-primary dark:hover:text-job-primary duration-300">
        <NavLink
          className={({ isActive }) => (isActive ? "text-job-primary" : "")}
          to="/blogs"
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="dark:bg-gray-900 dark:text-white drop-shadow-md bg-white xl:py-5 py-4">
      <nav className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3 lg:gap-6 xl:gap-16 ">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content btn btn-circle dark:bg-blue-950 dark:text-white dark:border-blue-950">
                <label htmlFor="my-drawer" className="drawer-button">
                  <svg
                    className="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content dark:bg-job-dark-primary dark:text-white">
                  {navMenu}
                </ul>
              </div>
            </div>
          </div>

          <div className="xl:max-w-[300px] lg:max-w-[180px] md:max-w-[250px]">
            <Link to="/">
              <img
                className="w-full"
                src={theme === "light" ? logo : logoDark}
                alt="Dream Jobs Logo"
              />
            </Link>
          </div>
          <div>
            <ul className="lg:flex items-center gap-6 xl:text-lg font-medium hidden ">
              {navMenu}
            </ul>
          </div>
        </div>

        <div className="flex justify-center items-center xl:gap-3 gap-2">
          <label className="swap swap-rotate">
            <input
              onChange={handleThemeToggle}
              checked={theme === "light" ? false : true}
              type="checkbox"
            />
            <svg
              className="swap-on fill-current xl:w-10 xl:h-10 w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current xl:w-10 xl:h-10 w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {user?.email ? (
            <div className="flex justify-center items-center xl:gap-3 gap-2">
              <button
                onClick={handleLogoutBtn}
                className="hidden xl:text-lg font-medium text-white bg-job-primary hover:bg-green-600 duration-300 py-3 xl:px-7 px-3 rounded-full md:flex justify-center items-center gap-1"
              >
                <PiSignOutBold /> Sign Out
              </button>
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  className="cursor-pointer flex justify-center items-center gap-3"
                >
                  <label className="md:w-14 w-12 avatar cursor-pointer align-bottom">
                    <div className="rounded-full ring-2 ring-gray-200">
                      {user?.photoURL ? (
                        <img src={user?.photoURL} />
                      ) : (
                        <img src="https://i.ibb.co/MPpqQSM/user.png" />
                      )}
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 z-50 shadow  dark:border-2 menu menu-sm dropdown-content bg-base-100 dark:bg-gray-900 rounded-box w-52"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div className="font-medium ">
                      {user?.displayName ? user?.displayName : "Your Name"}
                    </div>
                    <div className="truncate">
                      {user?.email ? user?.email : "name@gmail.com"}
                    </div>
                  </div>

                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      My Profile
                    </p>
                  </button>
                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <Link to="/my-jobs">My Jobs</Link>
                    </p>
                  </button>
                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <Link to="/add-job">Add A Jobs</Link>
                    </p>
                  </button>
                  <button
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      <Link to="/applied-jobs">Applied Jobs</Link>
                    </p>
                  </button>
                  <hr
                    className="my-2 border-blue-gray-50"
                    tabIndex="-1"
                    role="menuitem"
                  />
                  <button
                    onClick={handleLogoutBtn}
                    tabIndex="-1"
                    role="menuitem"
                    className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start leading-tight outline-none transition-all dark:text-white hover:bg-brand-secondary hover:text-job-primary dark:hover:text-job-primary focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-brand-secondary active:bg-opacity-80 active:text-blue-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                      ></path>
                    </svg>
                    <p className="block font-sans text-sm font-normal leading-normal text-inherit antialiased">
                      Sign Out
                    </p>
                  </button>
                </ul>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="text-lg font-medium text-white bg-job-primary hover:bg-green-600 duration-300 py-3 px-7 rounded-full flex justify-center items-center gap-1">
                <PiSignInBold /> Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
