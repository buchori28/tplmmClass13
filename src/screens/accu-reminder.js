import React, { Component } from "react";
import { View, Text, Modal, SwipeableFlatList, TouchableOpacity} from "react-native";
import { Container, Content, Fab, Item, Input, Header, Left, Button, Body, Icon, Title, Right, Footer, FooterTab, ListItem, List } from 'native-base';
import styles from './styles';

import { SERVER_KEY, CLIENT_KEY, URL_T_VEHICLE } from '../api/url';

class AccuReminder extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        ModalVisibleStatus: false 
    };
  }
 
  ShowModalFunction(visible) {
    this.setState({ModalVisibleStatus: visible});
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
          <Title style={styles.header_title}>Battery Reminder</Title>
        </Body>
        <Right />
          <Button transparent onPress={() => { this.ShowModalFunction(true) }}>
            <Icon name="md-more"/>
          </Button>
      </Header>
      <Content>
        <View>
          <Modal
            transparent={true}
            animationType={"fade"}
            visible={this.state.ModalVisibleStatus}  
            onRequestClose={ () => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} } >    
              <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>    
                  <View style={styles.ModalInsideView}> 
                  <Header>
                    <Left>
                      <Text style={{color: '#fff'}}>V.2.0.0</Text>
                    </Left>
                    <Right>
                      <Button transparent onPress={() => { this.ShowModalFunction(!this.state.ModalVisibleStatus)} }>
                        <Text style={{color: '#fff'}}>CLOSE</Text>
                      </Button>
                    </Right>
                  </Header>
                  <Content>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('Home')} >
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>BACK TO HOME</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('Help')}>
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>HELP</Text>
                          </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => this.props.navigation.navigate('About')}>
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>ABOUT YUASA</Text>
                          </View>
                        </TouchableOpacity>
                  </Content>
                  </View>
              </View>  
          </Modal>  
        </View>
      </Content>
        <Footer style={{height: 25}}>
          <FooterTab>
            <Button active full danger>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    )
  }
}

export default AccuReminder;