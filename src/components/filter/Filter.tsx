import * as React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import "./filter.scss";

import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["USD", "NN"];

const Filter = () => {
  const { currency, handleSetCurrency }: any = useContext(NavigationContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    handleSetCurrency(options[index]);
    console.log(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="filter">
      <Button variant="text" className="tertiary-btn active">
        7 days
      </Button>
      <Button variant="text" className="tertiary-btn">
        30 days
      </Button>

      <Button
        variant="outlined"
        className="primary-btn"
        endIcon={
          <KeyboardArrowDown fontSize="small" onClick={handleClickListItem} />
        }
      >
        {currency}
      </Button>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Filter;
