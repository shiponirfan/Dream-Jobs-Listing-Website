import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import jobImg from "../../assets/images/job1.jpg";
import resumeSvg from "../../assets/icons/Job-hunt-cuate.svg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
const AddJobs = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [jobPostingDate, setJobPostingDate] = useState(new Date());
  const [applicationDeadline, setApplicationDeadline] = useState(new Date());
  const breadCrumbs = (
    <li>
      <span>{"Add Job"}</span>
    </li>
  );
  console.log(user);
  //   Add Job post
  const handleAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const jobCategory = form.jobCategory.value;
    const userName = form.userName.value;
    const pictureUrl = form.pictureUrl.value;
    const salaryRange = form.salaryRange.value;
    const jobApplicantsNumber = form.jobApplicantsNumber.value;
    const jobDescription = form.jobDescription.value;

    const jobPost = {
      jobTitle,
      jobCategory,
      userName,
      userEmail: user.email,
      pictureUrl,
      salaryRange,
      jobPostingDate,
      applicationDeadline,
      jobApplicantsNumber,
      jobDescription,
    };

    axios.post("/jobs", jobPost).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Job Posted Successfully");
        form.reset();
      }
    });
  };

  return (
    <div>
      <Breadcrumbs
        image={jobImg}
        name={"Add Job"}
        breadCrumbs={breadCrumbs}
      ></Breadcrumbs>
      <div className="py-28 bg-gray-100 dark:bg-gray-800 dark:text-white">
        <div className="mx-auto container px-6  lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5 items-center">
            <div className="lg:col-span-2 lg:py-12">
              <img src={resumeSvg} alt="resumeSvg" />
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-900 p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={handleAddJob} className="space-y-4">
                <div className="mt-4 flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="jobTitle"
                    >
                      Job Title
                    </label>
                    <input
                      required
                      id="jobTitle"
                      placeholder="Job Title"
                      className="block h-12 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="jobTitle"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="jobCategory"
                    >
                      Job Category
                    </label>
                    <select
                      id="jobCategory"
                      className="select w-full select-bordered join-item focus:outline-0 dark:bg-gray-900 dark:border-gray-600"
                    >
                      <option value="remote-job">Remote Job</option>
                      <option value="on-site-job">On Site Job</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="part-time">Part Time</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="userName"
                    >
                      User Name
                    </label>
                    <input
                      required
                      defaultValue={
                        user?.displayName ? user?.displayName : "User Name"
                      }
                      id="userName"
                      placeholder="User Name"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="userName"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="pictureUrl"
                    >
                      Picture URL
                    </label>
                    <input
                      required
                      id="pictureUrl"
                      placeholder="Picture URL of the Job Banner"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="pictureUrl"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center gap-4">
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="salaryRange"
                    >
                      Salary Range
                    </label>
                    <input
                      required
                      id="salaryRange"
                      placeholder="$3500 - $5500"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="salaryRange"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="jobPostingDate"
                    >
                      Job Posting Date
                    </label>
                    <DatePicker
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      selected={jobPostingDate}
                      onChange={(date) => setJobPostingDate(date)}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="applicationDeadline"
                    >
                      Application Deadline
                    </label>
                    <DatePicker
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      selected={applicationDeadline}
                      onChange={(date) => setApplicationDeadline(date)}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="jobApplicantsNumber"
                    >
                      Job Applicants Number
                    </label>
                    <input
                      required
                      id="jobApplicantsNumber"
                      defaultValue="0"
                      placeholder="Job Applicants Number"
                      className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                      type="text"
                      name="jobApplicantsNumber"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mt-4">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="jobDescription"
                    >
                      Job Description
                    </label>
                    <textarea
                      id="jobDescription"
                      name="jobDescription"
                      placeholder="Job Description"
                      className="textarea textarea-bordered textarea-lg block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 "
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-job-primary dark:hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Add Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
