import React, { Component } from 'react';
import styled from "styled-components";
import HeaderBar from "../components/HeaderBar";
import Footer from "../components/Footer";
import Bio from "../components/Bio";

class Blogs extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Blog>
          <div className="bio">
            <Bio />
          </div>
          <div className="main">
                <p>
                    This is the space for the main blog content;
                </p>
          </div>
        </Blog>
        <Footer />
      </div>
    );
  }
}
export default Blogs;

const Blog = styled.div`
display: flex;
.bio {
    width: 25%;
  }

  .main {
    width: 75%;
  }
  .main p {
    font-size:large;
    text-decoration: underline;
  }
`;