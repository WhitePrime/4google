import { NavLink } from "react-router-dom";
import "./Navigator.css";

export default function Navigator() {
  function handleActive({ isActive }) {
    if (isActive) {
      return "active";
    }
  }
  return (
    <nav className="navi">
      <ul>
        <li>
          <NavLink className={handleActive} to="/">
            По умолчанию
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/keyword">
            Ключевое слово
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/site">
            На сайте
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/filetype">
            Тип файла
          </NavLink>
        </li>
        <li>
          <NavLink className={handleActive} to="/image">
            Изображение
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
