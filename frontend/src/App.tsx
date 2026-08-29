import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { AboutPage, ContactPage, HomePage, IntegrityPage, NotFoundPage, ProjectsPage, ReviewsPage, ServicePage, ServicesPage } from "./pages";

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/om-oss" element={<AboutPage />} />
    <Route path="/tjanster" element={<ServicesPage />} />
    <Route path="/tjanster/:slug" element={<ServicePage />} />
    <Route path="/projekt" element={<ProjectsPage />} />
    <Route path="/recensioner" element={<ReviewsPage />} />
    <Route path="/integritet" element={<IntegrityPage />} />
    <Route path="/kontakt" element={<ContactPage />} />
    <Route path="/404" element={<NotFoundPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes></Layout></BrowserRouter>;
}
