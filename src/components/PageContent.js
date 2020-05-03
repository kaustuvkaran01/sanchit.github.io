import React, { Component } from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";

class PageContent extends Component {
  render() {
    return (
      <div style={{display:"flex-row", margin:"0", padding:"0"}}>
        <br />
        <Container style={{paddingTop:"4rem"}}>
          <ReactPlayer
            width="23.75rem"
            height="15rem"
            url="https://www.youtube.com/watch?v=Jgn4riiWQrw"
          />
        </Container>
        <br />
        <Container>
          <ReactPlayer
            width="23.75rem"
            height="15rem"
            url="https://www.youtube.com/watch?v=uTEPrs32kqA"
          />
        </Container>
        <br />
        <Container>
          <ReactPlayer
            width="23.75rem"
            height="15rem"
            url="https://www.youtube.com/watch?v=IOjHtgByi9k"
          />
        </Container>
        <br />
        <Container>
          <ReactPlayer
            width="23.75rem"
            height="15rem"
            url="https://www.youtube.com/watch?v=pBKylQv1NrE"
          />
        </Container>
      </div>
    );
  }
}
export default PageContent;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 2rem;
    padding: 2rem 0 2rem 0;
`;