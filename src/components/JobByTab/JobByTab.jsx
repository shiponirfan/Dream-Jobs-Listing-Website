import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import JobByTabCard from "./JobByTabCard";

const JobByTab = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isLoading, data: jobByTab } = useQuery({
    queryKey: ["jobsByTab"],
    queryFn: async () => {
      const res = await axios.get(`/jobs`);
      return res.data;
    },
  });
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto px-6 lg:px-8  lg:py-20 py-10">
        <div className="text-center pb-10 space-y-3">
          <h2 className="font-bold text-5xl">Featured Jobs</h2>
          <h3 className="font-medium text-lg">
            Find Your Career You Deserve It
          </h3>
        </div>
        <Tabs>
          <div className="">
            <TabList className="tabs font-bold items-center justify-center bg-transparent">
              <Tab className="py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black">
                All Jobs
              </Tab>
              <Tab className="py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black">
                Remote Job
              </Tab>
              <Tab className="py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black">
                On Site Job
              </Tab>
              <Tab className="py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black">
                Hybrid
              </Tab>
              <Tab className="py-3 px-6 dark:text-white border focus-visible:outline-none cursor-pointer hover:bg-job-primary hover:text-white duration-300 text-black">
                Part Time
              </Tab>
            </TabList>
          </div>
          <div className="lg:py-20 py-12">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
                {jobByTab?.map((job) => (
                  <JobByTabCard key={job._id} job={job}></JobByTabCard>
                ))}
              </div>
            )}
          </div>
          <TabPanel>
            <h2 className="font-bold text-3xl">All Jobs</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold text-3xl">Remote Job</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold text-3xl">On Site Job</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold text-3xl">Hybrid</h2>
          </TabPanel>
          <TabPanel>
            <h2 className="font-bold text-3xl">Part Time</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default JobByTab;
