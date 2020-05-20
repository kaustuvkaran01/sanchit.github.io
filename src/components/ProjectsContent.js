import React, { Component } from 'react'
import Bio from "./Bio";
import styled from "styled-components";
import TabsComponent from "./TabComponent";

export default class ProjectsContent extends Component {
  render() {
    return (
      <MainContainer>
        <div className="bio">
          <Bio />
        </div>
        <div className="tabs">
          <TabsComponent />
        </div>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    .bio {
        width: 25vw;
    }

    .tabs {
        width: 75vw;
    }
`;
