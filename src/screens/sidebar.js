import React, { Component } from "react";
import { Image } from "react-native";
import { Content, Text, List, ListItem, Icon, Container, Left, Badge } from "native-base";
import styles from "./styles";

const drawerCover = require("../../assets/drawer-cover.png");
const drawerImage = require("../../assets/logo-smart-academy.png");
const datas = [
      { name: "Home",route: "Home",icon: "home",bg: "#C5F442" },
      { name: 'CATEGORY 1', desc:'lorem ipsum', code: '#1abc9c', icon: 'car', screen: 'EventPage' }, 
      { name: 'CATEGORY 2', desc:'lorem ipsum', code: '#2ecc71', icon: 'ios-jet', screen: 'ApprovalList' },
      { name: 'CATEGORY 3', desc:'lorem ipsum', code: '#3498db', icon: 'ios-flash', screen: 'Rank' }, 
      { name: 'STORE', desc:'store location', code: '#9b59b6', icon: 'ios-flash', screen: 'Maps' },
      { name: 'ORDER', desc:'order now', code: '#e67e22', icon: 'ios-flash', screen: 'Qrcode' }, 
      { name: 'REMINDER', desc:'your reminder', code: '#2c3e50', icon: 'ios-flash', screen: 'Github' }, 
      { name: 'ABOUT', desc:'about application', code: '#f1c40f', icon: 'ios-flash', screen: 'JavaScript' }, 
];

class SideBar extends Component 
{constructor(props) {  
  super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawer_cover} />
          <Image square style={styles.drawer_image} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.drawer_text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
