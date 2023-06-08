// import "./Error.css";


const Error = ({ error, className }) => {
  return <p className={`message ${className}`}>{error}</p>;
};

export default Error;