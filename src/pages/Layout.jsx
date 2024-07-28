import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns mt-6" style={{ minHeight: "100vh" }}>
        {/* <div className="column is-2">
          <Sidebar /> 
        </div> */}
        <div className="column has-background-light">
          {/* isi content. */}
          <main className="p-5">
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
