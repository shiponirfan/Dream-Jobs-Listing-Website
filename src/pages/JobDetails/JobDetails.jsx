import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const JobDetails = () => {
  const jobDetails = useLoaderData();
  const { user } = useAuth();
  const {
    _id,
    jobTitle,
    jobCategory,
    jobApplicantsNumber,
    pictureUrl,
    applicationDeadline,
    salaryRange,
    jobPostingDate,
    jobDescription,
  } = jobDetails;
  return (
    <div>
      <div className="w-full h-[500px]">
        <img
          className="w-full h-full object-cover"
          src={pictureUrl}
          alt="Job Details Image"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 dark:text-white">
        <div className="container mx-auto">
          <div>
            <div className="flex-1">
              <div className="w-24 h-24 rounded-full border-2  border-job-primary">
                {user?.photoURL ? (
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={user?.photoURL}
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="https://i.ibb.co/MPpqQSM/user.png"
                  />
                )}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
