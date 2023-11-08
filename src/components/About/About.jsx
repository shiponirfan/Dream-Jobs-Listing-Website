import { HiPencilSquare, HiSquare3Stack3D, HiUsers } from "react-icons/hi2";
import aboutSvg from "../../assets/icons/about.svg";
const About = () => {
  return (
    <div className="dark:bg-gray-900 bg-white py-10 xl:py-0">
      <div className="container mx-auto p-4 px-6 lg:px-8">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="lg:col-start-2 xl:pl-20">
            <h4 data-aos="fade-up" data-aos-delay="100" className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-white sm:leading-9">
              About Dream Jobs
            </h4>
            <ul className="mt-10">
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary rounded-md">
                      <HiSquare3Stack3D />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Personalized job recommendations
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      The website could use machine learning algorithms to
                      suggest job listings that match the user’s skills,
                      experience, and interests. This would help users find
                      relevant job opportunities quickly and easily.
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary rounded-md">
                      <HiPencilSquare />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Easy job application process
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      The website could provide a streamlined application
                      process that allows users to apply for jobs with just a
                      few clicks. This would save users time and effort, and
                      increase the likelihood of them applying for more jobs.
                    </p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="400" className="mt-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 text-white bg-job-primary rounded-md">
                      <HiUsers />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg font-bold leading-6 text-gray-900 dark:text-white">
                      Feedback from other users
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500 dark:text-gray-300">
                      Read feedback from other users to make informed decisions
                      about which jobs to apply for.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="">
            <img
              src={aboutSvg}
              alt="about illustration"
              className="w-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
