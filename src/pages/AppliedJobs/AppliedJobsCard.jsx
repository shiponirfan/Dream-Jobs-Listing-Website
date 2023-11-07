import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AppliedJobsCard = ({ job }) => {
  const {
    _id,
    jobTitle,
    jobCategory,
    jobApplicantsNumber,
    pictureUrl,
    applicationDeadline,
    salaryRange,
    jobPostingDate,
  } = job;
  return (
    <div>
      <div className="flex flex-col dark:bg-gray-800 dark:text-white lg:flex-row gap-4 lg:gap-8 p-6 mb-4 lg:items-center rounded-lg shadow-lg dark:shadow-gray-950 border border-transparent dark:border dark:border-job-primary hover:shadow-job-primary/50 duration-300 text-base xl:text-lg">
        <div className="xl:w-64 lg:w-40  h-56 lg:h-32">
          <Link to={`/job/${_id}`}>
            <img
              className="rounded-lg w-full h-full object-cover"
              src={pictureUrl}
              alt={jobTitle}
            />
          </Link>
        </div>
        <div className="space-y-1 2xl:w-96 xl:w-72 lg:w-52 text-center lg:text-left">
          <Link to={`/job/${_id}`}>
            <h2 className="font-bold dark:text-job-primary text-brand-primary text-xl 2xl:text-2xl font-rajdhani">
              {jobTitle}
            </h2>
          </Link>
          <h2 className="2xl:text-lg text-base">
            Job Type:{" "}
            <span className="font-bold">
              {jobCategory.split("-").join(" ").toUpperCase()}
            </span>
          </h2>
          <h2 className="2xl:text-lg text-base">
            Salary Range: <span className="font-bold">{salaryRange}</span>
          </h2>
        </div>
        <div className="space-y-1 text-center lg:text-left">
          <h3 className="2xl:text-xl">
            Deadline:{" "}
            <span className="font-bold">
              {applicationDeadline.slice(0, 10)}
            </span>
          </h3>
          <h3 className="2xl:text-xl ">
            Posting Date:{" "}
            <span className="font-bold">{jobPostingDate.slice(0, 10)}</span>
          </h3>
        </div>
        <div className="space-y-1 flex-1 text-center">
          <h3 className="2xl:text-xl ">
            Applicants: <span className="font-bold">{jobApplicantsNumber}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
AppliedJobsCard.propTypes = {
  job: PropTypes.object,
};
export default AppliedJobsCard;
