import React, { Component } from "react";
import {Container, Header, Title, Button, Icon, Tabs, Tab, Text, Right, Left, Body, TabHeading } from "native-base";
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import GridMenu from './gridmenu/';
import Information from "./information/";
import Account from "./account/";
import GridView from 'react-native-super-grid';

class PrimaryTab extends Component {
render() {
  const {navigate} = this.props.navigation;
    return (
      <Container>
        <Header hasTabs>
          <Body style={{ flex: 3 }}>
            <Title style={{ alignSelf: "center" }}>Smart Academy</Title>
          </Body>
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="home" />
                <Text>Home</Text>
              </TabHeading>
            }
          >
      <Home />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="md-help-circle" />
                <Text>Information</Text>
              </TabHeading>
            }
          >
            <Information />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="md-person" />
                <Text>Account</Text>
              </TabHeading>
            }
          >
            <Account />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default PrimaryTab;
