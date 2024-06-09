import FormComponent from "../components/FormComponent";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const navigate = useNavigate();
  const onLogoContainerClick = () => {
    navigate("/");
  };
  return (
    <div className="form">
      <div className="logo-container" onClick={onLogoContainerClick}>
        <img className="logo" alt="" src="/logo.png" />
        <img src="/dec1.png" alt="dec1" className="dec1" />
        <img src="/dec2.png" alt="dec2" className="dec2" />
        <img src="/dec3.png" alt="dec3" className="dec3" />
      </div>
      <FormComponent className="form-container" />
      <img className="dog-icon" alt="Dog" src="/dog-circle.png" />
    </div>
  );
};

export default Form;
