import { Button } from "@mui/material";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <p>KlashaWire - send money to businesses globally from Africa</p>
      </div>

      <div className="bottom">
        <Button variant="contained" className="secondary-btn">
          Send a Wire{" "}
        </Button>
      </div>
    </div>
  );
};

export default Featured;
