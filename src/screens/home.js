import React, { Component } from "react";
import {Container, Content, Header, Title, Text, Button, Icon, Right, Left, Body, TabHeading, Card, CardItem, Item, Footer, FooterTab } from "native-base";
import {StyleSheet, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';

import GridView from 'react-native-super-grid';
import Swiper from 'react-native-swiper';

//import FunctionApi from '../api/function-api';
import { FRONT_URL, SERVER_KEY, CLIENT_KEY, API_URL_BANNER } from '../api/url';

import styles from './styles';

const logo = require("../../assets/images/home.png");
const slide1 = require("../../assets/images/slide1.png");
const slide2 = require("../../assets/images/slide2.png");
const slide3 = require("../../assets/images/slide3.png");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state =
    { 
      dataBanner: [],
    }
  }

  componentWillMount() {
    this.banner();
  }

  banner = () => {

    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY
    };

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    fetch(API_URL_BANNER, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    })
    .then(res => res.json())
    .then(res => {
      console.log
      res = res['data'];
      this.setState({
        dataBanner: [...this.state.dataBanner, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => {
    });
  };

  renderBanner = () => {
    return this.state.dataBanner.map((banner) => {
      console.log("tes data: ");
      return (
        <View>
          <Image source={{ uri: FRONT_URL+banner.image }} />
        </View>   
        );
    });
  };

 
  render() {
    const { navigate } = this.props.navigation;
    const items = [
      { name: 'Products', desc:'lorem ipsum', color: '#3498db', icon:'', image: require("../../assets/images/car.png"), screen: 'Products' }, 
      { name: 'Battery Reminder', desc:'your reminder', color: '#2c3e50', icon:'', image: require("../../assets/images/alarm.png"), screen: 'AccuReminder' }, 
      { name: 'Store Locator', desc:'store location', color: '#9b59b6', icon:'', image: require("../../assets/images/store.png"), screen: 'Store' },
      { name: 'Instant Buy', desc:'order now', color: '#e67e22', icon:'', image: require("../../assets/images/order.png"), screen: 'InstantBuy' }, 
      { name: 'About', desc:'about application', color: '#f1c40f', icon:'', image: require("../../assets/images/about.png"), screen: 'About' }, 
    ];

    const itemshm = [
      { id: '1', name: 'Car', desc:'lorem ipsum', color: '#1abc9c', icon:'', image: require("../../assets/images/motocycle.png"), screen: 'AccuSearch' }, 
      { id: '2', name: 'Bike', desc:'lorem ipsum', color: '#1abc9c', icon:'', image: require("../../assets/images/car.png"), screen: 'AccuSearch' }, 
      { id: '3', name: 'Big Bike', desc:'lorem ipsum', color: '#2ecc71', icon:'', image: require("../../assets/images/big.png"), screen: 'AccuSearch' },
      { id: '4', name: 'Industry', desc:'lorem ipsum', color: '#3498db', icon:'', image: require("../../assets/images/industrial.png"), screen: 'AccuSearch' }, 
      ];

    return (
    <Container>
        <Header style={{backgroundColor: '#fff'}}>
        <Body style={{flex: 3}}>
            <Title style={{ alignSelf: "center" }}>
            <Image style={styles.home_logo} source={logo}/>
            </Title>
          </Body>
        </Header>
        <Content>     
          <View>
            <Swiper height={200}
              dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
              paginationStyle={{
                bottom: 10,
              }} loop autoplay>
                {/*
                <View>
                  {
                  this.renderBanner()
                  }
                </View>
                */}
                <TouchableOpacity onPress={() => navigate('BannerDetail', {image: slide1, name: 'Promo Merah'})}>
                <View>
                  <Image source={slide1} />
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('BannerDetail', {image: slide2, name: 'Promo Biru'})}>
                <View>
                  <Image source={slide2}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('BannerDetail', {image: slide3, name: 'Promo Hijau'})}>
                <View>
                  <Image source={slide3}/>
                </View>
                </TouchableOpacity>

          </Swiper>
        </View>
          <GridView
              itemDimension={105}
              items={items}
              style={styles.home_gridView}
              renderItem={gridItem => (
                <TouchableOpacity style={styles.home_itemContainer}
                  onPress={() => navigate(gridItem.screen, {name : gridItem.name})} >
                  <Image style={styles.home_itemImage} source={gridItem.image} />
                  <Text style={styles.home_itemName}>{gridItem.name}</Text>
                </TouchableOpacity>
              )}
          />
          <Content>
            <Text style={{alignSelf: 'center'}}></Text>
          </Content>
          {/*
          <FlatList
            horizontal
            data={itemshm}
            renderItem={({ item: itemshm }) => {
              return (              
              <Card style={styles.home_gridViewhm}>
                <TouchableOpacity style={styles.home_itemContainerhm}
                  onPress={() => navigate(itemshm.screen, '${itemshm.name}')} >  
                  <CardItem cardBody>
                    <Image source={itemshm.image} style={styles.home_itemImagehm}/>
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Text style={styles.home_itemNamehm}>{itemshm.name}</Text>
                    </Body>
                  </CardItem>
                </TouchableOpacity>
              </Card>
              );
            }}
            keyExtractor={itemshm => itemshm.id}
          />
          */}
        </Content>     
      </Container>
    );
  }
}
export default Home;