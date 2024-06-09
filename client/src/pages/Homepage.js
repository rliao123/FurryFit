import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const onFormClick = () => {
    navigate("/form");
  };
  return (
    <div className="homepage">
      <div className="icon-wrapper">
        <img className="logo" alt="" src="/logo.png" />

        <img src="/brush1.png" alt="brush1" className="brush1" />
        <img src="/brush2.png" alt="brush2" className="brush2" />
        <img src="/collar.png" alt="collar" className="collar" />
        <img src="/dog-circle.png" alt="circle" className="dog-circle" />
        <img src="/blue blob.png" alt="blue-blob" className="blue-blob" />
        <div className="text-container">
          <h1>Discover the pawfect fit</h1>

          <Button
            variant="contained"
            className="get-started"
            onClick={onFormClick}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
