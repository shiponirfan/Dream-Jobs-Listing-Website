import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job3.jpg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import AppliedJobsCard from "./AppliedJobsCard";
import { useEffect, useState } from "react";
const AppliedJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const [selectedJobCategory, setSelectedJobCategory] = useState("");
  const [selectedHandleSort, setSelectedHandleSort] = useState("");
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
            <div className="">
              <h2 className="text-2xl font-bold">
                View All Your Job Applications
              </h2>
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
        <div className="xl:py-20 lg:py-14 py-10 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            {appliedJobs.map((job) => (
              <AppliedJobsCard key={job._id} job={job}></AppliedJobsCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
