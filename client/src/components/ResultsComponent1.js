import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultsComponent1.css";

const ResultsComponent1 = () => {
  const navigate = useNavigate();

  return (
    <div className="results-container">
      <div className="results-wrapper">
        <h1>Introducing your Furry Fit!</h1>
        <img src="dog 1.png" alt="dog" className="dog-pic" />

        <h1>Australian Shepherd</h1>
      </div>
      <div className="results-text-wrapper">
        <div className="results-details">
          <p>Height: 18-23 inches</p>
          <p>Weight: 30-45 pounds</p>
          <p>Life Expectancy: 12-15 years</p>
        </div>
        <div className="results-description">
          <p>
            According to the American Kennel Club, “The Australian Shepherd, a
            lean, tough ranch dog, is one of those 'only in America' stories: a
            European breed perfected in California by way of Australia. Fixtures
            on the rodeo circuit, they are closely associated with the cowboy
            life. The Australian Shepherd, the cowboy's herding dog of choice,
            is a medium-sized worker with a keen, penetrating gaze in the eye.
            Aussie coats offer different looks, including merle (a mottled
            pattern with contrasting shades of blue or red). In all ways,
            they're the picture of rugged and agile movers of stock. Aussies
            exhibit an irresistible impulse to herd, anything: birds, dogs,
            kids.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsComponent1;
