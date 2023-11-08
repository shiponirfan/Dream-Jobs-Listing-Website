import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Breadcrumbs = ({ image, name, breadCrumbs }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="h-44 md:h-64 bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black bg-opacity-80 px-6 md:px-8 w-full h-full flex flex-col justify-center items-center  text-white text-center">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">{name}</h2>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {breadCrumbs}
          </ul>
        </div>
      </div>
    </div>
  );
};
Breadcrumbs.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  breadCrumbs: PropTypes.node,
};
export default Breadcrumbs;
