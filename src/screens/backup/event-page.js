import React, { Component } from "react";
import { View, Text, SwipeableFlatList, ActivityIndicator, TouchableHighlight, Alert } from "react-native";
import { Container, Item, Input, Header, Left, Button, Body, Icon, Title, Right, ListItem, List, Thumbnail } from 'native-base';
import styles from './styles';

class EventPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      totalItem: 0,
      filterText: '',
      onEndReachedCalledDuringMomentum: true,
      flag: false
    };
  }
 
  _onChangeFilterText = (filterText) => {
    this.setState(() => ({filterText}));
  };

componentDidMount() {
    this.setState({flag:true});
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = 'http://192.168.1.11/db/api/index.php/getEvent?seed='+seed+'&page='+page;
    this.setState({ loading: true });
    
    setTimeout(() => {
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false,
          totalItem : res.total_item
        });
        
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
    },1500);
  };

    handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

handleLoadMore = ({distanceFromEnd}) => {
console.log(this.state.data.length, this.state.totalItem);
console.log("momentum: " + this.state.onEndReachedCalledDuringMomentum);
console.log("dis: "+distanceFromEnd);

      //if (!this.state.onEndReachedCalledDuringMomentum)
      //if (!this.state.flag)
      {

        if (this.state.data.length>=this.state.totalItem){
           return;
        }
        console.log("CHECK 1");
          this.setState(
            {
              page: this.state.page + 1
            },
            () => {
              this.makeRemoteRequest();
            }
          );
        this.state.onEndReachedCalledDuringMomentum = true;
        //this.setState({flag: false});
      }
      //else 
      {
this.setState({flag: false});
      }
  };

    renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "20%"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <Header searchBar rounded noscroll={true}>
          <Item>
            <Icon name="ios-search" />
            <Input onChangeText={this._onChangeFilterText}
            placeholder="Search"
            value={this.state.filterText} />
            <Icon name="ios-bookmarks" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      );
    };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _renderQuickActions= function({item}: Object): ?React.Element<any> {
    return (
      <View style={styles.eventlist_actionContainer}>
        <TouchableHighlight
          style={styles.eventlist_actionButton}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this edit action!',
            );
          }}>
          <Text style={styles.eventlist_actionButtonText}>
          <Icon name="ios-refresh" style={{ color : '#fff'}} /> UPDATE
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.actionButton, styles.eventlist_actionButtonDestructive]}
          onPress={() => {
            Alert.alert(
              'Tips',
              'You could do something with this remove action!',
            );
          }}>
          <Text style={styles.eventlist_actionButtonText}>
          <Icon name="ios-trash" style={{ color : '#fff'}} /> DELETE
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

    _renderItem = function({item}): ?React.Element<any> {
    const { navigate } = this.props.navigation;
    return (
          <ListItem avatar onPress={() => navigate('EventDetail', '${item.event_id}')} 
          style={styles.eventlist_row} >
              <Left>
                <Thumbnail source={{ uri: 'data:image/png;base64,'+item.imageB64 }} />
              </Left>
              <Body style={styles.eventlist_rowData}>
                <Text>{item.event_name}</Text>
                <Text numberOfLines={1} note>{item.event_desc}</Text>
              </Body>
          </ListItem>
    )
  };

  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = (item) => (filterRegex.test(item.event_name) || filterRegex.test(item.event_desc));
    const filteredData = this.state.data.filter(filter);
    return (
      <Container>
          <Header >
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
              <Title>Event</Title>
            </Body>
            <Right />
            <Button transparent onPress={() => this.props.navigation.navigate("EventAdd")}>
              <Icon name="ios-add-circle" />
            </Button>
        </Header>
      {/* <List
      containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0, backgroundColor: '#fff' }} > */}
      <SwipeableFlatList
        data={this.state.data}
        bounceFirstRowOnMount={true}
        maxSwipeDistance={160}
        renderItem={this._renderItem.bind(this)}
        renderQuickActions={this._renderQuickActions.bind(this)}
        keyExtractor={item => item.event_id}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
        onEndReached = {this.handleLoadMore.bind(this)}
        //disableVirtualization={false}
        onEndReachedTreshold={1}
        //onEndTreshold={this.state.totalItem}
        onMomentumScrollBegin = {() => {console.log("onMomentumScrollBegin: triger");  this.state.onEndReachedCalledDuringMomentum = false;}}
      />
      {/* </List> */}
    </Container>
    );
  }
}

export default EventPage;