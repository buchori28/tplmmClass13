import React, { Component } from "react";
import {Container, Content, Header, Title, Text, Button, Icon, Tabs, Tab, Right, Left, Body, TabHeading, Card, CardItem, } from "native-base";
import {StyleSheet, View, Image, TouchableOpacity, ListView} from 'react-native';
import GridView from 'react-native-super-grid';
import styles from './styles';
import Swiper from 'react-native-swiper';

class Maps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  };

componentDidMount() {
    this.getSlides();
  }

  getSlides = () => {
    const url = 'http://192.168.1.11/db/api/index.php/getSlides';
      fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: [...this.state.data, ...res.results],
          error: res.error || null,
        });
      //console.log(this.state.data);
      })
      .catch(error => {
      });
  };


  render() {
    const { navigate } = this.props.navigation;
    const items = [
      { name: 'EVENT', desc:'manage your event', code: '#1abc9c', icon: 'ios-bookmarks', screen: 'EventPage' }, 
      { name: 'APPROVAL LIST', desc:'approve event', code: '#2ecc71', icon: 'ios-checkmark-circle', screen: 'ApprovalList' },
      { name: 'RANK', desc:'check your rank', code: '#3498db', icon: 'ios-ribbon', screen: 'Rank' }, 
      { name: 'MAPS', desc:'share location and get nearby', code: '#9b59b6', icon: 'ios-map', screen: 'Maps' },
      { name: 'QRCODE', desc:'scan qrcode', code: '#e67e22', icon: 'ios-barcode', screen: 'Qrcode' }, 
      { name: 'JAVASCRIPT', desc:'RN based on JS language', code: '#f1c40f', icon: 'logo-javascript', screen: 'JavaScript' }, 
      { name: 'GITHUB', desc:'share your source code project', code: '#2c3e50', icon: 'logo-github', screen: 'Github' }, 
      { name: 'LOGOUT', desc:'logout from main app', code: '#e74c3c', icon: 'ios-undo', screen: 'Logout' },
    ];

    return (
    <Container>
        <Header hasTabs>
          <Body style={{ flex: 3 }}>
            <Title style={{ alignSelf: "center" }}>Smart Academy RN</Title>
          </Body>
        </Header>
        <Tabs style={{ elevation: 3 }} locked={true}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="home" />
                <Text>Home</Text>
              </TabHeading>
            }
          >
          
        <Content>     
         
      <View>
        <Swiper height={140} 
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          paginationStyle={{
            bottom: 10,
          }} loop>
          <View style={styles.home_slide}
          data={this.state.data}
          renderItem={({ item }) => (
          <View>
            <Image style={styles.home_slideImage} source={{ uri: 'data:image/png;base64,'+item.img }} />
          </View>
          )}
          />
        </Swiper>
      </View>

          <GridView
              itemDimension={130}
              items={items}
              style={styles.home_gridView}
              renderItem={gridItem => (
                <TouchableOpacity style={[styles.home_itemContainer, { backgroundColor: gridItem.code }]}
                  onPress={() => navigate(gridItem.screen)} >
                  <Icon style={styles.home_itemIcon} name={gridItem.icon} />
                  <Text style={styles.home_itemName}>{gridItem.name}</Text>
                  <Text style={styles.home_itemDesc}>{gridItem.desc}</Text>
                </TouchableOpacity>
              )}
            />
          </Content>

          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="md-help-circle" />
                <Text>Information</Text>
              </TabHeading>
            }
          >

          <Content padder style={{ marginTop: 0 }}>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Body>
                  <Text>Need information? We will give you all information.</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="md-person" />
                <Text>Account</Text>
              </TabHeading>
            }
          >
          <Content padder style={{ marginTop: 0 }}>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Body>
                  <Text>Detail account from Google+ or Facebook will be show here</Text>
                </Body>
              </CardItem>
            </Card>
            <Card style={{ flex: 0 }}>
              <CardItem>
                <Body>
                  <Text>Dreite Team</Text>
                </Body>
              </CardItem>
            </Card>
          </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default Maps;