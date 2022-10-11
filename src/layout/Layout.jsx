import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";

const Layout = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      <aside className="aside">
        <Sidebar />
      </aside>
      <main className="main">{children}</main>
    </div>
  );
};

export default Layout;
