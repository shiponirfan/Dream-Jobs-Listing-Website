import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo/dreamjoblogo.png";
import logoDark from "../../assets/logo/dreamjoblogofordark.png";
import { FiSend } from "react-icons/fi";
import { RiCalendarEventLine, RiMoneyDollarCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
const JobDetails = () => {
  const params = useParams();
  const axios = useAxios();
  const QueryClient = useQueryClient();
  const { user, theme } = useAuth();

  const [appliedJobData, setAppliedJobData] = useState("");
  const [appliedJobLoader, setAppliedJobLoader] = useState("");
  const [applicantCount, setApplicantCount] = useState("");

  const { isLoading, data: jobDetailsById } = useQuery({
    queryKey: ["jobDetailsId"],
    queryFn: async () => {
      const res = await axios.get(`/job/${params.id}`);
      return res.data;
    },
  });

  const { mutate } = useMutation({
    mutationKey: ["jobsByEmail"],
    mutationFn: async () => {
      return await axios.post("/user/applied-job", appliedJobData);
    },
    onSuccess: () => {
      updateApplicantCount();
      Swal.fire({
        title: "Resume Submitted Successfully",
        icon: "success",
        confirmButtonColor: "#00BF63",
      });
      document.getElementById("my_modal_3").close();
      appliedJobLoader.reset();
    },
  });

  const { mutate: updateApplicantCount } = useMutation({
    mutationKey: ["updateApplicantCount"],
    mutationFn: async () => {
      return await axios.post(`/job/update-applicant-count`, {
        applicantCount,
      });
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({ queryKey: ["jobDetailsId"] });
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
    userEmail,
  } = jobDetailsById;

  const handleSendMessage = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Message Send Successfully",
      text: "Check Your Mail For More Details",
      icon: "success",
      confirmButtonColor: "#00BF63",
    });
  };

  const handleApplyModal = () => {
    if (userEmail === user?.email) {
      return toast.error("You Are The Owner Of This Job Post");
    }

    const deadlineDate = new Date(applicationDeadline);
    const currentDate = new Date();
    console.log(deadlineDate);
    console.log(currentDate);
    if (deadlineDate < currentDate) {
      return Swal.fire({
        title: "Submitting Deadline is Over",
        text: "Check Others Job For Submit Resume",
        icon: "warning",
        confirmButtonColor: "#00BF63",
      });
    }
    document.getElementById("my_modal_3").showModal();
  };

  const handleJobApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const applyUserName = form.applyUserName.value;
    const applyUserEmail = form.applyUserEmail.value;
    const applyResumeLink = form.applyResumeLink.value;

    const applyUserResume = {
      applyUserName,
      applyUserEmail,
      applyResumeLink,
      jobInformationId: _id,
    };

    setAppliedJobData(applyUserResume);
    setAppliedJobLoader(form);
    setApplicantCount(_id);
    mutate();
  };

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
        <div className="container mx-auto relative">
          <div className="container mx-auto absolute xl:-bottom-24 lg:-bottom-32 md:-bottom-48 -bottom-80">
            <div className="flex flex-col xl:flex-row justify-between gap-8 items-center p-10 rounded-xl shadow-lg bg-white dark:bg-gray-900 md:mx-10 mx-6 xl:mx-0">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:gap-8 gap-4 items-center">
                  <div className="w-28 h-28  rounded-full border-2  border-job-primary">
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
                  <div className="space-y-3 text-center md:text-left flex-1">
                    <h2 className="font-bold text-3xl">{jobTitle}</h2>
                    <h2 className="2xl:text-lg text-base font-medium">
                      Job Type:{" "}
                      <span className="font-bold bg-job-primary p-2 rounded-md text-white">
                        {jobCategory.split("-").join(" ").toUpperCase()}
                      </span>
                    </h2>
                    <h2 className="2xl:text-lg text-base font-medium">
                      Applicant Count:{" "}
                      <span className="font-bold  ">{jobApplicantsNumber}</span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-between items-center gap-10 ">
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex items-center gap-2">
                    <RiMoneyDollarCircleLine className="text-job-primary text-5xl" />
                    <div>
                      <h3 className="2xl:text-xl ">Salary Range</h3>
                      <h2 className="2xl:text-lg text-base">
                        <span className="font-bold">{salaryRange}</span> / month
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <RiCalendarEventLine className="text-job-primary text-5xl" />
                    <div>
                      <h3 className="2xl:text-xl ">
                        <span className="text-red-600">Deadline:</span>{" "}
                        <span className="font-bold">
                          {applicationDeadline.slice(0, 10)}
                        </span>
                      </h3>
                      <h3 className="2xl:text-xl ">
                        Posting Date:{" "}
                        <span className="font-bold">
                          {jobPostingDate.slice(0, 10)}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-auto">
                  <button
                    onClick={handleApplyModal}
                    className="bg-job-primary w-full lg:w-auto dark:hover:bg-white dark:hover:text-black hover:bg-black hover:scale-105 duration-300 text-white font-medium  text-lg  py-4 2xl:px-10 xl:px-6 lg:px-8 px-3 rounded-md flex justify-center items-center"
                  >
                    <FiSend className="mr-2" /> Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:pt-36 lg:pt-44 pt-[370px] md:pt-60 pb-28 md:pb-10 lg:pb-20 px-6 lg:px-8 container mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3 space-y-3 text-sm">
            <h2 className="text-xl font-bold mb-3">Job Description</h2>
            <p>{jobDescription}</p>
            <h2 className="text-xl font-bold mb-3 pt-1">The Work You’ll Do:</h2>
            <ul className="list-disc space-y-3 list-inside">
              <li>
                Support the Creative Directors and Associate Creative Directors
                of experience design to concept and oversee the production of
                bold, innovative, award-winning campaigns and digital
                experiences.
              </li>
              <li>
                Make strategic and tactical UX decisions related to design and
                usability as well as features and functions.
              </li>
              <li>
                Creates low- and high-fidelity wireframes that represent a
                user’s journey.
              </li>
              <li>
                Effectively pitch wireframes to and solutions to stakeholders.
                You’ll be the greatest advocate for our work, but you’ll also
                listen and internalize feedback so that we can come back with
                creative that exceeds expectations.
              </li>
            </ul>
            <h2 className="text-xl font-bold mb-3 pt-1">What you’ll bring:</h2>
            <ul className="list-disc space-y-3 list-inside">
              <li>
                Passion for Human-Centered Design-a drive to make interactive
                technology better for people.
              </li>
              <li>Thorough knowledge of UX/UI best practices.</li>
              <li>
                Understanding of brand identity and working within a defined
                design system as well as contributing to it.
              </li>
              <li>
                A mastery of craft. You dream about color, typography, and
                interaction design every day. You are proficient using tools
                like Figma and Adobe XD. You can efficiently use your skill set
                to develop new designs within existing and new visual systems
                and design languages.
              </li>
              <li>
                A portfolio which highlights strong understanding of UX design
                including but not limited to: user flows, IA, and translating
                customer research, analytics, and insights into wireframes and
                high-fidelity designs.
              </li>
              <li>
                Possess problem-solving skills, an investigative mentality, and
                a proactive nature-committed to delivering solutions.
              </li>
              <li>Possess problem-solving skills</li>
            </ul>
            <h2 className="text-xl font-bold mb-3 pt-1">Qualifications:</h2>
            <ul className="list-disc space-y-3 list-inside">
              <li>Bachelor’s degree preferred, or equivalent experience.</li>
              <li>At least 5-8 years of experience with UX and UI design.</li>
              <li>
                2 years of experience with design thinking or similar framework
                that focuses on defining users’ needs early.
              </li>
              <li>
                Strong portfolio showing expert concept, layout, and typographic
                skills, as well as creativity and ability to adhere to brand
                standards.
              </li>
              <li>
                Expertise in Figma, Adobe Creative Cloud suite, Microsoft suite.
              </li>
              <li>
                Ability to collaborate well with cross-disciplinary agency team
                and stakeholders at all levels.
              </li>
              <li>
                Forever learning: Relentless desire to learn and leverage the
                latest web technologies.
              </li>
              <li>
                Detail-oriented: You must be highly organized, be able to
                multi-task, and meet tight deadlines.
              </li>
              <li>
                Independence: The ability to make things happen with limited
                direction. Excellent proactive attitude, take-charge
                personality, and “can-do” demeanor.
              </li>
              <li>
                Proficiency with Front-End UI technologies a bonus but not
                necessary (such as HTML, CSS, JavaScript).
              </li>
            </ul>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
            <p>
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain.
            </p>
          </div>

          <div className="lg:w-1/3">
            <div className="mb-8  dark:text-white dark:hover:border-job-primary hover:border-brand-primary duration-300 rounded-lg border border-gray-100 py-4 shadow-sm">
              <dl className="-my-3 divide-y  divide-gray-100 dark:divide-gray-900 text-base font-medium">
                <div className=" p-3 even:bg-gray-50 dark:even:bg-gray-900 ">
                  <dt className="font-bold text-center">Job Information</dt>
                </div>

                <div className="grid grid-cols-1 items-center   gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Date Posted</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    {jobPostingDate.slice(0, 10)}
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Expiration date</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    {applicationDeadline.slice(0, 10)}
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Offered Salary</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    {salaryRange}
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Job Types</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    {jobCategory.split("-").join(" ").toUpperCase()}
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Location</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    Bangladesh
                  </dd>
                </div>

                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Category</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    IT & Networking
                  </dd>
                </div>

                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900  sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Experience</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    2 Year
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Gender</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    Both
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Industry</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    Development
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Qualification</dt>
                  <dd className="text-gray-700 ml-2 xl:ml-0 dark:text-white sm:col-span-2">
                    Bachelor Degree
                  </dd>
                </div>
                <div className="grid grid-cols-1 items-center  gap-1 p-3 even:bg-gray-50 dark:even:bg-gray-900 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-bold ">Career Level</dt>
                  <dd className="text-gray-700 dark:text-white sm:col-span-2">
                    Manager
                  </dd>
                </div>
              </dl>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 xl:p-10 p-5 rounded-xl">
              <h2 className="font-bold text-xl">Send Message Us</h2>
              <form onSubmit={handleSendMessage}>
                <div className="mt-4">
                  <input
                    placeholder="Subject"
                    className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="mt-4">
                  <input
                    placeholder="E-mail"
                    required
                    className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="mt-4">
                  <input
                    placeholder="Phone"
                    className="block h-14 w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="number"
                    name="phone"
                  />
                </div>

                <div className="mt-4">
                  <textarea
                    placeholder="Message"
                    className="block textarea textarea-lg w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="message"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-job-primary dark:hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box dark:bg-gray-800">
            <div className="md:w-64 w-56 mx-auto mb-3">
              <img
                className="w-full"
                src={theme === "light" ? logo : logoDark}
                alt="Dream Jobs Logo"
              />
            </div>
            <h3 className="font-bold text-xl text-center">
              Submit Resume Link
            </h3>
            <div>
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <form onSubmit={handleJobApply}>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="applyUserName"
                    >
                      User Name
                    </label>
                  </div>

                  <input
                    required
                    defaultValue={user?.displayName}
                    id="applyUserName"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="applyUserName"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                    htmlFor="applyUserEmail"
                  >
                    Email Address
                  </label>
                  <input
                    readOnly
                    defaultValue={user?.email}
                    required
                    id="applyUserEmail"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="email"
                    name="applyUserEmail"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                      htmlFor="applyResumeLink"
                    >
                      Resume Link
                    </label>
                  </div>

                  <input
                    required
                    id="applyResumeLink"
                    placeholder="Submit Your Resume Link Here"
                    className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                    type="text"
                    name="applyResumeLink"
                  />
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 dark:bg-job-primary dark:hover:bg-green-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default JobDetails;
