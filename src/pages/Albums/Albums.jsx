import React from "react";
import "./Albums.scss";
import AlbumsList from "../../components/AlbumsList/AlbumsList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

const Albums = () => {
  return (
    <>
      <Header title={"Albums"} />
      <div className="content">
        <Sidebar />
        <AlbumsList />
      </div>
    </>
  );
};

export default Albums;
