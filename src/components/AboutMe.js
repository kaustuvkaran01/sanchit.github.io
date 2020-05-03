import React, { Component } from 'react';
import styled from "styled-components";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <TextContainer style={{ paddingTop: "4rem" }}>
          I am a B.E student in the Electronics Engineering discipline at{" "}
          <a href="https://www.thapar.edu">
            Thapar Institute of Engineering and Technology
          </a>{" "}
          since May 2016. I am working under the supervision of Prof.
          Shanmuganathan Raman. My research interests lie in Computer Vision,
          Deep Learning and Computational Photography. My Ph.D. thesis is
          closely related to the tasks which involve moving objects present in
          videos or images captured from different view-points. I am actively
          working with deep neural networks for videos and image sequences. I
          have experience of working with convolutional neural networks,
          recurrent neural networks, and generative adversarial networks. In my
          research works, I utilize the information provided by the moving
          regions present in videos or multi-view image sequences to solve
          problems like action recognition, dynamic object detection, and image
          sequencing. I also explore the advantages of using multiple images of
          a scene over a single image.
        </TextContainer>
        <br />
        <HeadingContainer>News And Highlights</HeadingContainer>
        <TextContainer>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </TextContainer>
        <br />
        <HeadingContainer>Education</HeadingContainer>
        <TextContainer>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </TextContainer>
        <br />
        <HeadingContainer>Work Experience</HeadingContainer>
        <TextContainer>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </TextContainer>
        <br />
        <HeadingContainer>Awards</HeadingContainer>
        <TextContainer>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </TextContainer>
        <br />
        
        <br />
      </div>
    );
  }
}
export default AboutMe;

const TextContainer = styled.div`
    padding: 2rem 2rem 0 0;
    font-size: large;
    opacity: 0.5;
    a {
        color: rgb(21,244,244);
    }
`;
const HeadingContainer = styled.div`
    opacity: 0.8;
    font-size: x-large;
`;