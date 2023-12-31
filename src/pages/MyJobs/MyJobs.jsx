import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import MyJobsCard from "./MyJobsCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job5.jpg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Helmet } from "react-helmet-async";
import NoDataFound from "../../components/NoDataFound/NoDataFound";
const MyJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isLoading, data: myJobs } = useQuery({
    queryKey: ["jobsByEmail"],
    queryFn: async () => {
      const res = await axios.get(`/my-jobs?email=${user.email}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Helmet>
        <title>My Jobs - Dream Jobs</title>
      </Helmet>
      <Breadcrumbs
        image={jobImg}
        name={"My Jobs"}
        breadCrumbs={
          <li>
            <span>{"My Jobs"}</span>
          </li>
        }
      ></Breadcrumbs>

      {myJobs?.result?.length > 0 ? (
        <div className="xl:py-20 lg:py-14 py-10 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            {myJobs?.result?.map((job) => (
              <MyJobsCard key={job._id} job={job}></MyJobsCard>
            ))}
          </div>
        </div>
      ) : (
        <NoDataFound />
      )}
    </div>
  );
};

export default MyJobs;
