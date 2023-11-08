import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job3.jpg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import AppliedJobsCard from "./AppliedJobsCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { usePDF } from "react-to-pdf";
import { FaFilePdf } from "react-icons/fa6";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
const AppliedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [selectedJobCategory, setSelectedJobCategory] = useState("");
  const [selectedHandleSort, setSelectedHandleSort] = useState("");
  const { toPDF, targetRef } = usePDF({ filename: "applied-jobs.pdf" });
  const {
    isLoading,
    refetch,
    data: appliedJobs,
  } = useQuery({
    queryKey: ["AppliedJobs"],
    queryFn: async () => {
      const res = await axios.get(
        `/user/applied-job?email=${user.email}&jobCategory=${selectedJobCategory}&sort=${selectedHandleSort}`
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
    refetch("AppliedJobs");
  }, [selectedJobCategory, selectedHandleSort, refetch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Helmet>
        <title>Applied Jobs - Dream Jobs</title>
      </Helmet>
      <Breadcrumbs
        image={jobImg}
        name={"Applied Jobs"}
        breadCrumbs={
          <li>
            <span>{"Applied Jobs"}</span>
          </li>
        }
      ></Breadcrumbs>

      <div className="dark:bg-gray-800 pt-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="py-6 px-6 border border-job-primary rounded-lg  flex justify-between items-center gap-8  dark:bg-gray-900 dark:text-white">
            <div className="xl:block hidden">
              <h2 className="2xl:text-2xl text-base lg:text-sm font-bold">
                Applied Jobs
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-full xl:w-auto items-center gap-8">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <h2 className="font-semibold 2xl:text-xl text-base lg:text-sm">
                  Filter By Job:
                </h2>
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
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                <h2 className="font-semibold 2xl:text-xl text-base lg:text-sm">
                  Sort By Salary Range:
                </h2>
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
              <div>
                <button
                  onClick={() => toPDF()}
                  className="bg-job-primary dark:hover:bg-white dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-base py-3 px-4 rounded-md flex justify-center items-center"
                >
                  Save as PDF <FaFilePdf className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {appliedJobs?.length > 0 ? (
          <div className=" dark:bg-gray-800 ">
            <div
              ref={targetRef}
              className="container mx-auto px-6 lg:px-8 xl:py-20 lg:py-14 py-10"
            >
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="p-4">
                        Job Banner
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Job Title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Applicants
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Job Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Posting Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Deadline
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Salary Range
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {appliedJobs?.map((job) => (
                      <AppliedJobsCard
                        key={job._id}
                        job={job}
                      ></AppliedJobsCard>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
