import React from "react";

const Albums = () => {
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

export default Albums;
