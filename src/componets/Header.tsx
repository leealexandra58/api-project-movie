import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BsFillStarFill } from "react-icons/bs";
import "./Header.css"

function Header() {

    const [hoverHome, setHoverHome] = useState(false);
    const [hoverSearch, setHoverSearch] = useState(false);
    const [hoverFav, setHoverFav] = useState(false);

    const handleMouseOverHome = () => {
        setHoverHome(true);
    };

    const handleMouseOutHome = () => {
        setHoverHome(false);
    }

    const handleMouseOverSearch = () => {
        setHoverSearch(true);
    };

    const handleMouseOutSearch = () => {
        setHoverSearch(false);
    }


    const handleMouseOverFav = () => {
        setHoverFav(true);
    };

    const handleMouseOutFav = () => {
        setHoverFav(false);
    }


    return (
      <div className="Header">
        <div className="title">
            <h1>MOVIEVERSE</h1>
        </div>

        <div className="nav-btns">
            <div className="home-nav-btn">
                <Link to="/">
                    <button className="home-button" onMouseOver={handleMouseOverHome} onMouseOut={handleMouseOutHome}>
                        <ImHome size={20}/>
                    </button>
                </Link>
                {hoverHome && (
                    <div className="home-text">
                        Home
                    </div>
                )}
            </div>

            <div className="search-nav-btn">
                <Link to="/search">
                    <button className="search-button" onMouseOver={handleMouseOverSearch} onMouseOut={handleMouseOutSearch}>
                        <HiMagnifyingGlass size={20}/>
                    </button>
                </Link>
                {hoverSearch && (
                    <div className="search-text">
                        Search
                    </div>
                )}
            </div>

            <div className="fav-nav-btn">
                <Link to="/favorites">
                    <button className="fav-button" onMouseOver={handleMouseOverFav} onMouseOut={handleMouseOutFav}>
                        <BsFillStarFill size={20}/>
                    </button>
                </Link>
                {hoverFav && (
                    <div className="fav-text">
                        Favorites
                    </div>
                )}
            </div>
        </div>

    </div>
    );
}
  
export default Header;