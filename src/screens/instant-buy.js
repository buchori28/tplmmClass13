import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  fullName: t.String,
  phone: t.Number,
  email: t.maybe(t.String),
  vehicleType: t.String,
  batteryType: t.String,
  address: t.String,
  province: t.String
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

class InstantBuy extends Component {
  render() {  const {params} = this.props.navigation.state;
  var name = params.name;

    handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }
  
    return (
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
        <Content>
          <View style={styles.container}>
            <Form 
              ref={c => this._form = c}
              type={User} 
              options={options}
            />
            <Button
              title="Sign Up!"
              onPress={this.handleSubmit}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff'
  }
});


export default InstantBuy;