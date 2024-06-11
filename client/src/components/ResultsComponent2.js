import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultsComponent1.css";

const ResultsComponent2 = () => {
  const navigate = useNavigate();

  return (
    <div className="results-container2">
      <div className="results-wrapper2">
        <h1>More picks for you!</h1>
      </div>
      <div className="results-dogs-wrapper">
        <div className="results-more-dogs">
          <img src="dog-1.png" alt="dog" className="dogs-pic" />
          <p>Border Collie</p>
        </div>
        <div className="results-more-dogs">
          <img src="dog-2.png" alt="dog" className="dogs-pic" />
          <p>Siberian Husky</p>
        </div>
        <div className="results-more-dogs">
          <img src="dog-3.png" alt="dog" className="dogs-pic" />
          <p>Golden Retriever</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent2;
