import "./transactions.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableList from "../../components/table/Table";

const Transactions = () => {
  return (
    <>
      <div className="transactions">
        <Navbar />
        <div className="transactions-container">
          <div className="grid heading-section">
            <div className="info">
              <h1 className="heading">Transaction history</h1>
            </div>
          </div>

          <TableList />
        </div>
      </div>
    </>
  );
};

export default Transactions;
