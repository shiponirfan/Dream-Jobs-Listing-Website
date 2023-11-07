import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";

const JobByTabCard = ({ job }) => {
  const {
    _id,
    jobTitle,
    jobCategory,
    jobApplicantsNumber,
    pictureUrl,
    applicationDeadline,
    salaryRange,
    jobPostingDate,
    userName,
  } = job;
  return (
    <div className="">
      <div className="flex flex-col xl:flex-row items-center justify-between  border border-b-0 rounded-bl-none rounded-br-none rounded-md">
        <div className="flex w-full xl:w-auto flex-col xl:flex-row  items-center  flex-1 justify-between 2xl:gap-6 xl:gap-3 2xl:p-6 xl:p-3 border-r p-3 pb-0 xl:pb-3">
          <div className=" 2xl:w-36  2xl:h-32 lg:h-56 h-40 w-full  xl:w-28 xl:h-28 p-1  border rounded-md">
            <img
              className="rounded-md w-full h-full object-cover"
              src={pictureUrl}
              alt={jobTitle}
            />
          </div>
          <div className="flex-1 text-center xl:text-left py-4  xl:py-0 space-y-2">
            <h2 className="font-bold  dark:text-job-primary text-brand-primary text-xl">
              {jobTitle}
            </h2>

            <h2 className="2xl:text-base  xl:text-xs text-base ">
              Job Posted By: <span className="font-bold">{userName}</span>
            </h2>
            <h2 className="2xl:text-lg  xl:text-sm pt-2 text-base">
              <span className="font-bold bg-gray-100 dark:bg-gray-700 p-2 rounded-md ">
                {jobCategory.split("-").join(" ").toUpperCase()}
              </span>
            </h2>
          </div>
        </div>
        <div className="2xl:px-6 pb-4 xl:pb-0 w-full xl:w-auto px-4 xl:px-3 space-y-2">
          <Link to={`/job/${_id}`}>
            <button
              onClick={() =>
                toast.error("You have to log in first to view details")
              }
              className="bg-job-primary hidden w-full xl:w-auto dark:hover:bg-white dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  2xl:text-lg  2xl:py-4  2xl:px-5 py-3 px-3 rounded-md xl:flex justify-center items-center"
            >
              <FiSend className="mr-2" /> View Details
            </button>
          </Link>
          <h3 className=" text-base  text-center">
            Applicants: <span className="font-bold">{jobApplicantsNumber}</span>
          </h3>
        </div>
      </div>
      <div className="border justify-center xl:justify-normal items-center py-3 flex flex-col lg:flex-row lg:gap-6 gap-2 lg:px-6 xl:rounded-md xl:rounded-tl-none xl:rounded-tr-none">
        <h2 className=" 2xl:text-sm xl:text-xs text-sm flex flex-col xl:block text-center lg:text-left">
          Salary: <span className="font-bold">{salaryRange}</span>
        </h2>

        <h3 className="hidden  2xl:text-sm xl:text-xs text-sm lg:flex flex-col xl:block">
          Posting Date:{" "}
          <span className="font-bold">{jobPostingDate.slice(0, 10)}</span>
        </h3>
        <h3 className="hidden  2xl:text-sm xl:text-xs text-sm lg:flex flex-col xl:block">
          Deadline:{" "}
          <span className="font-bold">{applicationDeadline.slice(0, 10)}</span>
        </h3>

        <div className="lg:hidden flex gap-6">
          <h3 className=" 2xl:text-sm xl:text-xs text-sm flex flex-col xl:block">
            Posting Date:{" "}
            <span className="font-bold">{jobPostingDate.slice(0, 10)}</span>
          </h3>
          <h3 className=" 2xl:text-sm xl:text-xs text-sm flex flex-col xl:block">
            Deadline:{" "}
            <span className="font-bold">
              {applicationDeadline.slice(0, 10)}
            </span>
          </h3>
        </div>
      </div>

      <Link to={`/job/${_id}`}>
        <button
          onClick={() =>
            toast.error("You have to log in first to view details")
          }
          className="bg-job-primary xl:hidden w-full xl:w-auto dark:hover:bg-white dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  2xl:text-lg  2xl:py-4  2xl:px-5 py-3 px-3 rounded-md flex justify-center items-center rounded-tl-none rounded-tr-none"
        >
          <FiSend className="mr-2" /> View Details
        </button>
      </Link>
    </div>
  );
};

JobByTabCard.propTypes = {
  job: PropTypes.object,
};

export default JobByTabCard;
