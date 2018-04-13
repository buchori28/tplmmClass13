import React, { Component } from "react";
import { View, Text, SwipeableFlatList, ActivityIndicator, TouchableHighlight, Alert } from "react-native";
import { Container, Image,Item, Input, Header, Left, Button, Body, Icon, Title, Right, ListItem, List, Thumbnail } from 'native-base';
import styles from './styles';

class Github extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      datajson: [],
      error: null,
      refreshing: false,
    };
  }

componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const url = 'http://erporate.com/bootcamp/jsonBootcamp.php';
    this.setState({ loading: true });
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          datajson:  [...this.state.datajson, ...res.data],
          error: res.error || null,
          loading: false,
          refreshing: false,
        });
        
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

    handleRefresh = () => {
    this.setState(
      {
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
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
          <ListItem avatar onPress={() => navigate('EventDetail', '${item.nama_pariwisata}')} 
          style={styles.eventlist_row} >
              <Left>
                <Thumbnail source={{ uri: item.gambar_pariwisata }} />
              </Left>
              <Body style={styles.eventlist_rowData}>
                <Text>{item.nama_pariwisata}</Text>
                <Text numberOfLines={1} note>{item.alamat_pariwisata}</Text>
              </Body>
          </ListItem>
    )
  };

  render() {
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
      <SwipeableFlatList
        datajson={this.state.datajson}
        bounceFirstRowOnMount={true}
        maxSwipeDistance={160}
        renderItem={this._renderItem.bind(this)}
        renderQuickActions={this._renderQuickActions.bind(this)}
        keyExtractor={item => item.nama_pariwisata}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh}
      />
    </Container>
    );
  }
}

export default Github;