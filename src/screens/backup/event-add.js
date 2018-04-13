'use strict';

import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Item, Label, Input, Body, Left, Right, Icon, Form, Text} from "native-base";
import { TouchableOpacity, TouchableHighlight, View, Alert, ActivityIndicator } from "react-native";
import DateTimePicker from 'react-native-modal-datetime-picker';
import ValidationComponent from './validation/validationComponent';
import styles from "./styles";

class EventAdd extends ValidationComponent {

  constructor(props) {
  super(props);
  this.state = {
  name: '',
  desc: '',
  start: 'sssss',
  finish: 'ssssss',
  province: '',
  city: '',
  detail: '',
  ActivityIndicator_Loading: false
};
}

  state = {
    startDateTimePickerVisible: false,
    endDateTimePickerVisible: false,
  };


  showStartDateTimePicker = () => this.setState({ startDateTimePickerVisible: true });
  showEndDateTimePicker = () => this.setState({ endDateTimePickerVisible: true });
  hideStartDateTimePicker = () => this.setState({ startDateTimePickerVisible: false });
  hideEndDateTimePicker = () => this.setState({ endDateTimePickerVisible: false });

  handleStartDatePicked = (date) => {
    console.log('Start Datetime: ', date);
    this.showEndDateTimePicker;
  this.hideStartDateTimePicker();
  };

  handleEndDatePicked = (time) => {
    console.log('Finish Datetime: ', time);
  this.hideEndDateTimePicker();
  };


addEvent = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        { 
            fetch('http://192.168.1.11/db/api/index.php/feedAdd',
            {
                method: 'POST',
                headers: 
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  event_name : this.state.name,
                  event_desc : this.state.desc,
                  st_date : this.state.start,
                  fi_date: this.state.finish,
                  province_id: this.state.province,
                  city_id: this.state.city,
                  de_address: this.state.detail
                })
 
            }).then((response) => response.json()).then((responseJsonFromServer) =>
            {
                alert(responseJsonFromServer);
                this.setState({ ActivityIndicator_Loading : false });
            }).catch((error) =>
            {
                console.error(error);
                this.setState({ ActivityIndicator_Loading : false});
            });
        });
        this.props.navigation.goBack();
    }


 showEventList = () =>
  {
    this.props.navigation.navigate('EventPage');
    
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Add Event</Title>
          </Body>
          <Right />
        </Header>
        <Content>

          <Form>
            <Item stackedLabel>
                <Label>Name</Label>
                  <Input placeholder="Enter Event Name"
                ref="name" onChangeText={(name) => this.setState({name})} value={this.state.name} />
            </Item>

            <Item stackedLabel>
                <Label>Description</Label>
                  <Input placeholder="Enter Event Description"
                ref="desc" onChangeText={(desc) => this.setState({desc})} value={this.state.desc} />
            </Item>

            <Item>
              <TouchableHighlight onPress={this.showStartDateTimePicker}>
              <Text>Start Date</Text>
              </ TouchableHighlight>
            <DateTimePicker
              isVisible={this.state.startDateTimePickerVisible}
              onConfirm={this.handleStartDatePicked}
              onCancel={this.hideStartDateTimePicker}
            />
            </Item>
            <Item>
              <TouchableHighlight onPress={this.showEndDateTimePicker}>
              <Text>Finish Date</Text>
              </TouchableHighlight>
            <DateTimePicker
              isVisible={this.state.endDateTimePickerVisible}
              onConfirm={this.handleEndDatePicked}
              onCancel={this.hideEndDateTimePicker}
            />
            </Item>

            <Item stackedLabel>
                <Label>Province</Label>
                  <Input placeholder="Enter province name"
                ref="province" onChangeText={(province) => this.setState({province})} value={this.state.province} />
            </Item>
            
            <Item stackedLabel>
                <Label>City</Label>
                  <Input placeholder="Enter city name"
                ref="city" onChangeText={(city) => this.setState({city})} value={this.state.city} />
            </Item>
            
            <Item stackedLabel>
                <Label>Detail Address</Label>
                  <Input placeholder="Enter detail address"
                ref="detail" onChangeText={(detail) => this.setState({detail})} value={this.state.detail} />
            </Item>

          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }}  onPress={this.addEvent}>
            <Text>Add Event</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}

export default EventAdd;
