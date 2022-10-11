import "./checkout.scss";
import Navbar from "../../components/navbar/Navbar";

const Checkout = () => {
  return (
    <>
      <div className="checkout">
        <Navbar />
        <div className="grid">
          <div className="info">
            <h1 className="heading">Checkout</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
