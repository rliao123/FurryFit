import React from "react";
import { useNavigate } from "react-router-dom";
import "./FormComponent.css";

const FormComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    navigate("/form-results");
    console.log("Form submitted");
  };

  return (
    <div className="form-container">
      <form id="exampleForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="dropdown">Size:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Small</option>
            <option value="option2">Medium</option>
            <option value="option3">Large</option>
            <option value="option4">Giant</option>
          </select>
          <label htmlFor="textInput">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            placeholder="Number in inches"
          />
          <label htmlFor="textInput">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            placeholder="Number in pounds"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Coat Type:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Curly</option>
            <option value="option2">Silky</option>
            <option value="option3">Rough</option>
            <option value="option4">Wire</option>
            <option value="option5">Smooth</option>
            <option value="option6">Hairless</option>
          </select>
          <label htmlFor="dropdown">Coat Length:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Long</option>
            <option value="option2">Medium</option>
            <option value="option3">Short</option>
            <option value="option4">Hairless</option>
          </select>
          <label htmlFor="dropdown">Shedding:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">High</option>
            <option value="option4">Hairless</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dropdown" id="wrap">
            Grooming Expectations:
          </label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Daily</option>
            <option value="option2">Weekly</option>
            <option value="option3">Monthly</option>
          </select>
          <label htmlFor="dropdown">Barking:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">High</option>
          </select>
          <label htmlFor="dropdown">Characteristics:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option that best matches
            </option>
            <option value="option1">warm, friendly, outgoing</option>
            <option value="option2">intelligent, adaptable</option>
            <option value="option3">affectionate, loyal, confident</option>
            <option value="option4">vibrant, social, extraverted</option>
            <option value="option5">working</option>
            <option value="option6">herding</option>
            <option value="option7">companion, couch potato</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dropdown" id="wrap">
            Energy Level:
          </label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">High</option>
          </select>
          <label htmlFor="dropdown">Trainability:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">High</option>
          </select>
          <label htmlFor="dropdown" id="wrap">
            Mental Simulation Needs:
          </label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Low</option>
            <option value="option2">Medium</option>
            <option value="option3">High</option>
          </select>
        </div>

        <div className="form-group">
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" name="checkbox" value="checkbox1" /> Good
              with young children
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="checkbox" value="checkbox2" />{" "}
              Affectionate with family
            </label>
            <label className="checkbox-label">
              <input type="checkbox" name="checkbox" value="checkbox3" /> Good
              with other dogs
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="dropdown">Owner Lifestyle:</label>
          <select id="dropdown" name="dropdown" required>
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">Stay-at-home</option>
            <option value="option2">In-person work</option>
            <option value="option3">Hybrid work</option>
            <option value="option4">Remote work</option>
            <option value="option5">Active</option>
          </select>
          <label htmlFor="dropdown" id="wrap">
            Owner Home Details:
          </label>
          <select id="dropdown" name="dropdown">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="option1">House with yard</option>
            <option value="option2">House without yard</option>
            <option value="option3">Apartment</option>
            <option value="option4">Condo</option>
            <option value="option5">Townhouse</option>
            <option value="option6">Tiny home</option>
            <option value="option7">Other</option>
          </select>
        </div>

        <div className="form-group form-group-submit">
          <button type="submit">View My Furry Fit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
