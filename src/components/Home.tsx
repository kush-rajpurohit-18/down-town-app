import { CareIcon } from "../icons/careIcon";
import { ClaimIcon } from "../icons/claimIcon";
import { CoverageIcon } from "../icons/coverageIcon";
import { DoctorImage } from "../icons/doctor";
import { HomeIcon } from "../icons/homeIcon";
import { MedicineDelivery } from "../icons/medicineDelivery";
import { Notifications } from "../icons/notifications";
import { Profile } from "../icons/profile";
import { StatusBar } from "../icons/statusBar";
import { SymptomChecker } from "../icons/symptomsChecker";
import { TeleHealth } from "../icons/teleHealth";
import { Vector } from "../icons/vector";
import "./home.css";
import InsuranceService from "./insuranceService";
import MedicalService from "./MedicalService";

function HomePage() {
  return (
    <>
      <header>{StatusBar()}</header>
      <div className="home-page-container">
        <div className="home-network-notification-profile-icon">
          <span>{Notifications()}</span>
          <span>{Profile()}</span>
        </div>
        <div className="home-page-our-network">
          <div className="home-page-our-network-left">
            <h2 className="home-page-our-network-text">Our Network</h2>
            <div className="home-page-our-network-text">
              Navigate within our network of healthcare providers
            </div>
            <div className="home-page-search-network">
              <span>Search Network</span>
              <span>{Vector()}</span>
            </div>
          </div>
          <div className="home-page-doctor-image">{DoctorImage()}</div>
        </div>
        <h3>Medical Services</h3>
        <div className="home-page-medical-services">
          <MedicalService image={SymptomChecker} text="Symptom Checker" />
          <MedicalService image={MedicineDelivery} text="Telehealth" />
          <MedicalService
            image={SymptomChecker}
            text="Facility Search and booking"
          />
          <MedicalService image={TeleHealth} text="Medicine Delivery" />
        </div>
        <h3>Insurance Service</h3>
        <InsuranceService />
        <InsuranceService />
      </div>
      <footer className="home-page-footer">
        <span>{HomeIcon()}</span>
        <span>{CareIcon()}</span>
        <span>{CoverageIcon()}</span>
        <span>{ClaimIcon()}</span>
      </footer>
    </>
  );
}
export default HomePage;
