import React, { Component } from 'react';
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import CVContent from "../components/CVContent";

class CV extends Component {
  render() {
    return (
      <div>
          <HeaderBar />
          <CVContent />
          <Footer />
      </div>
    )
  }
}
export default CV;