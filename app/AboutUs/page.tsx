// In your route configuration (e.g., pages/about-us.tsx)
"use client"
import AboutUsPage from "@/components/AboutUsPage";
import ContactUsPage from "@/components/ContactUsPage";
import Contact from "@/components/ContactUsPage";
import Topbar from "@/components/Navbar/Topbar";

const AboutUs: React.FC = () => {
  return (
    
    <div className="container mx-auto p-4">
      <Topbar/>
      <AboutUsPage />
      <ContactUsPage/>
    </div>
  );
};

export default AboutUs;
