import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body, Card, CardItem } from "native-base";
import { AppRegistry, ActivityIndicator, Item, ListView, View, Alert, TouchableNativeFeedback, RefreshControl, Image } from 'react-native';
import styles from "./styles";

class EventPage extends Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

componentDidMount() {
  return fetch('http://erporate.com/bootcamp/jsonBootcamp.php').then((response) => response.json()).then((responseJson) => {
  responseJson = responseJson['data'];
  let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    
      //Alert.alert(responseJson);
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(responseJson)
    }, function () {
      // In this block you can do something with new state.
    });
  }).catch((error) => {
    console.error(error);
  });
}


render() {
  if (this.state.isLoading) {
    return (
      <View>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back"/>
            </Button>
          </Left>
          <Body>
            <Title>Approval List</Title>
          </Body>
          <Right/>
        </Header>
        < ActivityIndicator style={styles.indicatorLoading}/>
        <Text style={styles.textLoading}>Getting Data...</Text>
      </View>
    );
  }


return (
      <Container style={styles.container} padder>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pariwisata</Title>
          </Body>
          <Right />
        </Header>
      <Content>
      
      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData =>
          <Card>
          <CardItem>
              <Left>
                <Thumbnail source={{uri: rowData.gambar_pariwisata}} />
                <Body>
                  <Text>{rowData.nama_pariwisata}</Text>
                  <Text note>{rowData.alamat_pariwisata}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: rowData.gambar_pariwisata}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                  <Text>{rowData.detail_pariwisata}</Text>
              </Left>
            </CardItem>
            </Card>
          }
        />
        </Content>
      </Container>
    );
  }
}

export default EventPage;



