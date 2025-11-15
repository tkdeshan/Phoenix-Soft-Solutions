import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Service from "./pages/Service";
import Project from "./pages/Project";
import Technology from "./pages/Technology";
import Career from "./pages/Career";
import Event from "./pages/Event";
import Domain from "./pages/Domain";
import Hosting from "./pages/Hosting";
import Login from "./pages/Login";
import Contactus from "./sub-pages/company/Contactus";
import Aboutus from "./sub-pages/company/Aboutus";
import WebService from "./sub-pages/services/WebService";
import MobileService from "./sub-pages/services/MobileService";
import CustomService from "./sub-pages/services/CustomService";
import DevopsService from "./sub-pages/services/DevopsService";
import OutsourcingService from "./sub-pages/services/OutsourcingService";
import AiService from "./sub-pages/services/AiService";
import PocService from "./sub-pages/services/PocService";
import QAService from "./sub-pages/services/QAService";
import CloudService from "./sub-pages/services/CloudService";
import GraphicService from "./sub-pages/services/GraphicService";
import BusinessService from "./sub-pages/services/BusinessService";
import MarketingService from "./sub-pages/services/MarketingService";
import CyberService from "./sub-pages/services/CyberService";
import SoftwareService from "./sub-pages/services/SoftwareService";
import BackendService from "./sub-pages/services/BackendService";
import FrontendService from "./sub-pages/services/FrontendService";
import LkDomain from "./sub-pages/domains/LkDomain";
import InternationalDomain from "./sub-pages/domains/InternationalDomain";
import WebHosting from "./sub-pages/hosting/WebHosting";
import CloudHosting from "./sub-pages/hosting/CloudHosting";
import VPSHosting from "./sub-pages/hosting/VPSHosting";
import BusinessEmail from "./sub-pages/hosting/BusinessEmail";
import Admin from "./admin-panel/Admin";
import XcropCounter from "./admin-panel/xcrop/XcropCounter";
import XcropEvent from "./admin-panel/xcrop/XcropEvent";
import XcropProject from "./admin-panel/xcrop/XcropProject";
import XcropFeedback from "./admin-panel/xcrop/XcropFeedback";
import { DarkModeProvider } from "./DarkModeContext";
import Chat from "./components/Chat";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

const App = () => {
  const location = useLocation();

  const noNavbarPaths = ["/login"];
  const isAdminRoute = location.pathname.includes("phoenix-soft-admin");

  return (
    <DarkModeProvider>
      <div className="flex flex-col min-h-screen relative">
        {!noNavbarPaths.includes(location.pathname) && !isAdminRoute && (
          <Navbar />
        )}
        <div className="flex-grow">
          <Routes>
            <Route path="/Phoenix-Soft-Solutions/" element={<Home />} />
            <Route path="/Phoenix-Soft-Solutions/company" element={<Company />} />
            <Route path="/Phoenix-Soft-Solutions/service" element={<Service />} />
            <Route path="/Phoenix-Soft-Solutions/project" element={<Project />} />
            <Route path="/Phoenix-Soft-Solutions/technology" element={<Technology />} />
            <Route path="/Phoenix-Soft-Solutions/career" element={<Career />} />
            <Route path="/Phoenix-Soft-Solutions/event" element={<Event />} />
            <Route path="/Phoenix-Soft-Solutions/domain" element={<Domain />} />
            <Route path="/Phoenix-Soft-Solutions/hosting" element={<Hosting />} />
            <Route path="/Phoenix-Soft-Solutions/login" element={<Login />} />
            <Route path="/Phoenix-Soft-Solutions/aboutus" element={<Aboutus />} />
            <Route path="/Phoenix-Soft-Solutions/contactus" element={<Contactus />} />
            <Route path="/Phoenix-Soft-Solutions/web-service" element={<WebService />} />
            <Route path="/Phoenix-Soft-Solutions/mobile-service" element={<MobileService />} />
            <Route path="/Phoenix-Soft-Solutions/custom-service" element={<CustomService />} />
            <Route path="/Phoenix-Soft-Solutions/devops-service" element={<DevopsService />} />
            <Route path="/Phoenix-Soft-Solutions/cloud-service" element={<CloudService />} />
            <Route path="/Phoenix-Soft-Solutions/ai-service" element={<AiService />} />
            <Route
              path="Phoenix-Soft-Solutions//outsourcing-service"
              element={<OutsourcingService />}
            />
            <Route path="/Phoenix-Soft-Solutions/poc-service" element={<PocService />} />
            <Route path="/Phoenix-Soft-Solutions/qa-service" element={<QAService />} />
            <Route path="/Phoenix-Soft-Solutions/graphic-service" element={<GraphicService />} />
            <Route path="/Phoenix-Soft-Solutions/business-service" element={<BusinessService />} />
            <Route path="/Phoenix-Soft-Solutions/backend-service" element={<BackendService />} />
            <Route path="/Phoenix-Soft-Solutions/frontend-service" element={<FrontendService />} />
            <Route path="/Phoenix-Soft-Solutions/marketing-service" element={<MarketingService />} />
            <Route path="/Phoenix-Soft-Solutions/cyber-service" element={<CyberService />} />
            <Route path="/Phoenix-Soft-Solutions/software-service" element={<SoftwareService />} />
            <Route path="/Phoenix-Soft-Solutions/lk-domain" element={<LkDomain />} />
            <Route
              path="/Phoenix-Soft-Solutions/international-domain"
              element={<InternationalDomain />}
            />
            <Route path="/Phoenix-Soft-Solutions/web-hosting" element={<WebHosting />} />
            <Route path="/Phoenix-Soft-Solutions/cloud-hosting" element={<CloudHosting />} />
            <Route path="/Phoenix-Soft-Solutions/vps-hosting" element={<VPSHosting />} />
            <Route path="/Phoenix-Soft-Solutions/business-email-hosting" element={<BusinessEmail />} />
            {/* Admin routes wrapped in PrivateRoute */}
            <Route
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }>
              <Route path="phoenix-soft-admin-counter" element={<XcropCounter />} />
              <Route path="phoenix-soft-admin-project" element={<XcropProject />} />
              <Route path="phoenix-soft-admin-event" element={<XcropEvent />} />
              <Route path="phoenix-soft-admin-feedback" element={<XcropFeedback />} />
            </Route>
          </Routes>
        </div>
        {!noNavbarPaths.includes(location.pathname) && !isAdminRoute && (
          <Footer />
        )}
        {!isAdminRoute && <Chat />}
      </div>
    </DarkModeProvider>
  );
};

export default App;
