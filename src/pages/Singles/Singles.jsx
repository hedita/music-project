import React from "react";
import "./Singles.scss";
import SinglesList from "../../components/SinglesList/SinglesList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const Singles = () => {
  return (
    <>
      <Header title={"Singles"} />
      <div className="content">
        <Sidebar />
        <SinglesList />
      </div>
    </>
  );
};

export default Singles;
