import React, {Component} from 'react';
import { SERVER_KEY, CLIENT_KEY, API_URL_BANNER } from './url';
import { ListView } from 'react-native';

class FunctionApi extends Component {
    constructor() {
        super();
    }

    static banner = () => {
        console.log("start function");
        var sendData = {
            server_key : SERVER_KEY,
            client_key : CLIENT_KEY
        };
        console.log(sendData);
        var headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
        console.log(headers);
        console.log("URL : "+API_URL_BANNER);
        fetch(API_URL_BANNER, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(sendData)
        })
      .then(res => res.json())
      .then(res => {
        res = res['data'];
        console.log(res);
        this.setState({
          dataBanner: [...this.state.dataBanner, ...res.data],
          error: res.error || null,
        });
      })
      .catch(error => {
      });
    };

}

export default FunctionApi;
