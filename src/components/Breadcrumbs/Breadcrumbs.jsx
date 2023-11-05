import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Breadcrumbs = ({ image, name, breadCrumbs }) => {
  return (
    <div className="relative">
      <img
        className="w-full object-cover h-44 md:h-64"
        src={image}
        alt={`image of ${name}`}
      />
      <div className="bg-black bg-opacity-80 px-6 md:px-8 w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 text-white text-center">
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
