import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import AllJobsTable from "./AllJobsTable";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job4.jpg";

const AllJobs = () => {
  const axios = useAxios();
  const [selectedJobCategory, setSelectedJobCategory] = useState("");
  const [selectedHandleSort, setSelectedHandleSort] = useState("");
  const [searchfield, setSearchfield] = useState("");
  const [pages, setPages] = useState(1);
  const {
    isLoading,
    refetch,
    data: jobByTab,
  } = useQuery({
    queryKey: ["jobsByTabs"],
    queryFn: async () => {
      const res = await axios.get(
        `/jobs?&jobTitle=${searchfield}&jobCategory=${selectedJobCategory}&pages=${pages}&limit=${10}&sort=${selectedHandleSort}`
      );
      return res.data;
    },
  });

  const handleJobCategory = (e) => {
    e.preventDefault();
    setSelectedJobCategory(e.target.value);
  };
  const handleSortValue = (e) => {
    e.preventDefault();
    setSelectedHandleSort(e.target.value);
  };

  useEffect(() => {
    refetch("jobsByTabs");
  }, [selectedJobCategory, selectedHandleSort, searchfield, pages, refetch]);

  const handlePrevious = () => {
    if (pages > 1) {
      setPages(pages - 1);
    }
  };
  const totalPages = Math.ceil(jobByTab?.totalPagesCount / 10);
  const handleNext = () => {
    if (pages < totalPages) {
      setPages(pages + 1);
    }
  };

  return (
    <div>
      <Breadcrumbs
        image={jobImg}
        name={"All Jobs"}
        breadCrumbs={
          <li>
            <span>{"All Jobs"}</span>
          </li>
        }
      ></Breadcrumbs>

      <div className="container mx-auto px-6 lg:px-8 pt-16">
        <div className="py-6 px-6 border border-job-primary rounded-lg flex-row-reverse flex justify-between items-center gap-8  dark:bg-gray-900 dark:text-white">
          <div className="flex justify-between items-center gap-2">
            <h2 className="font-semibold text-xl">Search:</h2>
            <div className="join">
              <div>
                <div>
                  <input
                    onBlur={(e) => setSearchfield(e.target.value)}
                    className="input w-28 md:w-36 lg:w-full input-bordered join-item focus:outline-0 dark:bg-gray-800 dark:border-gray-300"
                    placeholder="Job Title / Keywords"
                  />
                </div>
              </div>

              <div>
                <button className="btn join-item bg-job-primary hover:bg-green-600 text-white dark:border-job-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-semibold text-xl">Filter By Job:</h2>
              <div className="w-52">
                <select
                  onChange={handleJobCategory}
                  className="select border-job-primary w-full select-bordered join-item focus:outline-0 dark:bg-gray-900 dark:border-gray-600"
                >
                  <option value="">All Jobs</option>
                  <option value="remote-job">Remote Job</option>
                  <option value="on-site-job">On Site Job</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="part-time">Part Time</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center gap-2">
              <h2 className="font-semibold text-xl">Sort By Salary Range:</h2>
              <div className="w-52">
                <select
                  onChange={handleSortValue}
                  className="select border-job-primary w-full select-bordered join-item focus:outline-0 dark:bg-gray-900 dark:border-gray-600"
                >
                  <option value="">Salary Range</option>
                  <option value="-1">High To Low</option>
                  <option value="1">Low To High</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-900 dark:text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {jobByTab?.result?.map((job) => (
                  <AllJobsTable key={job._id} job={job}></AllJobsTable>
                ))}
              </div>
              <div className="text-center mt-12">
                <div className="join">
                  <button
                    onClick={handlePrevious}
                    className="join-item btn hover:bg-job-primary hover:text-white"
                  >
                    «
                  </button>
                  {Array(totalPages)
                    .fill(0)
                    .map((job, index) => {
                      const pagination = index + 1;
                      return (
                        <button
                          key={index}
                          onClick={() => setPages(pagination)}
                          className={` ${
                            pagination === pages
                              ? "bg-job-primary text-white"
                              : ""
                          } join-item btn hover:bg-job-primary hover:text-white`}
                        >
                          {pagination}
                        </button>
                      );
                    })}
                  <button
                    onClick={handleNext}
                    className="join-item btn hover:bg-job-primary hover:text-white"
                  >
                    »
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
