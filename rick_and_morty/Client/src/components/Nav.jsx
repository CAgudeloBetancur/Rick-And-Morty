import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import title from "../assets/img/title.png";
import {TbLogout} from "react-icons/tb";
import { useLocation } from "react-router-dom";

export default function Nav({ fSearch,logout }) {

  const currLoc = useLocation().pathname;
  
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
          <button className={`nav_btnLink ${currLoc === "/about" && 'active'}`}>
            <NavLink className="nav_link" to="/about">About</NavLink>
          </button>

          <button className={`nav_btnLink ${currLoc === "/home" && 'active'}`}>
            <NavLink className="nav_link" to="/home">Home</NavLink>
          </button>

          <button className={`nav_btnLink ${currLoc === "/favorites" && 'active'}`}>
            <NavLink className="nav_link" to="/favorites">Favorites</NavLink>
          </button>
        </div>

        <SearchBar fSearch={fSearch} />

        <button className="nav_btnLink logout" onClick={handleLogout}>
          <NavLink className="nav_link" to='/'><i><TbLogout/></i></NavLink>
        </button>
      </div>

    </nav>
  );
}
