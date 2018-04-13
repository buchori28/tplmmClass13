import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class Account extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Detail account from Google+ or Facebook will be show here
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Dreite Team
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
