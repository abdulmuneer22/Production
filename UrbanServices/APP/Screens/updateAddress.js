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



import Firebase from 'firebase';

const window = Dimensions.get('window');
const USERID = ""
const UserName = ""
const AddressUpdated = "false"
class UpdateAddress extends Component {

// Constructor
constructor(){
super()
//this.checkIfAddressUpdated()
this.state = {
  name : "",
  email : "",
  houseNumber : '',
  streetName : '',
  locality : '',
  pinCode : '',
  mobileNumber : ''

}

}



redirect(routeName){

  this.props.navigator.push(
    {
      name:routeName

    }
    )


}


async getToken(){

  let username =  await AsyncStorage.getItem(USERID)
  UserName = username
  //alert(username)

}


 onUpdateAddress(){
  let uid = firebase.auth().currentUser.uid

  var _address = {
    name : this.state.name,
    houseNumber : this.state.houseNumber,
    streetName : this.state.streetName,
    locality : this.state.locality,
    pinCode : this.state.pinCode,
    mobileNumber : this.state.mobileNumber
  }

  firebase.database().ref('urbanservices/users/'+uid).update({
  name: this.state.name,
  pincode : this.state.pinCode,
  addressUpdated : "true",
  emailID : firebase.auth().currentUser.email,
  address : _address

  });

  this.redirect('mainScreen')


}



  render() {
    return (
      <View style={styles.container}>


      <TextInput
      style={styles.input}
      placeholder="Name :"
      onChangeText = {(text) => this.setState({name:text})}
      value={this.state.name}
      />


      <TextInput
      style={styles.input}
      placeholder="house Number:"
      onChangeText = {(text) => this.setState({houseNumber:text})}
      value={this.state.houseNumber}
      />

      <TextInput
      style={styles.input}
      placeholder="Street Name"
      onChangeText = {(text) => this.setState({streetName:text})}
      value={this.state.streetName}
      />

      <TextInput
      style={styles.input}
      placeholder="Locality"
      onChangeText = {(text) => this.setState({locality:text})}
      value={this.state.locality}
      />

      <TextInput
      style={styles.input}
      placeholder="Pin Code:"
      onChangeText = {(text) => this.setState({pincode:text})}
      value={this.state.pincode}
      />

      <TextInput
      style={styles.input}
      placeholder="Mobile"
      onChangeText = {(text) => this.setState({mobileNumber:text})}
      value={this.state.mobileNumber}
      />



      <TouchableHighlight
      style={styles.Button}
      onPress = {this.onUpdateAddress.bind(this)}

      >
      <Text style={styles.ButtonText}>Continue</Text>
      </TouchableHighlight>







      </View>






    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input :{
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red',
      height : 40
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
  marginBottom :10

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

export default UpdateAddress
