// In navbar.js
/*
import { useState } from "react";
import "../styles/navbar.css";
export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
            MY CLICKS
        </a>
        <button className="hamburger"
            onClick={()=> {
                setIsNavExpanded(!isNavExpanded);
            }}
           >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="white"
                >
                <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
            </svg>

       </button> 
        <div className={isNavExpanded ? "navigation-menu-expanded":"navigation-menu"}>
            <ul>
                <li>
                    <a href="/home">Home</a>
                    
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </div>
      </nav>
      )
  }*/
  /*<nav className="desktop-nav">
                  <ul className="menus">
                    {menuItemsData.map((menu, index) => {
                      return <MenuItems items={menu} key={index} />;
                    })}
                  </ul>
                </nav>*/
  
  /*import { HashLink } from 'react-router-hash-link';*/
  import "../styles/NaveBar.css";
  
  import React, { useState, useEffect } from "react";
  import { Navbar, Nav, Container } from "react-bootstrap";
  import logo from '../assets/img/logo.svg';
  import navIcon1 from '../assets/img/nav-icon1.svg';
  import navIcon2 from '../assets/img/nav-icon2.svg';
  import navIcon3 from '../assets/img/nav-icon3.svg';
  import { Link, useLocation, useNavigate } from 'react-router-dom';
  import {
    BrowserRouter as Router
  } from "react-router-dom";
  import { NavDropdown } from "react-bootstrap";


  
  export const NavBar = () => {
  
    //const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, [])
  
    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
  
    return (
      /*<Router>*/
        <div className="navigation">
        <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand onClick={() => { onUpdateActiveLink('home'); navigate('/home'); }}>
              <img className='logo' src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="/skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="/portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
                <Nav.Link href="/about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/vaishnavi-singh-011b15223/"><img src={navIcon1} alt="linkedin" /></a>
                  <a href="https://www.instagram.com/19__vaishnavi/"><img src={navIcon3} alt="insta" /></a>
                </div>
                
                  <button className="vvd" onClick={() => console.log('connect')} ><span className='connect'></span></button>
                
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
      /*</Router>*/
    )
  }