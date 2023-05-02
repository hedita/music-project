import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import MusicList from "../../components/MusicList/MusicList";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header title={"Home"}/>
      <div className="content">
        <Sidebar />
        <MusicList />
      </div>
    </>
  );
};

export default Home;
