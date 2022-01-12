import React from "react";
import './Header.css'
import Search from './Search'
// import Home from './Home'
import { Link } from "react-router-dom";


const Header = () => {
  return (
      <div>
        <header className="header">
          <Link to="/Home" className="title">
            Pokedex APP
          </Link>
          {/* <nav className="nav">        
          </nav> */}
        </header>
        <Search />
      </div>
  )
}

export default Header;