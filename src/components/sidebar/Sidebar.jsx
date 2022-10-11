import './sidebar.scss';
import { ArrowBackIos} from '@mui/icons-material';
import {Link} from 'react-router-dom'
import { AnalyticsIcon, CartIcon, ExchangeIcon, LogoIcon, MarketingIcon, PaymentIcon, PaymentLinkIcon, PieChartIcon,  TransactionIcon, WalletIcon } from '../../assets';

import { Button } from '@mui/material';
import {useState, useEffect, useContext} from 'react';
import {NavigationContext} from "../../context/NavigationContext";
import { sideMenuItems } from './menuItems';
import LinkItem from './LinkItem';
import IconComponent from '../Icon/CustomIcon';
import CustomIcon from '../Icon/CustomIcon';



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
        {sideMenuItems.map((sideMenuItem, i) => {
          return  <div key={i}>
            <p className="title">{sideMenuItem.groupTitle}</p>
            {
            sideMenuItem.items.map((item, index)=> {
                return   <Link to={item.to} key={index}>
                <li
                  className={currentLink === item.id ? "active" : "none"}
                  onClick={() => handleClick(item.id)}
                >
                  <a href="#">
                   <IconComponent name={item.icon} size={24}  color={currentLink === item.id ? "#EF2C5A" : "#000000"} />
                    <span> {item.label}</span>
                  </a>
                </li>
                </Link>
            })
        }
          </div>;
        })}
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