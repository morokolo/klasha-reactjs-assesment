import "./paymentlinks.scss";
import Navbar from "../../components/navbar/Navbar";

const PaymentLinks = () => {
  return (
    <>
      <div className="paymentLinks">
        <Navbar />
        <div className="grid">
          <div className="info">
            <h1 className="heading">Payment Links</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentLinks;
