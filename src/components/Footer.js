import React from 'react';
import styled from "styled-components";
import { BsHeartHalf } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { AiFillInstagram,AiOutlineGitlab } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <MainContainer>
        <p>
                Made with love <BsHeartHalf background="#15F4EE"/>

                <br />
                <br />
                <FiYoutube size={32} />
                <AiFillInstagram size={32} />
                <FaFacebookF size={32} />
                <AiOutlineGitlab size={32} />
        </p>
    </MainContainer>
  );
}
export default Footer;

const MainContainer = styled.div`
    height: 30vh;
    width: 100%;
    background: black;
    color: #15F4EE;
    justify-content:center;
    align-items: center;
    p {
        text-align: center;
        top: 50%;
        transform: translateY(100%);
    }
`;