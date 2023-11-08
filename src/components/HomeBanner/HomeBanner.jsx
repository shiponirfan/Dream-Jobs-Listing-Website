import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HomeBanner = () => {
  const { theme, setHomeSearchFiled, setHomeSearchJobTypes } = useAuth();
  const navigate = useNavigate();
  const handleHomeSearchBtn = (e) => {
    e.preventDefault();
    const homeSearch = e.target.homeSearch.value;
    const homeSearchJobTypes = e.target.homeSearchJobTypes.value;
    setHomeSearchFiled(homeSearch);
    setHomeSearchJobTypes(homeSearchJobTypes);
    navigate('/all-jobs');

  };

  return (
    <div className="lg:py-28 md:py-20 py-14 bg-job-secondary dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8 flex md:flex-row flex-col justify-between items-center md:gap-4 gap-2">
        <div className="space-y-4 md:w-1/2">
          <h3 className="font-medium text-job-primary">
            We Have 207,000+ Live Jobs
          </h3>
          <h2 className="font-bold 2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl">
            Your <span className="text-job-primary">Dream Job</span> Is Waiting
            For You
          </h2>
          <p className="font-medium text-job-primary">
            Type your keyword, then click search to find your job.
          </p>

          <form onSubmit={handleHomeSearchBtn}>
            <div className="join">
              <div>
                <div>
                  <input
                    name="homeSearch"
                    className="input w-28 md:w-36 lg:w-full input-bordered join-item focus:outline-0 dark:bg-gray-800 dark:border-gray-300"
                    placeholder="Search"
                  />
                </div>
              </div>
              <select
                name="homeSearchJobTypes"
                className="select w-28 md:w-auto select-bordered join-item focus:outline-0 dark:bg-gray-800 dark:border-gray-300"
              >
                <option value="">All Jobs</option>
                <option value="remote-job">Remote Job</option>
                <option value="on-site-job">On Site Job</option>
                <option value="hybrid">Hybrid</option>
                <option value="part-time">Part Time</option>
              </select>

              <div>
                <button className="btn join-item bg-job-primary hover:bg-green-600 text-white dark:border-job-primary">
                  Search
                </button>
              </div>
            </div>
          </form>

          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-medium text-black dark:text-white">
              Popular Searches:{" "}
            </span>{" "}
            Web Designer, Graphics Designer, App Developer
          </p>
        </div>
        <div className="md:w-1/2 ">
          <div className="w-full px-4 ">
            <div className="lg:ml-auto lg:text-right">
              <div className=" inline-block pt-11 lg:pt-0">
                <img
                  src="https://i.ibb.co/2jzfyXz/hero-image-01.png"
                  alt="hero "
                  className="max-w-full lg:ml-auto "
                />
                <div className="relative">
                  <span className="absolute -bottom-8 -left-8">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="2.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="2.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="24.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="46.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="68.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="2.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="24.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="46.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="68.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                      <circle
                        cx="90.5"
                        cy="90.5"
                        r="2.5"
                        fill={theme === "light" ? "#00BF63" : "white"}
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
