import { Link } from "react-router-dom";

const ProductPage = (props) => {
  return (
    <div style={{ margin: "auto", width: "80%" }}>
      <h1>Product Page</h1>
      <div style={{ backgroundColor: "green", height: 700 }}></div>
      <div style={{ backgroundColor: "grey", height: 700 }}></div>
      <div style={{ backgroundColor: "blueviolet", height: 700 }}></div>
      <Link to="/">
        <h2>Go To Home Page</h2>
      </Link>
    </div>
  );
};

export default ProductPage;