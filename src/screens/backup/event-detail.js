import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from "native-base";
import { AppRegistry, ActivityIndicator, ListView, View, Alert, TouchableNativeFeedback, RefreshControl, Image } from 'react-native';
import styles from "./styles";

class EventDetail extends Component {
constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}
GetItem(event_name, event_desc) {

  Alert.alert(event_name, event_desc);

}

componentDidMount() {
const {params} = this.props.navigation.state;
var id = params.event_id;
return fetch('http://192.168.1.11/db/api/index.php/eventDetail?id='+id, {
  method: 'POST',
  body: JSON.stringify({event_id: params.event_id})
}).then((response) => response.json()).then((responseJson) => {
  responseJson = responseJson['results'];
  Alert.alert(params.event_id);
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

ListViewItemSeparator = () => {
  return (<View
    style={{
    height: .5,
    width: "100%",
    backgroundColor: "#000"
  }}/>);
}

render() {
  if (this.state.isLoading) {
    return (
      <Container style={styles.container} padder>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Event Detail</Title>
          </Body>
          <Right />
        </Header>
      <View style={{
        flex: 1,
        paddingTop: 20
      }}>
        <ActivityIndicator/>
      </View>
      </Container>
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
            <Title>Event Detail</Title>
          </Body>
          <Right />
        </Header>
      <Content>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={rowData =>
         
        <ListItem avatar 
        button onPress={() => this.props.navigation.navigate("EventDetail")}>
        
        <Left><Thumbnail small source={{ uri: 'data:image/png;base64,'+rowData.imageB64 }} /></Left>
        <Body>
        <Text> {rowData.event_name} </Text>
        <Text numberOfLines={1} note> {rowData.event_desc} </Text>
        </Body>
        </ListItem>}
        />
        </Content>
      </Container>
    );
  }
}

export default EventDetail;



