"use client";

import AboutComponent from "../components/common/AboutComponent";
import Footer from "../components/common/Footer";
import NavBar from "../components/common/Navbar";
import ContactUsForm from "../components/ContactUsForm";
import Loan from "../components/Loan";
import LoanForm from "../components/LoanForm";
import Ouroffers from "../components/Reviews";
import Whyus from "../components/Whyus";
const DashboardPage = () => {
  return (
    <div>
      <NavBar />
      <Loan />
      <AboutComponent />
      <Whyus/>
      <Ouroffers />
      <ContactUsForm />
      <br></br>
      <Footer />
    </div>
  );
};
export default DashboardPage;
