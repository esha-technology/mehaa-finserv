"use client";

import AboutComponent from "../components/common/AboutComponent";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/Navbar";
import ContactUsForm from "../components/ContactUsForm";
import Loan from "../components/Loan";
import Ouroffers from "../components/Ouroffers";
import OurServices from "../OurServices";

const DashboardPage = () => {
  return (
    <div>
      <NavBar />
      <OurServices />
      <Loan />
      <AboutComponent/>
      <Ouroffers />
      <ContactUsForm/>
      <Footer/>
</div>
  );
};
export default DashboardPage;
