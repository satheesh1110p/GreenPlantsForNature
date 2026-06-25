import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="site-header">
      <div className="header-logo">
        <Link to="/">
          <span>🌿</span>
          GreenNatureForPlants
        </Link>
      </div>

      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/plants">Plants</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
}

export default Header;