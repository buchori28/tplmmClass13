import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem } from "native-base";
import { ActivityIndicator, FlatList, View, TouchableNativeFeedback, RefreshControl } from 'react-native';
import styles from "./styles";

class Rank extends Component {
  constructor(props) {
    super(props);
    this.fetchMore = this._fetchMore.bind(this);
    this.fetchData = this._fetchData.bind(this);
    this.state = {
      dataSource: null,
      isLoading: true,
      isLoadingMore: false,
      _data: null,
      _dataAfter: ""
    };
  }
  
  _fetchData(callback) {
    const params = this.state._dataAfter !== ''
      ? '&after=${this.state._dataAfter}'
      : '';
    //for limit
    fetch('http://192.168.1.11/db/api/index.php/getEvent?limit=5${params}')
      .then(response => response.json())
      .then(callback)
      .catch(error => {
        console.error(error);
      });
  }
 
  _fetchMore() {
    this.fetchData(responseJson => {
      const data = this.state._data.concat(responseJson.results);
      this.setState({
        isLoadingMore: false,
        _data: data,
        _dataAfter: responseJson.after
      });
    });
  }
  
  componentDidMount() {
    this.fetchData(responseJson => {
      const data = responseJson.results;
      this.setState({
        isLoading: false,
        _data: data,
        _dataAfter: responseJson.after
      });
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
    } else {
      return (
      <Container style={styles.container} padder>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Approval List</Title>
          </Body>
          <Right />
        </Header>
      <Content>
        <FlatList
           data={this.state._data} 
           renderItem={({item: rowData}) => { 
            return (
          <ListItem    
            roundAvatar
              title={rowData.event_name}
              subtitle={rowData.event_desc}
              avatar={{ uri: 'data:image/png;base64,'+rowData.imageB64 }}
              />
            );
          }}
          onEndReached={() =>
            this.setState({ isLoadingMore: true }, () => this.fetchMore())}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => { 
            return (
              this.state.isLoadingMore &&
              <View style={{ flex: 1, padding: 10 }}>
                <ActivityIndicator size="small" />
              </View>
            );
          }}
        />
        </Content>
        </Container>
      );
    }
  }
}
export default Rank;