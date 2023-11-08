import { FiSend } from "react-icons/fi";
import jobimages from "../../assets/images/job4.jpg";
import { Link } from "react-router-dom";
const CallToAction = () => {
  return (
    <div
      className="hero h-96"
      style={{
        backgroundImage: `url(${jobimages})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-white">
        <div className="container mx-auto">
          <h1 data-aos="fade-up" data-aos-delay="100" className="mb-5 xl:text-5xl text-4xl font-bold">
            Make a Difference With Your Online Resume!
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="mb-5">
            Craft your resume in minutes with Dream Jobs ResumeAssistant and get
            ready to land your dream job!
          </p>
          <Link to="/all-jobs">
            <button data-aos="fade-up" data-aos-delay="300" className="bg-job-primary hover:bg-black dark:hover:bg-white dark:hover:text-black duration-300 flex justify-center items-center mx-auto py-4  px-6 rounded-lg font-bold">
              <FiSend className="mr-2" /> Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
