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
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-40 h-20 p-4">
        <Link to={`/job/${_id}`}>
          <img
            className="rounded-lg w-full h-full object-cover"
            src={pictureUrl}
            alt={jobTitle}
          />
        </Link>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {jobTitle}
      </th>
      <td className="px-6 py-4">{jobApplicantsNumber}</td>
      <td className="px-6 py-4">
        {jobCategory.split("-").join(" ").toUpperCase()}
      </td>
      <td className="px-6 py-4">{jobPostingDate.slice(0, 10)}</td>
      <td className="px-6 py-4">{applicationDeadline.slice(0, 10)}</td>
      <td className="px-6 py-4">{salaryRange}</td>
    </tr>
  );
};
AppliedJobsCard.propTypes = {
  job: PropTypes.object,
};
export default AppliedJobsCard;
