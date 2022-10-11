import "./exchangerates.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ExchangeRates = () => {
  return (
    <>
      <div className="exchangeRates">
        <Navbar />
        <div className="grid">
          <div className="info">
            <h1 className="heading">Exchange Rates</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExchangeRates;
