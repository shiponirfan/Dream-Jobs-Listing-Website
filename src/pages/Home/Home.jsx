import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import JobByTab from "../../components/JobByTab/JobByTab";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";
import About from "../../components/About/About";
import CallToAction from "../../components/CallToAction/CallToAction";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dream Jobs - Home</title>
      </Helmet>
      <HomeBanner />
      <JobByTab />
      <WorkingProcess/>
      <About/>
      <CallToAction/>
    </div>
  );
};

export default Home;
