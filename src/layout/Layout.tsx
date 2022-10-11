import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
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
