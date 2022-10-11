import "./sidebar.scss";
import { ArrowBackIos } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../assets";

import { Button } from "@mui/material";
import { useContext } from "react";
import { NavigationContext } from "../../context/NavigationContext";
import { sideMenuItems } from "./menuItems";
import IconComponent from "../Icon/CustomIcon";
const Sidebar = () => {
  const { currentLink, handleClick }: any = useContext(NavigationContext);

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="brand">
            <LogoIcon size={84} />
          </div>
          <div className="links">
            <ul>
              {sideMenuItems.map((sideMenuItem, i) => {
                return (
                  <div key={i}>
                    <p className="title">{sideMenuItem.groupTitle}</p>
                    {sideMenuItem.items.map((item, index) => {
                      return (
                        <Link to={item.to} key={index}>
                          <li
                            className={
                              currentLink === item.id ? "active" : "none"
                            }
                            onClick={() => handleClick(item.id)}
                          >
                            <span>
                              <IconComponent
                                name={item.icon}
                                size={24}
                                color={
                                  currentLink === item.id
                                    ? "#EF2C5A"
                                    : "#000000"
                                }
                              />
                              <span> {item.label}</span>
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="bottom">
          <Button
            variant="outlined"
            size="medium"
            startIcon={<ArrowBackIos fontSize="small" />}
          >
            Hide panel
          </Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
