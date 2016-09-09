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
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};

import GiftedSpinner from 'react-native-gifted-spinner';

class SplashScreen extends Component {
  constructor(){
    super();
    this.state={spinnerVisible : true}
  }
  componentDidMount(){
    firebase.initializeApp(firebaseConfig)


    setTimeout(()=>
    {


        this.getUser()

    },
    1000

      );
  }


  async getUser(){
    let User =  await AsyncStorage.getItem('userEmail')
    if(!User){
      //alert("No User")
      this.props.navigator.push({name:'login'})
    }
    else {
      //alert(User)
      this.props.navigator.push({name:'myInventory'})



    }
  }




  render() {
    return (
        <View style={{marginTop : 100}}>
         {this.state.spinnerVisible?

         <View>
            <GiftedSpinner size={'large'} color={'#00bcd4'}/>
            <Text style={{justifyContent:'center',textAlign:'center',color : '#00bcd4',marginTop : 10}}></Text>
         </View>
         :null}
        </View>
    );

}}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d35400',
  },

  spinner: {
    marginBottom: 50
  },

  btn: {
    marginTop: 20
  },

  text: {
    color: "white"
  }
});

export default SplashScreen
