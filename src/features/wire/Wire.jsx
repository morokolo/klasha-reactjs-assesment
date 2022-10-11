import "./wire.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Wire = () => {
  return (
    <>
      <div className="wire">
        <Navbar />
        <div className="grid">
          <div className="info">
            <h1 className="heading">Klasha Wire</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wire;
