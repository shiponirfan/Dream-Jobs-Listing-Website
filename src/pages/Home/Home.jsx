import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import JobByTab from "../../components/JobByTab/JobByTab";
import WorkingProcess from "../../components/WorkingProcess/WorkingProcess";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dream Jobs - Home</title>
      </Helmet>
      <HomeBanner />
      <JobByTab />
      <WorkingProcess/>
    </div>
  );
};

export default Home;
