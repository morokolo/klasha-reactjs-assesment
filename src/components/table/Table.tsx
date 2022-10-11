import React, { useContext, useState, useMemo } from "react";
import "./table.scss";
import Pagination from "./pagination/Pagination";
import data from "./data/mock-data.json";
import { Button, Input, InputAdornment } from "@mui/material";
import { FilterListOutlined, SearchOutlined } from "@mui/icons-material";

import { NavigationContext } from "../../context/NavigationContext";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { CurrencyConvertor } from "../currencyConvertor/CurrencyConvertor";

let PageSize = 4;
const options = ["Pending", "Successful"];
const TableList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { currency }: any = useContext(NavigationContext);

  // @ts-ignore
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;

    if (!search) {
      return data.slice(firstPageIndex, lastPageIndex);
    } else if (search) {
      let searchResults = data.filter((item) => {
        return item.customer_name.toLowerCase().includes(search.toLowerCase());
      });
      return searchResults.slice(firstPageIndex, lastPageIndex); // update the pagination on search
    }
  }, [currentPage, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // @ts-ignore
  return (
    <div className="table">
      <div className="filter-section">
        <div className="left">
          <Input
            id="search"
            type="text"
            onChange={handleSearch}
            placeholder="Search"
            endAdornment={
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            }
          />
        </div>
        <div className="right">
          <div className="filters">
            <Button
              variant="outlined"
              className="primary-btn right-margin-spacer"
              endIcon={
                <FilterListOutlined
                  fontSize="small"
                  onClick={handleClickListItem}
                />
              }
            >
              Filter
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

            <Button variant="outlined" className="primary-btn">
              Export
            </Button>
          </div>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Source</th>
            <th>Customer Name</th>
            <th>Customer email</th>
            <th>Amount</th>
            <th>Request date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* @ts-ignore */}
          {currentTableData.map((item) => {
            return (
              <tr>
                <td>{item.transaction_id}</td>
                <td>{item.source}</td>
                <td>{item.customer_name}</td>
                <td>{item.customer_email}</td>
                <td>
                  <CurrencyConvertor amount={item.amount} currency={currency} />
                </td>
                <td>{item.request_date}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
        siblingCount={1}
      />
    </div>
  );
};

export default TableList;
