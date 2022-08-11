import React from "react";
import logo from "../images/logo.svg";

const header = () => {
  const showNav = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector("nav");
    menuBtn.addEventListener('click', ()=>{
      navbar.classList.toggle('open')
      menuBtn.classList.toggle('rotate')
    })

   
    
  }

  return (
    <>
    <header className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <nav>
        <div className="nav-logo">
          <a href="#"><img src={logo} alt="" /></a> 
        </div>
        <ul>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Careear</button>
          </li>
          <li>
            <button>Events</button>
          </li>
          <li>
            <button>Products</button>
          </li>
          <li>
            <button>Support</button>
          </li>
        </ul>
      </nav>

      <div className="menu-btn" onClick={() => showNav()}>
        <div className="bar bar1"></div>
        <div className="bar bar2"></div>
        <div className="bar bar3"></div>
      </div>
    </header>
    </>
  );
};

export default header;
