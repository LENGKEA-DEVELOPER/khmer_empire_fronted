import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Barloading from "../organisms/barloading/index";
import '../../styles/skeletonsize.css'

const NavigationBar = (index) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [on,seton] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  useEffect(() => {
      const timeoutId = setTimeout(() => {
        seton(true);
      }, 700);
      return () => clearTimeout(timeoutId);
    }, []); 

  const data = index?.index

  return (
    <div>
      {on?
        <nav className="navbar">
          <div className="contain max-sm:px-[2%] sm:px-[5%] md:px-[5%] lg:px-[5%] xl:px-[5%] 2xl:px-[5%]">
            <div className="logo">
            <img src={data?.header_logo} width={"200px"} alt='logo'/>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <svg class="h-8 w-6 text-whit" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <div className={`nav-elements  ${showNavbar && 'active'}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/history">History</NavLink>
                </li>
                <li>
                  <NavLink to="/civilization">Civilization</NavLink>
                </li>
                <li>
                  <NavLink to="/art">Art</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      :
        <div>
            <Barloading/>
            <Skeleton className="skeleton-image"/>
            <Skeleton count={3} className="skeleton-text" />
            <br />
            <div className="skeleton-flex">
                <Skeleton className="box-skeleton"/>
                <Skeleton count={5} className="sub-title-skeleton"/>
            </div>
        </div>
      }
    </div>
  );
};
export default NavigationBar;