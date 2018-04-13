import React, { Component } from "react";
import { View, Text, FlatList, TouchableHighlight } from "react-native";
import { Container, Content, Item, Input, Picker, Header, Form, Left, Button, Body, Icon, Title, Right, Footer, FooterTab, ListItem, List, Thumbnail } from 'native-base';
import styles from './styles';
const ItemPicker = Picker.Item;

import { SERVER_KEY, CLIENT_KEY, URL_T_VEHICLE, URL_T_BRAND, URL_T_TYPE  } from '../api/url';

class AccuSearch extends Component {
  constructor(props) {
    super(props);
      const {params} = this.props.navigation.state;
      const CATEGORY_ID = params.category_id;
    this.state = {
      dataVehicle: [],
      dataBrand: [],
      dataType: [],
      category_id : CATEGORY_ID,
      filterSearch : '',
      totalSearch : 0,
      comboBoxBrand: 0,
      comboBoxType: 0,
      statusCombo: false
    }
  }

  onValueComboBoxBrand(value: string) {
    this.setState({
      comboBoxBrand: value,
      statusCombo: true
    });
    console.log("ID BRAND: "+this.state.comboBoxBrand);
    this.type();
  }

    onValueComboBoxType(value: string) {
    this.setState({
      comboBoxType: value
    });
  }

    _onChangeFilterSearch = (filterSearch) => {
    this.setState({filterSearch});
  };

  componentDidMount() {
    this.vehicle();
    this.brand();
  }

  brand = () => {

    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
      category_id : this.state.category_id,
    };

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    
    fetch(URL_T_BRAND, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resData = res['data'];
      this.setState({
        dataBrand: [...this.state.dataBrand, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => {
    });
  };

  type = () => {

    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
      brand_id : this.state.comboBoxBrand,
    };

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    
    fetch(URL_T_TYPE, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resType = res['data'];
      console.log(resType);
      this.setState({
        dataType: [...this.state.dataType, ...res.data],
        error: res.error || null,
      });
    })
    .catch(error => {
    });
  };

  vehicle = () => {

    var sendData = {
      server_key : SERVER_KEY,
      client_key : CLIENT_KEY,
      category_id : this.state.category_id,
    };

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
    
    fetch(URL_T_VEHICLE, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(sendData)
    }).then(res => res.json()).then(res => {
      resData = res['data'];
      this.setState({
        dataVehicle: [...this.state.dataVehicle, ...res.data],
        error: res.error || null,
        totalSearch : res.total_data
      });
    })
    .catch(error => {
    });
  };


    renderBrand = () => {
    return this.state.dataBrand.map((brand) => {
      return (
        <ItemPicker label={brand.brand_name} value={brand.brand_id} key={brand.brand_id}/>  
        );
    });
  };


    renderType = () => {
    return this.state.dataType.map((typeC) => {
      return (
        <ItemPicker label={typeC.type_name} value={typeC.type_id} key={typeC.type_id}/>  
        );
    });
  };


 
  render() {
    const {params} = this.props.navigation.state;
    var name = params.name;

    const filterRegex = new RegExp(String(this.state.filterSearch), 'i');
    const filter = (item) => (
      filterRegex.test(item.search) || filterRegex.test(item.title)
    );
    const filteredData = this.state.dataVehicle.filter(filter);
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
        <Text style={{paddingBottom: 5}}>Search products</Text>
        <Form style={styles.accusearch_formsearch}>
           <Item regular>
            <Input placeholder='Search...'
              onChangeText={this._onChangeFilterSearch}
              value={this.state.filterSearch}/>
            <Icon active name='search' style={{color:'red'}}/>
          </Item>
        </Form>
        <Text style={{paddingBottom: 5, marginTop:35}}>Search by brand and type</Text>
        <Form style={styles.accusearch_formsearch}>
            <Picker
              mode="dropdown"
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.comboBoxBrand}
              onValueChange={this.onValueComboBoxBrand.bind(this)}
            >
              {
              this.renderBrand()

              }
            </Picker>
        </Form>
        <Form style={styles.accusearch_formsearch}>
            <Picker
              mode="dropdown"
              headerStyle={{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle={{ color: "#fff" }}
              enabled={this.state.statusCombo}
              headerTitleStyle={{ color: "#fff" }}
              selectedValue={this.state.comboBoxType}
              onValueChange={this.onValueComboBoxType.bind(this)}
            >
              {
              this.renderType()

              }
            </Picker>
        </Form>
      </Content>
      {/*
      <Footer>
          <FooterTab>
            <Button full danger>
              <Text style={{color: '#fff'}}>SHOW {this.state.totalSearch} PRODUCTS FOR {name.toUpperCase()}</Text>
            </Button>
          </FooterTab>
        </Footer>
      */}
    </Container>
    )
  }
}

export default AccuSearch;