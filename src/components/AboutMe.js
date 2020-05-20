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
          since May 2016. I have always been curious to learn how things work,
          the engineering in small things is very intriguing to me. I like being
          involved in making new things, be it my first transistor based circuit
          in 5th standard or the Machine Learning based projects I have been
          doing since last two years. I have keen interest in robotics and the
          love started back in 11th standard in a workshop during my high school
          and there has been no looking back since then. I am working with
          constant perseverance with one sole purpose of learning robotics in my
          mind. In the first year of my engineering I studied about Arduino,
          Raspberry pi, AVR, ARM and made various projects using them.
          <br />
          <br />
          Then, I went on to explore the applications of deep learning and
          computer vision in robotics. The field is so immersive and has a lot
          to explore, I'm working on improving my concepts and projects in deep
          learning since then. I have worked on various topics of deep learning
          including computer vision, nlp, time series forecasting etc. but, most
          of my work is in the field of computer vision based on deep learning
          as, it interests me more and involves a lot of robotics. In computer
          vision I have worked on various projects some of them can be found
          below in my work section. I am also working on a research paper with
          Associate Professor in my college. Recently, I have been studying deep
          reinforcement learning algorithms and have implemented DQN based pong
          AI. In future, I look forward to work and learn more in the field. I
          want to contribute to the open source deep learning community, so that
          it reaches to more and more engineers. The main goal is to implement
          this knowledge for making life simpler and better.
        </TextContainer>
        <br />
        <HeadingContainer>News And Highlights</HeadingContainer>
        <Table>
          <tbody>
            <tr>
              <td>Jan</td>
              <td className="tdata">
                Something amazing happened{" "}
                <a href="https://www.google.com">Here</a>
              </td>
            </tr>
            <tr>
              <td>Feb</td>
              <td className="tdata">
                Something different happened{" "}
                <a href="https://www.google.com">Here</a>
              </td>
            </tr>
          </tbody>
        </Table>
        <br />
        <HeadingContainer>Education</HeadingContainer>
        <TextContainer>
          <ul>
            <li>
              B.E.&nbsp; Electronics and Communication Engineering, Thapar
              Institute of Engineering and Technology, August '16 - June '20
              CGPA : 8.07
            </li>
            <li>
              High School: DAV Public School, Panipat, Haryana, 2015-2016,
              Percentage: 90.2
            </li>
          </ul>
        </TextContainer>
        <br />
        <HeadingContainer>Work Experience</HeadingContainer>
        <Table>
          <tbody>
            <tr>
              <td>08.2018 - 08.2019</td>
              <td>General Secretary: IETE</td>
              <td>Managing day to day work of Thapar Chapter of the nationwide technical society of electronics and communication</td>
            </tr>
            <tr>
              <td>09.17 - 06.18</td>
              <td>Technical Head: IETE</td>
              <td>I arranged workshops on several topics such as Arduino and its peripherals. I also volunteered to mentor 15 students from their Freshman Year.</td>
            </tr>
            <tr>
              <td>2018</td>
              <td>
                Technical Head: Elementos
              </td>
              <td>Technical Head of a week long tech fest of robotics and electronics. I also managed a hackathon in the same.</td>
            </tr>
          </tbody>
        </Table>
        <br />
        <HeadingContainer>Skills</HeadingContainer>
        <Table>
          <tbody>
            <tr>
              <td>Languages</td>      
              <td className="tdata">C++, Python, Matlab</td>  
            </tr>
            <tr>
              <td>Deep Learning</td>
              <td className="tdata">PyTorch, Tensorflow, Keras</td>
            </tr>
            <tr>
              <td>Deep Reinforcement Learning</td>
              <td className="tdata">
                Deep-Q-Networks (DQN), Double Deep-Q-Networks(DDQN),
                Asynchronous Advantage Actor Crtic (A3C)
              </td>
            </tr>
            <tr>
              <td>Robotics and Electronics</td>
              <td className="tdata">
                Arduino and peripherals, Raspberry Pi, V-REP(simulation tool),
                Embedded systems
              </td>
            </tr>
            <tr>
              <td>Other Skills</td>
              <td className="tdata">
                Image Processing, Git, Latex, Scikit-learn, Librosa, Opencv
              </td>
            </tr>
          </tbody>
        </Table>
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
    text-align: left;
    justify-content: center;
    opacity: 0.8;
    a {
        // color: #9400D3;
        color: #ffcc00;
        font-family: Ubuntu;
        font-weight: 600;
    }
`;
const HeadingContainer = styled.div`
    opacity: 0.8;
    font-size: x-large;
    font-weight: 600;
    font-family: Ubuntu;
`;
const Table = styled.table`
    th, td {
      padding: 15px;
      text-align: left;
      font-size:large;
      border-bottom: 1px solid black;
      color: rgba(0,0,0,0.8);
    }
    .tdata {
      width: 100%;
    }
    a {
      // color: #00ccff;
      color: #ffcc00;
      font-weight: 600;
    }
`;