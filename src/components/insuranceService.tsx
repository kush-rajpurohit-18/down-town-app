import { InsuranceIcon } from "../icons/insuranceIcon";
import "./home.css";

function InsuranceService() {
  return (
    <>
      <div className="home-page-insurance-service">
        <div>{InsuranceIcon()}</div>
        <div>
          <div className="home-page-insurance-service-coverage">
            Insurance Coverage
          </div>
          <div className="home-page-insurance-service-coverage-benefits">
            Check your benefits and coverage
          </div>
        </div>
      </div>
    </>
  );
}
export default InsuranceService;
