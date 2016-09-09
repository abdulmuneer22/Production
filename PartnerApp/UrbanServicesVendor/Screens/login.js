'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage,
  Dimensions
} from 'react-native';

import firebase from 'firebase';
const window = Dimensions.get('window');
const ACCESS_TOKEN = 'access_token'
const AddressUpdated = ""

class LogIn extends Component {

// Constructor
constructor(){
super();

this.state = {
  accessToken : "",
  email : "",
  password : "",
  password_confirmation : "",
  errors:[],
  isLoggedIn : "",
  token : "",
  emptyPassWordEmailError : ""


}

}


redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName,
      title : 'Login'

    }
    )


}


onSignInPress(){

  let email = this.state.email
  let password = this.state.password

  // Sing In User With Firebase 3.1

  firebase.auth().signInWithEmailAndPassword(email,password)
  .then((result)=>
  {

    var user = firebase.auth().currentUser
    AsyncStorage.setItem("userEmail",user.email)
    this.props.navigator.push({name:'myInventory'})

  },
  (error)=>
  {
  // Write Better exception handling
  alert(error)
  }
  );




}








  render() {
    return (
     <View>
      <View style={styles.container}>
      <View style={styles.formWrapper}>
      <TextInput
      style={styles.input}
      placeholder="Email"
      onChangeText = {(text) => this.setState({email:text})}
      value={this.state.email}
      />


      <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry = {true}
      onChangeText = {(text) => this.setState({password:text})}
      value={this.state.password}
      />

      <TouchableHighlight
      style={styles.Button}
      onPress =
      {this.onSignInPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Login</Text>
      </TouchableHighlight>




      </View>
      </View>


</View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //height:window.height-100
  },
  formWrapper:

  {
    justifyContent:'center',
    marginTop : window.height*0.2

  },

  input :{

      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      height : 40,
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.7,
  backgroundColor : '#039BE5',
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10

  },
  SkipButton:{
    backgroundColor : '#37474F',
    borderColor : '#37474F'
  },

  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }

});

export default LogIn
