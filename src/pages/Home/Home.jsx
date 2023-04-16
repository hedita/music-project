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
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <MusicList />
      </div>
    </div>
  );
};

export default Home;

<div class="wrapper">
  <header>Header</header>
  <article>
    <h1>Welcome</h1>
    <p>Hi!</p>
  </article>
  <aside>
    <ul>
      <li>Sidebar</li>
    </ul>
  </aside>
  <footer>Footer</footer>
</div>;
