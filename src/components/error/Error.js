import "./Error.css";
import PropTypes from "prop-types";

const Error = ({ error, className }) => {
  return <p className={`message ${className}`}>{error}</p>;
};

export default Error;

Error.propTypes = {
  className: PropTypes.string
}