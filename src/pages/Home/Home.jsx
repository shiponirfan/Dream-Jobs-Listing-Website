import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import JobByTab from "../../components/JobByTab/JobByTab";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Dream Jobs - Home</title>
      </Helmet>
      <HomeBanner />
      <JobByTab />
    </div>
  );
};

export default Home;
