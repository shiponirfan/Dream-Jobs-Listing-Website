import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import JobByTabCard from "./JobByTabCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const JobByTab = () => {
  const axios = useAxios();
  const [selectedJobCategory, setSelectedJobCategory] = useState("");
  const {
    isLoading,
    refetch,
    data: jobByTab,
  } = useQuery({
    queryKey: ["jobsByTabs"],
    queryFn: async () => {
      const res = await axios.get(
        `/jobs?jobCategory=${selectedJobCategory}&pages=${1}&limit=${6}`
      );
      return res.data;
    },
  });
  useEffect(() => {
    refetch("jobsByTabs");
  }, [selectedJobCategory, refetch]);
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8  lg:py-20 py-10">
        <div className="text-center pb-10 space-y-3">
          <h2 className="font-bold text-5xl">Featured Jobs</h2>
          <h3 className="font-medium text-lg">
            Find Your Career You Deserve It
          </h3>
        </div>
        <div>
          <div className="">
            <div className="tabs font-bold items-center justify-center bg-transparent">
              <button
                onClick={() => setSelectedJobCategory("")}
                className={`${
                  selectedJobCategory === "" ? "bg-job-primary text-white" : ""
                } py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black`}
              >
                All Jobs
              </button>
              <button
                onClick={() => setSelectedJobCategory("remote-job")}
                className={`${
                  selectedJobCategory === "remote-job"
                    ? "bg-job-primary text-white"
                    : ""
                } py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black`}
              >
                Remote Job
              </button>
              <button
                onClick={() => setSelectedJobCategory("on-site-job")}
                className={`${
                  selectedJobCategory === "on-site-job"
                    ? "bg-job-primary text-white"
                    : ""
                } py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black`}
              >
                On Site Job
              </button>
              <button
                onClick={() => setSelectedJobCategory("hybrid")}
                className={`${
                  selectedJobCategory === "hybrid"
                    ? "bg-job-primary text-white"
                    : ""
                } py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black`}
              >
                Hybrid
              </button>
              <button
                onClick={() => setSelectedJobCategory("part-time")}
                className={`${
                  selectedJobCategory === "part-time"
                    ? "bg-job-primary text-white"
                    : ""
                } py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black`}
              >
                Part Time
              </button>
            </div>
          </div>
          <div className="lg:pt-20 pt-12">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                  {jobByTab?.result?.result?.map((job) => (
                    <JobByTabCard key={job._id} job={job}></JobByTabCard>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link to="all-jobs">
                    <button className="bg-job-primary dark:hover:bg-white dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  2xl:text-lg  py-3 px-6 rounded-md">
                      See All Jobs
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobByTab;
