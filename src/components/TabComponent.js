import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabContentOne from './Tabs/TabContentOne';
import TabContentTwo from "./Tabs/TabContentTwo";
import TabContentThree from "./Tabs/TabContentThree";
import TabContentFour from "./Tabs/TabContentFour";
import styled from "styled-components";

class TabsComponent extends Component {

  state = {
    tabIndex: 0
  }

  render() {
    return (
      <MainContainer>
          <Tabs className="tabs"
            selectedIndex={this.state.tabIndex}
            onSelect = {tabIndex => this.setState( {tabIndex} )}
          >
              <TabList className="tab-nav-container">
                  <Tab className={ `${this.state.tabIndex === 0 ? 'active': null} `}> 
                    <p>ML</p>
                    <br />
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 1 ? 'active': null} `}>
                     <p>IOT</p>
                     <br />
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 2 ? 'active': null} `}>
                     <p>Robotics</p>
                     <br />
                  </Tab>
                  <Tab className={ `${this.state.tabIndex === 3 ? 'active': null} `}>
                     <p>Reinforcement Learning</p>
                     <br />
                  </Tab>
              </TabList>
              <TabPanel>
                <TabContentOne />
              </TabPanel>
              <TabPanel>
                <TabContentTwo />
              </TabPanel>
              <TabPanel>
                <TabContentThree />
              </TabPanel>
              <TabPanel>
                <TabContentFour />
              </TabPanel>
          </Tabs>
      </MainContainer>
    )
  }
}
export default TabsComponent;

const MainContainer = styled.div`
    // background: #DFDFDF;
  .tab-nav-container {
    // display: grid;
    // grid-template-columns: repeat(12, 1fr);
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    font: Ubuntu;
    font-size: large;
    color: red;
    text-decoration: none;

    
  }

  strong {
    width: 100%;
    text-decoration: none;
  }
  p {
    text-decoration: none;
  }

`;