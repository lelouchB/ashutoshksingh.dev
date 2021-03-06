import React from "react"
import { Link } from "gatsby"
import { FaRegMoon } from "react-icons/fa"
import styled from "styled-components"

const NavWrapper = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Montserrat:wght@400&family=Satisfy&display=swap');

  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 0.3rem 0.6rem;

  a {
    text-decoration: none;
    font-family: "Satisfy", cursive;
    color: #6a5acd;
  }
  svg {
    font-size: 1rem;
    color: #4a4656;
    &:hover {
      color: #000;
    }
  }
  @media only screen and (max-width: 480px) {
    font-size: 1.7rem;
  }
`
export const Nav = () => {
  return (
    <NavWrapper>
      {/* Replace with your Name */}
      <Link to="/">Ashutosh K Singh</Link>
      <FaRegMoon />
    </NavWrapper>
  )
}
