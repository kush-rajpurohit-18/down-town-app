import { BodyComponent } from "@darshanpatel2608/human-body-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CancelIcon } from "../icons/cancelIcon";
import { StatusBar } from "../icons/statusBar";
import "./symptomChecker.css";

function SympTomChecker() {
  const exampleParams = {
    head: { selected: true },
    left_arm: { selected: true },
    stomach: { selected: true },
    chest: { selected: true },
    left_shoulder: { selected: true },
    left_hand: { selected: true },
    right_shoulder: { selected: true },
    left_leg_lower: { selected: true },
    right_arm: { selected: true },
    right_hand: { selected: true },
    left_leg_upper: { selected: true },
    left_foot: { selected: true },
    right_leg_lower: { selected: true },
    right_leg_upper: { selected: true },
    right_foot: { selected: true },
  };

  const [params, setParams] = useState(exampleParams);
  const navigate = useNavigate();

  return (
    <div>
      <header>{StatusBar()}</header>
      <div className="symptom-checker-heading">
        <div className="symptom-checker-heading-text">Symptom Checker</div>
        <div onClick={() => navigate("/")}>{CancelIcon()}</div>
      </div>
      <div className="symptom-checker-body-search">
        <span className="symptom-checker-search">Search</span>
        <span>Points of the body</span>
      </div>
      <hr />
      <BodyComponent
        partsInput={params}
        onClick={(id: string) => {
          alert(`${id} clicked`);
        }}
        onChange={(obj: any) => {
          for (let key in obj) {
            if (obj[key].selected === false) {
              obj[key].selected = true;
            }
          }
          setParams(obj);
        }}
      />
    </div>
  );
}
export default SympTomChecker;
