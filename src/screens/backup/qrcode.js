import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, Button, StyleSheet, Text, TextInput, View } from 'react-native';

class Qrcode extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            desc: '',
            inputTitle: '',
            inputDesc: ''
        };

        AsyncStorage.getItem('user', (error, result) => {
            if (result) {
                let resultParsed = JSON.parse(result)
                this.setState({
                    title: resultParsed.title,
                    desc: resultParsed.desc
                });
            }
        });
    }

    saveData() {
        let title = this.state.inputTitle;
        let desc = this.state.inputDesc;
        let data = {
            title: title,
            desc: desc
        }

        AsyncStorage.setItem('user', JSON.stringify(data));

        this.setState({
            title: title,
            desc: desc
        });

        alert('Data saved to local storage!!!!');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Local Storage Testing
                </Text>
                <Text style={styles.instructions}>
                    {this.state.title}{'\n'}
                    {this.state.desc}
                </Text>
                <TextInput style={styles.textInput}
                    onChangeText={(inputTitle) => this.setState({inputTitle})}
                    placeholder='Event'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(inputDesc) => this.setState({inputDesc})}
                    placeholder='Desc'
                />
                <Button
                    title='Save!'
                    onPress={this.saveData.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 32
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    height: 35,
    backgroundColor: 'white',
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8
  }
});

export default Qrcode;
