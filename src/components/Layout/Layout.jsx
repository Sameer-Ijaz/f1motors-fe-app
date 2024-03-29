import React from "react";
import Router from "../../routes/Router";
import Sidebar from "../Sidebar/Sidebarr";
import TopNav from "../TopNav/TopNav";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main__layout">
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
