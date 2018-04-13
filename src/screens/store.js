import React, { Component } from "react";
import { Platform, View, Text, FlatList, TouchableHighlight } from "react-native";
import { Container, Content, Item, Input, Picker, Header, Form, Left, Button, Body, Icon, Title, Right, Footer, FooterTab, ListItem, List } from 'native-base';
import styles from './styles';
const ItemPicker = Picker.Item;

import { SERVER_KEY, CLIENT_KEY, URL_T_CITY, URL_T_STORE_BY_CITY } from '../api/url';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStoreByCity : [],
      dataCity: [],
      comboBoxCity: []
    }
  }

    onValueComboBoxCity(value: string) {
    this.setState({
      comboBoxCity: value
    });
    this.storeByCity();
    console.log(this.state.comboBoxCity);
  }

  componentDidMount() {
    this.city();
  }

  city = () => {
    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
    };
    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(URL_T_CITY, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resData = res['data'];
      this.setState({
        dataCity: [...this.state.dataCity, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => {
    });
  };


  storeByCity = () => {
    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
      location_id : this.state.comboBoxCity
    };
      console.log(sendData);
    var headers = {
       Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    fetch(URL_T_STORE_BY_CITY, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resData = res['data'];
      console.log(resData);
      this.setState({
        dataStoreByCity: [...this.state.dataStoreByCity, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => {
    });
  };


  renderCity = () => {
    return this.state.dataCity.map((location) => {
      return (
        <ItemPicker label={location.location_name} value={location.location_id} key={location.location_id}/>  
        );
    });
  };


  renderDataStoreByCity = () => {
    return this.state.dataStoreByCity.map((store) => {
      return (
        <ListItem style={styles.store_listItem} onPress={() => this.props.navigation.navigate('StoreDetail', {store_id : store.store_id})} >
            <Body>
            <Text>{store.store_name}</Text>
            <Text numberOfLines={2}>{store.address}</Text>
            <Text numberOfLines={1} note>{store.phone_number}</Text>
            </Body>
      </ListItem>
      )
    })
  }

 
  render() {
    const {params} = this.props.navigation.state;
    var name = params.name;
    return(
    <Container>
      <Header >
        <Left>
          <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="md-arrow-back" /> 
          </Button>
        </Left>
        <Body style={{flex: 3}}>
          <Title style={styles.header_title}>{name}</Title>
        </Body>
        <Right />
          <Button transparent onPress={() => this.props.navigation.navigate("EventAdd")}>
            <Icon name="md-more"/>
          </Button>
      </Header>
      <Content style={styles.accusearch_content}>
        <Text style={{paddingBottom: 5, marginTop:10}}>Search store by City</Text>
        <Form style={styles.accusearch_formsearch}>
            <Picker
              mode="dropdown"
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.comboBoxCity}
              onValueChange={this.onValueComboBoxCity.bind(this)}
            >
              {
              this.renderCity()

              }
            </Picker>
        </Form>
        <List>
          {
            this.renderDataStoreByCity()
          }
        </List>
        </Content>
        {/*
      <Footer>
          <FooterTab>
            <Button full danger>
              <Text style={{color: '#fff'}}>SHOW ALL STORE</Text>
            </Button>
          </FooterTab>
        </Footer>
        */}
        https://www.youtube.com/watch?v=zK12Pp3HTRQ&index=1&list=WL&t=0s
        https://www.youtube.com/watch?v=hrHXwZ7NimI&index=2&list=WL&t=0s
    </Container>
    )
  }
}

export default Store;