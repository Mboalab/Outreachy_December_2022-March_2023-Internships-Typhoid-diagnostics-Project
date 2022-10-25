import React from "react";
import Logo from '../Images/WhatsApp Image 2022-10-24 at 6.29.55 AM.jpeg'


function Nav() {
  return (
    <div className="Nav">
    <div className="logo">
    <img src={Logo} alt='businessLogo' />
    <h1 className="blogPage">Blog</h1>
    </div>

    </div>
  );
}

export default Nav;
