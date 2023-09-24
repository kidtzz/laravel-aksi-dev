import Sidebar from "@/Layouts/menu/Sidebar";
import Navbar from "@/Layouts/navbar/Navbar";
import Footer from "@/Layouts/footer/Footer";
import RootSection from "./RouteSection";

export default function RootPage() {
  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <div className="layout-page">
            <Navbar />
            <div className="content-wrapper">
              <RootSection />
              <Footer />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}