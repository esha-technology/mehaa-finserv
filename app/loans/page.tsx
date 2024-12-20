import NavBar from "../components/common/Navbar";
import Loan from "../components/Loan";
import LoanForm from "../components/LoanForm";
const Loansection: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <Loan/>
      <LoanForm/>
      </div>
  );
};

export default Loansection;
