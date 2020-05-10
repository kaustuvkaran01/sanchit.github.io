import React, { Component } from 'react'
import styled from "styled-components";
import Bio from "./Bio";
import AboutMe from "./AboutMe";
// import PageContent from "./PageContent";

class HomeContent extends Component {
  render() {
    return (
      <MainContainer>
        <div className="content">
          <div className="bio">
            <Bio />
          </div>
          <div className="about">
            <AboutMe />
          </div>
          {/* <div className="pgcontent"> */}
            {/* <PageContent /> */}
          {/* </div> */}
        </div>
      </MainContainer>
    );
  }
}
export default HomeContent;

const MainContainer = styled.div`
  height: auto;
  width: 100%;
  background: white;
  top: 0;
  justify-content: center;
  align-content: center;

  

  .content {
    display: flex;
    flex-direction: row;
    // grid-template-columns: repeat(20, 1fr);
  }
  .content .bio {
    // grid-column: 1 / 5;

    width: 25%
  }
  .content .about {
    // grid-column: 5 / 16;

    width: 70%;
  }
  // .content .pgcontent {
  //   // grid-column: 17 / 21;
  //   width: 30%;
  // }
`;