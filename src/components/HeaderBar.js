import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
class HeaderBar extends Component {
  render() {
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <HeaderContainer>
          <div className="header-link1">
            <NavLink to="/" style={{ color: "rgba(0,0,0,0.6)" }}>
              Home
            </NavLink>
          </div>
          <div className="header-link2">
            <NavLink to="/blogs" style={{ color: "rgba(0,0,0,0.6)" }}>
              Blogs
            </NavLink>
          </div>
          <div className="header-link3">
            <NavLink to="/cv" style={{ color: "rgba(0,0,0,0.6)" }}>
              CV
            </NavLink>
          </div>
        </HeaderContainer>
        <MainContainer>
          <div className="image-content">
            <p style={{ fontSize: "4rem", margin:"0rem" }}>Sanchit Tanwar</p>
            <p style={{ fontSize: "3rem", margin:"0rem" }}>B.E. Candidate, TIET</p>
            <p style={{ fontSize: "2rem", margin:"0rem" }}>
              Computer Vision | Deep Learning | Computational Photography
            </p>
          </div>
        </MainContainer>
      </div>
    );
  }
}

export default HeaderBar;
const HeaderContainer = styled.div`
  height: 10vh;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: row;

  .header-link1 {
    font-size: 1.5rem;
    font-weight: 700;
    // float:right;
    padding-left: 5rem;
    padding-right: 10rem;
    margin: 1rem;
    padding-top: 0rem;
    text-decoration: none;
    font-family: Ubuntu;
    
  }
  .header-link2 {
    font-size: 1.5rem;
    font-weight: 700;
    padding-left: 50rem;
    margin: 1rem;
    padding-top: 0rem;
    text-decoration: none;
    font-family: Ubuntu;
    
  }
  .header-link3 {
    font-size: 1.5rem;
    font-weight: 700;
    padding-left: 5rem;
    margin: 1rem;
    padding-top: 0rem;
    text-decoration: none;
    font-family: Ubuntu;
  }
`;
const MainContainer = styled.div`
display: flex;
.image-content {
    background: url("https://source.unsplash.com/random");
    height: 50vh;
    width: 100%;
    color: 	#9400D3;
    margin: 0;
  }
  .image-content p {
      padding-left: 10rem;
      padding-bottom: 2rem;
      justify-content: space-between;
      font-family: Ubuntu;
      font-weight: 600;
  }


`;