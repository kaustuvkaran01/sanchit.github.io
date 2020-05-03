import React, { Component } from 'react';
import styled from "styled-components";
import Bio from "./Bio";
import CVDoc from "./CVdoc"


class CVContent extends Component {
  render() {
    return (
      <MainContainer>
        <div className="bio">
          <Bio />
        </div>
        <div className="main">
            <p>This is my CV for your referrence: </p>
            <br />
            <CVDoc />
        </div>
      </MainContainer>
    );
  }
}
export default CVContent;

const MainContainer = styled.div`
    display: flex;

    .bio {
        width: 25%;
    }

    .main {
        width: 75%;
    }
    .main p {
        font-size:xx-large;
        text-decoration: underline;
    }
`;