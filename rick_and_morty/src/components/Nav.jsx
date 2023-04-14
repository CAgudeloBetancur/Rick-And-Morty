import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import title from "../assets/img/title.png";

export default function Nav({ fSearch,logout }) {

  const handleLogout = () => {
    logout();
  }

  return (
    <nav className="nav">

      <div className="nav_container">        
        <div className="nav_title">
          <img src={title} alt="titulo" />
        </div>

        <div className="nav_btnContainer">
          <button className="nav_btnLink">
            <NavLink className="nav_link" to="/about">About</NavLink>
          </button>

          <button className="nav_btnLink">
            <NavLink className="nav_link" to="/home">Home</NavLink>
          </button>

          <button className="nav_btnLink">
            <NavLink className="nav_link" to="/favorites">Favorites</NavLink>
          </button>
        </div>

        <SearchBar fSearch={fSearch} />

        <button className="nav_btnLink" onClick={handleLogout}>
          <NavLink className="nav_link" to='/'>Logout</NavLink>
        </button>
      </div>

    </nav>
  );
}
