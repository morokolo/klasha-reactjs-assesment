import './sidebar.scss';
import { ArrowBackIos} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { AnalyticsIcon, CartIcon, ExchangeIcon, LogoIcon, MarketingIcon, PaymentIcon, PaymentLinkIcon, PieChartIcon,  TransactionIcon, WalletIcon } from '../../assets';

import { Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import {NavigationContext} from "../../context/NavigationContext";

const Sidebar = () => {

  const {currentLink, handleClick} = useContext((NavigationContext))


  return (
    <>

    <div className="sidebar">
      <div className="top">
        <div className="brand">
        <LogoIcon  size={84} />
        </div>
        <div className="links">
          <ul>
          <p className="title">Main Pages</p>
          <Link to='/'>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => handleClick(1)}
            >
              <a href="#">
              <PieChartIcon size={24}  color={currentLink === 1 ? "#EF2C5A" : "#000000"} />
                <span> Dashboard</span>
              </a>
            </li>
            </Link>
            <Link to='/balances'>
            <li
              className={currentLink === 2 ? "active" : "none"}
              onClick={() => handleClick(2)}
            >
              <a href="#">
              <WalletIcon size={24} color={currentLink === 2 ? "#EF2C5A" : "#000000"} />
                <span> Balances</span>
              </a>
            </li>
            </Link>
            <Link to='/transactions'>
            <li
              className={currentLink === 3 ? "active" : "none"}
              onClick={() =>  handleClick(3)}
            >
              <a href="#">
              <TransactionIcon size={24} color={currentLink === 3 ? "#EF2C5A" : "#000000"} />
                <span> Transactions</span>
              </a>
            </li>
            </Link>
            <Link to='/analytics'>
            <li
              className={currentLink === 4 ? "active" : "none"}
              onClick={() => handleClick(4)}
            >
              <a href="#">
              <AnalyticsIcon size={24}  color={currentLink === 4 ? "#EF2C5A" : "#000000"}/>
                <span> Analytics</span>
              </a>
            </li>
            </Link>
            <Link to='/marketing'>
            <li
              className={currentLink === 5 ? "active" : "none"}
              onClick={() => handleClick(5)}
            >
              <a href="#">
              <MarketingIcon size={24}  color={currentLink === 5 ? "#EF2C5A" : "#000000"}/>
                <span> Marketing</span>
              </a>
            </li>
            </Link>
            <Link to='/exchange-rates'>
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => handleClick(6)}
            >
              <a href="#">
              <ExchangeIcon size={24}  color={currentLink === 6 ? "#EF2C5A" : "#000000"}/>
                <span> Exchange rates</span>
              </a>
            </li>
            </Link>
            <p className="title">Accept Payments</p>
            <Link to='/checkout'>
            <li
              className={currentLink === 7 ? "active" : "none"}
              onClick={() => handleClick(7)}
            >
              <a href="#">
              <CartIcon size={24}  color={currentLink === 7 ? "#EF2C5A" : "#000000"}/>
                <span> Klasha Checkout</span>
              </a>
            </li>
            </Link>
            <Link to='/payment-links'>
            <li
              className={currentLink === 8 ? "active" : "none"}
              onClick={() => handleClick(8)}
            >
              <a href="#">
              <PaymentLinkIcon size={24}  color={currentLink === 8 ? "#EF2C5A" : "#000000"}/>
                <span> Payment Links</span>
              </a>
            </li>
            </Link>
            <p className="title">Send Payments</p>
            <Link to='/wire'>
            <li
              className={currentLink === 9 ? "active" : "none"}
              onClick={() => handleClick(9)}
            >
              <a href="#">
              <PaymentIcon size={24}  color={currentLink === 9 ? "#EF2C5A" : "#000000"}/>
                <span> KlashaWire</span>
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="bottom">
     <Button variant="outlined" size="medium" startIcon={<ArrowBackIos fontSize="small" />}>Hide panel</Button>

      </div>
    </div>
  </>
  )
}

export default Sidebar