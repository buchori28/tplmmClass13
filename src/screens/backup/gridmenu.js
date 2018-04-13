import React, { Component } from "react";
import {Content, Icon} from "native-base";
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import GridView from 'react-native-super-grid';
import styles from './styles';


class GridMenu extends Component {
    constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      height: 150,
      arrowSize: 14,
      dataSource: [
        {
          url: 'https://smartacademy.000webhostapp.com/images/1.png',
        }, {
          url: 'https://smartacademy.000webhostapp.com/images/2.png',
        }, {
          url: 'https://smartacademy.000webhostapp.com/images/3.png',
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    const { navigate } = this.props.navigation;
    const items = [
      { name: 'EVENT', desc:'manage your event', code: '#1abc9c', icon: 'ios-bookmarks', screen: 'EventList' }, 
      { name: 'APPROVAL LIST', desc:'approve event', code: '#2ecc71', icon: 'ios-checkmark-circle', screen: 'ApprovalList' },
      { name: 'RANK', desc:'check your rank', code: '#3498db', icon: 'ios-ribbon', screen: 'Rank' }, 
      { name: 'MAPS', desc:'share location and get nearby', code: '#9b59b6', icon: 'ios-map', screen: 'Maps' },
      { name: 'QRCODE', desc:'scan qrcode', code: '#e67e22', icon: 'ios-barcode', screen: 'Qrcode' }, 
      { name: 'JAVASCRIPT', desc:'RN based on JS language', code: '#f1c40f', icon: 'logo-javascript', screen: 'JavaScript' }, 
      { name: 'GITHUB', desc:'share your source code project', code: '#2c3e50', icon: 'logo-github', screen: 'Github' }, 
      { name: 'LOGOUT', desc:'logout from main app', code: '#e74c3c', icon: 'ios-undo', screen: 'Logout' },
    ];
    return (
      <Content>
        
        <GridView
        itemDimension={130}
        items={items}
        style={styles.home_gridView}
        renderItem={item => (
          <TouchableOpacity style={[styles.home_itemContainer, { backgroundColor: item.code }]}
          onPress={() => navigate(item.screen)} >
            <Icon style={styles.home_itemIcon} name={item.icon} />
            <Text style={styles.home_itemName}>{item.name}</Text>
            <Text style={styles.home_itemDesc}>{item.desc}</Text>
          </TouchableOpacity>
        )}
      />
      </Content>
    );
  }
}
export default GridMenu;