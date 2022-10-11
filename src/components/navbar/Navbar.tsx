import React from "react";
import "./navbar.scss";
import { AccountCircleOutlined, ExpandMore } from "@mui/icons-material";
import moment from "moment";
import { Button } from "@mui/material";

const Navbar = () => {
  const date = moment().format("DD MMMM,  YYYY");
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="today">
          <span> Today: {date}</span>
        </div>
        <div className="items">
          <div className="item">
            <Button
              variant="text"
              size="medium"
              endIcon={<ExpandMore fontSize="small" />}
            >
              <AccountCircleOutlined />
            </Button>
          </div>

          <div className="item">
            <Button
              variant="text"
              size="medium"
              endIcon={<ExpandMore fontSize="small" />}
            >
              En
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
