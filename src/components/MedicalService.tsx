import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import "./medicalService.css";

interface MedicalServiceProps {
  image: () => JSX.Element;
  text: string;
}

const MedicalService: FC<MedicalServiceProps> = ({ image, text }) => {
  const navigate = useNavigate();
  return (
    <div
      className="medical-service"
      onClick={() => navigate("symptom-checker")}
    >
      <div>{image()}</div>
      <div className="medical-service-text">{text}</div>
    </div>
  );
};

export default MedicalService;
