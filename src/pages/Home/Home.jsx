import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <aside className="sidebar">
          <ul>
            <li>sidebar</li>
            <li>sidebar</li>
            <li>sidebar</li>
            <li>sidebar</li>
            <li>sidebar</li>
          </ul>
        </aside>
        <ul className="music-list">
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
          <li>music</li>
        </ul>
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
