import React from "react";
import "./PlayLists.scss";
import PlayList from "../../components/PlayList/PlayList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const PlayLists = () => {
  return (
    <>
      <Header title={"Playlists"} />
      <div className="content">
        <Sidebar />
        <PlayList />
      </div>
    </>
  );
};

export default PlayLists;
