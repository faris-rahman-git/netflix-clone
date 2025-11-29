import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profileImg from "../../assets/profile_img.png";
import caretIcon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const NavBar = () => {
  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 120) {
        navRef.current.classList.add("navDark");
      } else {
        navRef.current.classList.remove("navDark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbarLeft">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbarRight">
        <img src={searchIcon} alt="searchIcon" className="icon" />
        <p>Childern</p>
        <img src={bellIcon} alt="searchIcon" className="icon" />
        <div className="navbarProfile">
          <img src={profileImg} alt="searchIcon" className="profile" />
          <img src={caretIcon} alt="searchIcon" />
          <div className="dropDown">
            <p onClick={()=>{logout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
