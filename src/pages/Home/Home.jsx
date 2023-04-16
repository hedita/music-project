import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import MusicList from "../../components/MusicList/MusicList";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Sidebar />
        <MusicList />
      </div>
    </div>
  );
};

export default Home;