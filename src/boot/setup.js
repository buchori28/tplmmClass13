import React, { Component } from "react";
import { StyleProvider } from "native-base";
//import firebase from 'react-native-firebase';

import App from "../App";
import getTheme from "../../native-base-theme/components";
import variables from "../../native-base-theme/variables/commonColor";

export default class Setup extends Component {
  /*
  componentDidMount() {
SplashScreen.hide();
    firebase.messaging().getToken()
    .then((token) => {
        console.log('Device FCM Token: ', token);
    });
    firebase.messaging().subscribeToTopic("PROMO");
  }
  */
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <App />
      </StyleProvider>
    );
  }
}
