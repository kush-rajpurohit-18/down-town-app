import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home";
import SympTomChecker from "../components/SympTomChecker";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/symptom-checker" element={<SympTomChecker />} />
    </Routes>
  );
}
