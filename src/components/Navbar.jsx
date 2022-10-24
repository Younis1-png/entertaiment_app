import React from "react";
import logoImg from "../assets/logo.svg";
import bookmarkImg from "../assets/icon-nav-bookmark.svg";
import movieImg from "../assets/icon-nav-movies.svg";
import tvImg from "../assets/icon-nav-tv-series.svg";
import SaveLogo from "../assets/icon-nav-home.svg";
import userAvatar from "../assets/image-avatar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImg} alt="logo" />
      </div>
      <div className="nav__container">
        <img src={SaveLogo} alt="" />
        <img src={movieImg} alt="" />
        <img src={tvImg} alt="" />
        <img src={bookmarkImg} alt="" />
      </div>
      <div className="user">
        <img src={userAvatar} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
