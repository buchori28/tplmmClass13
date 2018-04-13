import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class Information extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Need information? We will give you all information. 
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
