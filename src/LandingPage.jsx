import { Link } from "react-router-dom";

const LandingPage = (props) => {
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <h1>Landing Page</h1>
      <div style={{ backgroundColor: "pink", height: 700 }}></div>
      <div style={{ backgroundColor: "orange", height: 700 }}></div>
      <div style={{ backgroundColor: "purple", height: 700 }}></div>
      <Link to="/product">
        <h2>Go To Product Page</h2>
      </Link>
    </div>
  );
};

export default LandingPage;