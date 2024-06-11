import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Results.css";
import ResultsComponent1 from "../components/ResultsComponent1";
import ResultsComponent2 from "../components/ResultsComponent2";

const Results = () => {
  const navigate = useNavigate();
  const onLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="results">
      <div className="icon-wrapper-results">
        <img
          className="results-logo"
          alt=""
          src="/logo.png"
          onClick={onLogoClick}
        />
        <img src="/result-dec1.png" alt="dec1" className="result-dec1" />
        <img src="/result-dec2.png" alt="dec2" className="result-dec2" />
        <img src="/result-dec3.png" alt="dec3" className="result-dec3" />
      </div>
      <ResultsComponent1 className="result-component1" />
      <ResultsComponent2 className="result-component2" />
    </div>
  );
};

export default Results;
