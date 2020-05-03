import React, { Component } from 'react'
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

class Home extends Component {
  

  componentDidMount(){
    window.scroll(0,0);
  }

  render() {
    return (
      <MainContainer>
          <HeaderBar />
          <HomeContent />
          <Footer />
      </MainContainer>
    )
  }
}
export default Home;

const MainContainer = styled.div`
display: flex;
flex-direction: column;

`;