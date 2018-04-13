import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View,TouchableOpacity, Keyboard, Image } from 'react-native';
import { Text, Input, Form, Item, Label, Button, Container, Icon, Content } from "native-base";
import styles from "./styles";

const logo = require("../../assets/logo.png");

class Login extends Component {
	constructor(props){
		super(props)
		this.state={
			userEmail:'',
			userPassword:''
		}
	}
	
	login = () =>{
		const {userEmail,userPassword} = this.state;
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(userEmail==""){
			//alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})
			
		}
		
		else if(reg.test(userEmail) === false)
		{
		//alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(userPassword==""){
		this.setState({email:'Please enter password'})
		}
		else{
		
		fetch('http://192.168.1.11/db/api/index.php/login',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: userEmail,
				password: userPassword
			})
			
		})
		.then((response) => response.json())
		 .then((responseJson)=>{
             if(responseJson == "userData") {
				 // redirect to profile page
                 alert("Successfully Login");
                 console.log(responseJson)
				 this.props.navigation.navigate("Home");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
		}
		Keyboard.dismiss();
	}
	
  render() {
      const { navigate } = this.props.navigation;
    return (
	<Container style={styles.login_container}>    
		<Content>
			<Item style={styles.login_contentImage} >
				<Image source={logo} />
			</Item>
		</Content>

		<Content>
				<Item>
					<Input placeholder="email" style={styles.login_input}
					ref="userEmail" onChangeText={(userEmail) => this.setState({userEmail})} value={this.state.userEmail} />
				</Item>
				{/*
				<View>
					<Text style={{padding:10,margin:10,color:'red'}}>{this.state.email}</Text>
				</View>
				*/}
				<Item style={{ marginTop: 10 }}>
					<Input placeholder="password" secureTextEntry={true} style={styles.login_input}
					ref="userPassword" onChangeText={(userPassword) => this.setState({userPassword})} value={this.state.userPassword} />
				</Item>
		
			<Button full danger style={{ marginTop: 20 }}  onPress={this.googleLogin}>
				<Icon name='logo-googleplus' />
				<Text>LOGIN WITH GOOGLE</Text>
			</Button>

			<Button full primary style={{ marginTop: 5 }}  onPress={this.login}>
			<Icon name='ios-send' />
				<Text>LOGIN</Text>
			</Button>

			{/*<View>
				<Text>Dont have an account?</Text>
				<Text style={{color: 'red'}} onPress={() => navigate("Register")}> Register here</Text>
			</View>*/}
		</Content>

     </Container>
  
   );
  }
}

export default Login;