import React from 'react'
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
function Header() {
  return (
    <nav>
        <h1>SamsanTech.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#breands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
          
        </main>
    </nav>
  );
}

export default Header