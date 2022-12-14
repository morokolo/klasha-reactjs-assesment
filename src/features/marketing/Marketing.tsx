import "./marketing.scss";
import Navbar from "../../components/navbar/Navbar";

const Marketing = () => {
  return (
    <>
      <div className="marketing">
        <Navbar />
        <div className="grid">
          <div className="info">
            <h1 className="heading">Marketing</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
