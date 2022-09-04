import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">Тренажёр</div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="../">
            Главная
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="../table">
            Таблица
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="../dictation">
            Диктант
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="../examination">
            Экзамен
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
