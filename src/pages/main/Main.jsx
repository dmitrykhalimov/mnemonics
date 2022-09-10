import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation";

import "./main.scss";

const Main = () => {
  return (
    <>
      <Navigation activeCategory="main"></Navigation>
      <section className="menu">
        <div className="menu__container">
          <h1 className="menu__heading">Тренажер цифровых выражений</h1>

          <nav className="menu__nav">
            <Link className="menu__nav-button" to="/table">
              Таблица
            </Link>
            <Link className="menu__nav-button" to="/dictation">
              Диктант
            </Link>
            <Link className="menu__nav-button" to="/examination">
              Экзамен
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Main;
