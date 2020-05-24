import React from 'react';
// import img1 from "../images/tab-1-pic.png";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";
import { Card } from "react-bootstrap";

export default function TabContentOne() {
  return (
    <TabContentContainer>
      <div className="tab-content">
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Attention Detection</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Research project in which we are detecting the engagement level of
              students during MOOC using deep learning. (Ongoing)
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Crime Detection</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Detecting crimes from CCTV footage using UCF crime datasetusing
              MIL ranking algorithm and slow-fast networks for feature
              extraction. This project was done as a freelance work for a
              mexican company
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>GAN Applications</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              I am implementing various applications of GANs. I have implemented
              DCGAN and semantic segmantation using pix2pix GAN.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Artificial eyes</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Device for blinds that uses CNN and LSTM to generate caption and
              converts the caption of the image to speech and get output on
              raspberry pi. Similar thing can be implemented using mobile phones
              to make it more accessible.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Music genre classification</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Genre classification of music using FMA small dataset. I first
              took the fft of song sequence and created spectogram. I applied
              cnn(Densenet) on the spectograms created.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>HealthCad</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Implemented some of the latest deep learning algorithms to help
              doctors diagnose various diseases at an early stage and make it
              accessible by deploying on cloud platform.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Age and gender detection</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Age and gender detection of a person from the image of face using
              UTK face dataset. I applied transfer learning using resnet18
              architecture in pytorch.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Neural Style transfer</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Artistic style transfer based on the research paper by Gatys. Made
              it using VGG16 architecture and pytorch. I tried few other
              combinations other than those given in the paper but it worked
              best in case of those suggested in paper.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card className="card" style={{ width: "18rem", border: "solid" }}>
          <Card.Body>
            <Card.Title>Music Lyrics Generation</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text>
              Eminem like lyrics generation using LSTM networks. Lyrics were
              scrapped using pylyrics3 library and keras, NLTK was used to
              preprocess data and create LSTM.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </TabContentContainer>
  );
}

// Media Query
const customMedia = generateMedia({
  smDesktop: '1440px',
  tablet: '960px',

})

//Main Content Container
const TabContentContainer = styled.div`
//  background: var(--main-deep-dark);

  // .title {
  //    margin-top: 2rem;
  //    ${customMedia.lessThan('smDesktop')`
  //     font-size: 1.5rem;
  //     line-height: 1;
  //    `}
  // }


  // .container {
  //   margin: 0 10%;
  // }

  // .tab-content {
  //   display: grid;
  //   grid-template-columns: repeat(2, 1fr);
  //   grid-gap: 2rem;
  //   font-size: 2rem;
  //   align-items: center;
  //   padding: 2.5rem;
  //   ${customMedia.lessThan('tablet')`
  //       grid-template-columns: 100%;
  //       text-align: center;
  //       padding-left: 0;
  //       padding-right: 0;
  //    `}
  // }

  .tab-content {
    display: flex;
    flex-wrap: wrap;
  }

  .card{
    margin: 1rem;
    padding: 1rem;
    border-radius: 50px;
    font-family: Ubuntu;
  }
`;