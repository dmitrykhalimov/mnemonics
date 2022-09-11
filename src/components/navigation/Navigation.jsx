import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navigation = (props) => {
  const { activeCategory } = props;
  return (
    <nav className="navigation">
      <div className="logo">Тренажёр</div>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link
            className={`navigation__link ${
              activeCategory === "main" ? "navigation__link--active" : "b"
            }`}
            to="../"
          >
            Главная
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            className={`navigation__link ${
              activeCategory === "table" ? "navigation__link--active" : "b"
            }`}
            to="../table"
          >
            Таблица
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            className={`navigation__link ${
              activeCategory === "dictation" ? "navigation__link--active" : "b"
            }`}
            to="../dictation"
          >
            Диктант
          </Link>
        </li>
        <li className="navigation__item">
          <Link
            className={`navigation__link ${
              activeCategory === "examination"
                ? "navigation__link--active"
                : "b"
            }`}
            to="../examination"
          >
            Экзамен
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
