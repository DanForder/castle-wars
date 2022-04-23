import { Link } from "react-router-dom";

const NotFound = () => (
  <>
    <h1 style={{ color: "#25252a" }}>Page Not Found!</h1>
    <Link style={{ color: "#3232ce" }} to="/">
      Home
    </Link>
  </>
);

export default NotFound;
