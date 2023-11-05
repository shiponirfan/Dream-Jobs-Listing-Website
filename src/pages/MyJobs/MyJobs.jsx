import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import MyJobsCard from "./MyJobsCard";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job2.jpg";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
const MyJobs = () => {
  const axios = useAxios();
  const { user } = useAuth();
  const { isPending, data: myJobs } = useQuery({
    queryKey: ["jobsByEmail"],
    queryFn: async () => {
      const jobData = await axios.get(`/jobs?email=${user.email}`);
      return jobData.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <Breadcrumbs
        image={jobImg}
        name={"My Jobs"}
        breadCrumbs={
          <li>
            <span>{"My Jobs"}</span>
          </li>
        }
      ></Breadcrumbs>

      <div className="xl:py-20 lg:py-14 py-10 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          {myJobs.map((job) => (
            <MyJobsCard key={job._id} job={job}></MyJobsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyJobs;
