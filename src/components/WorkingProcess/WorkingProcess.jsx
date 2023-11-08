import { AiOutlineFileSearch } from "react-icons/ai";
import { BsBuildings } from "react-icons/bs";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { HiOutlineDocumentText } from "react-icons/hi2";
const WorkingProcess = () => {
  return (
    <div className="dark:bg-gray-800 bg-job-secondary dark:text-white">
      <div className="container mx-auto xl:py-28 lg:py-20 py-10 px-6 lg:px-8 text-center space-y-2">
        <h3 data-aos="fade-up" data-aos-delay="100" className="text-xl text-job-primary font-semibold">
          Working Process
        </h3>
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-3xl font-bold">How Dream Jobs Works For You</h2>
        <div data-aos="fade-up" data-aos-delay="300" className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 pt-10 lg:pt-20">
          <div data-aos="fade-up" data-aos-delay="400" className="w-full group h-full py-8 text-center dark:hover:bg-job-primary hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center h-full">
              <AiOutlineFileSearch className="text-7xl group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 dark:text-white">
                Find The Right Job
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 dark:text-gray-50">
                Discovering the ideal career path and job opportunity that
                aligns with your skills, interests, and aspirations is
                essential.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" className="w-full group h-full py-8 text-center dark:hover:bg-job-primary hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center h-full">
              <BsBuildings className="text-7xl group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 dark:text-white">
                Research Companies
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 dark:text-gray-50">
                Discovering the ideal career path and job opportunity that
                aligns with your skills, interests, and aspirations is
                essential.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="600" className="w-full group h-full py-8 text-center dark:hover:bg-job-primary hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center h-full">
              <LiaFunnelDollarSolid className="text-7xl group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 dark:text-white">
                Compare Salaries
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 dark:text-gray-50">
                Discovering the ideal career path and job opportunity that
                aligns with your skills, interests, and aspirations is
                essential.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="700" className="w-full group h-full py-8 text-center dark:hover:bg-job-primary hover:bg-job-primary hover:text-white duration-300  bg-white shadow-lg rounded-2xl dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center h-full">
              <HiOutlineDocumentText className="text-7xl group-hover:text-white duration-300 text-job-primary" />

              <p className="mt-4 text-2xl font-bold group-hover:text-white duration-300 text-gray-900 dark:text-white">
                Quick Apply
              </p>
              <p className="px-6 py-2 text-gray-700 group-hover:text-white duration-300 dark:text-gray-50">
                Discovering the ideal career path and job opportunity that
                aligns with your skills, interests, and aspirations is
                essential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
