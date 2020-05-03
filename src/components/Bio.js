import React from 'react';
import image from "../images/profilephoto.JPG"
import styled from "styled-components";
import { NavLink, Link } from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
function Bio() {
  return (
    <MainContainer>
        <img src={image} style={{width:"10rem", height:"auto", borderRadius:"50%"}} />

        <p className="name">
            Kaustuv Karan
        </p>
        <p>
            B.E. Graduate  @ TIET, Patiala
        </p>
        <p>
            <MdLocationOn />Patiala, Punjab, India
        </p>
        <p>
            <FaGraduationCap /><a href="https://www.google.co.in">Google Scholar</a>
        </p>
        <p>
            <AiFillGithub /><a href="https://www.github.com">Github</a>
        </p>
        <p>
           <MdEmail  />Email
        </p>
    </MainContainer>
  );
}
export default Bio;
const MainContainer = styled.div`



img {
    // align-self:center;
    padding:3rem 3rem 0 3rem;
    margin:3rem;
}
    .name {
        align-items:center;
        justify-content:space-evenly;
        padding-left:2rem;
        padding-right:2rem;
        margin: 0rem 2rem 2rem 2rem;
        font-size: 1.25rem;
    }
    p{
        align-items:center;
        justify-content:space-evenly;
        padding-left:2rem;
        padding-right:2rem;
        margin: 0rem 2rem 2rem 2rem;
        font-size: 1rem;
        opacity: 0.5;
        &:hover {
            opacity:1;
        }
    }
    a {
        text-decoration:none;
        color: black;
        &:hover {
            text-decoration: underline;
        }
    }
`;