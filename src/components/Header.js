import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"
import DogImage from "../assets/DogHeader.jpg"


const Header = () => {
    return (
    <>
        <Nav className="header-nav">
      <NavItem>
        <NavLink to="/">
          <img
            src={DogImage}
            alt="header"
            className="dog-logo"
          />
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dogindex" className="nav-link">
          Meet the Dogs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/dognew" className="nav-link">
          Add a New Dog
        </NavLink>
      </NavItem>
      <NavItem>
        <a
          target="blank"
          href="https://www.aspca.org/"
          className="nav-link"
        >
          Adopt a Dog!
        </a>
      </NavItem>
    </Nav>

    </>
    )
}
export default Header