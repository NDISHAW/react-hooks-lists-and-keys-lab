import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((navLink)=>(
    <a key={navLink} href={"#" + navLink}>{navLink}</a>
  ));

  return <nav>{navLinks}</nav>;
}

export default NavBar;
