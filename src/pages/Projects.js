import React, { Component } from 'react';
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
// import CVContent from "../components/CVContent";
// import TabsComponent from '../components/TabComponent';
import ProjectsContent from '../components/ProjectsContent';

class Projects extends Component {
  render() {
    return (
      <MainContainer>
        <HeaderBar />
        <ProjectsContent />
        <Footer />
      </MainContainer>
    );
  }
}
export default Projects;

const MainContainer = styled.div`

    display: flex;
    flex-direction: column;
`;