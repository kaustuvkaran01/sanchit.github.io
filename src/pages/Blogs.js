import React, { Component } from 'react';
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";

class Blogs extends Component {
  render() {
    return (
      <MainContainer>
          <HeaderBar />
            <div></div>
          <Footer />
      </MainContainer>
    )
  }
}
export default Blogs;

const MainContainer = styled.div`

`;