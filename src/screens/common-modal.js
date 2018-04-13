import React, { Component } from "react";
import { View, Text, Modal, TouchableNativeFeedback } from "react-native";
import {  Content, Header, Left, Button, Right} from 'native-base';
import styles from './styles';

class CommonModal extends Component {
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
    const { navigate } = this.props.navigation;
    return(
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
                        <TouchableNativeFeedback
                          onPress={this._onPressButton}
                          background={TouchableNativeFeedback.SelectableBackground()}>
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>BACK TO HOME</Text>
                          </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                          onPress={this._onPressButton}
                          background={TouchableNativeFeedback.SelectableBackground()}>
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>HELP</Text>
                          </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                          onPress={this._onPressButton}
                          background={TouchableNativeFeedback.SelectableBackground()}>
                          <View style={{width: '100%', padding: 2, backgroundColor: '#eb2024'}}>
                            <Text style={styles.TextStyle}>ABOUT YUASA</Text>
                          </View>
                        </TouchableNativeFeedback>
                  </Content>
                  </View>
              </View>  
          </Modal>  
        </View>
      </Content>
    )
  }
}

export default CommonModal;