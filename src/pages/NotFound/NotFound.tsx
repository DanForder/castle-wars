import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

const NotFoundView = () => (
  <Layout>
    <h1>Page Not Found!</h1>
    <Link to="/">Home</Link>
  </Layout>
);

export default NotFoundView;
