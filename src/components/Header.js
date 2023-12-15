import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import DogImage from "../assets/headerimage.jpg"

const Header = () => {
    return (
    <>
      {/* <div className="header-background"> */}
        <Nav className="header-nav">
      {/* <NavItem>
        <NavLink to="/">
        <img
            src={DogImage}
            alt="header"
            className="dog -logo"
          />
        </NavLink>
        </NavItem> */}
      
      <NavItem>
        <button className="button1">
        <NavLink to={"/"} className="nav-link">
          Home
        </NavLink>
        </button>
      </NavItem>
      
      <NavItem>
        <button className="button2">
        <NavLink to={"/dogindex"} className="nav-link">
          Meet the Dogs
        </NavLink>
        </button>
      </NavItem>
      
      <NavItem>
          <button className="button3">
        <NavLink to={"/dognew"} className="nav-link">
          Add a New Dog
          
        </NavLink>
          </button>
      </NavItem>

      <NavItem>
        <button className="button4">
        <a
          target="blank"
          href="https://www.aspca.org/"
          className="nav-link"
        >
          Adopt a Dog?
        </a>
        </button>
        </NavItem>
      </Nav>
    {/* </div> */}
  </>
    )
}
export default Header