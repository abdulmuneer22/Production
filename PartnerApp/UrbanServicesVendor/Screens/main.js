
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
  TouchableOpacity
} from 'react-native';

import SplashScreen from  './SplashScreen'
import Register from './register'
import LogIn from './login'
import MainScreen from './mainScreen'
import UpdateAddress from './updateAddress'

import MyInventory from './myInventory'



import Icon from 'react-native-vector-icons/MaterialIcons';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};
const index =0
const _navBarColor = ''
const NavigationBarRouteMapper = {


    LeftButton(route, navigator, index, navState) {


    switch(route.name){
      case 'login':
            return (
            <TouchableHighlight
            underlayColor="transparent"
            style={{marginTop : 15,marginLeft : 10}}
            >
            <Icon name='account-circle' size={28} color={'white'} />
            </TouchableHighlight>)
      case 'mainScreen':
            return (
              <TouchableHighlight
              underlayColor="transparent"
              style={{padding :5}}
              //onPress={this.handleClick.bind(this)}
              >
              <Icon name='account-circle' size={32} color={'white'} />
              </TouchableHighlight>

            )
      case 'SplashScreen':
            return null
      default :
            return (
            <TouchableHighlight
            underlayColor="transparent"
            style={{marginTop : 15,marginLeft : 10}}
            onPress={() => { if (index > 0) { navigator.pop() } }}>
            <Icon name='arrow-back' size={25} color={'white'} />

            </TouchableHighlight>)

    }

  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight>

       </TouchableHighlight>)
  },
  Title(route, navigator, index, navState) {


    switch(route.name){

      case 'login':
            return <Text
            style={{marginTop : 15,color : 'white',fontSize: 19,fontWeight:'bold',justifyContent : 'center'}}>
            Vendor Login</Text>
      case 'SplashScreen':
            return <Text
            style={{marginTop : 15,color : 'white',fontSize: 19,fontWeight:'bold',justifyContent : 'center'}}>
            Loading</Text>
      case 'mainScreen':
            return <Text
            style={{marginTop : 15,marginLeft : 0,color : 'white',fontSize: 19,fontWeight:'bold'}}>
            Urban Services</Text>
      case 'watercan':
            return <Text
            style={{marginTop : 15,marginLeft : 0,color : 'white',fontSize: 19,fontWeight:'bold'}}>
            Water Cans</Text>
      case 'myCart':
            return <Text
            style={{marginTop : 15,marginLeft : 0,color : 'white',fontSize: 19,fontWeight:'bold'}}>
            Your Cart</Text>
      case 'LPrices':
            return <Text
            style={{marginTop : 15,marginLeft : 0,color : 'white',fontSize: 19,fontWeight:'bold'}}>
            Laundry Prices</Text>

    }

    return <Text
            style={{marginTop : 15,marginLeft : 0,color : 'white',fontSize: 16,fontWeight:'bold'}}>
            Urban Services</Text>


  }
}

class Main extends Component {
  constructor(){
  super();

  this.state = {
    _initialRoute : 'SplashScreen',
    R : '',
    G : '',
    B : '',
    Color : "rgb(23, 129, 217)"
  }


}


renderScene(route,navigator){

  switch (route.name) {
case 'mainScreen':
  return <MainScreen  navigator={navigator} />
  break;

case 'SplashScreen':
  return <SplashScreen  navigator={navigator} />
  break;


case 'home':
  return <Landingpage  navigator={navigator} />
  break;

case 'register':
  return <Register  navigator={navigator} />
  break;


case 'login':
  return <LogIn  navigator={navigator} />
  break;


case 'myInventory':
  return <MyInventory  navigator={navigator} />
  break;

  default:
  return <LogIn  navigator={navigator} />

  }

}




configureScene(route){

  let fromleft = Navigator.SceneConfigs.FloatFromLeft

  switch(route.name){
    case 'login':
      return Navigator.SceneConfigs.FloatFromBottom
      break;

    default :
      return Navigator.SceneConfigs.FloatFromBottom




  }




}





  render() {
    return (
      <Navigator
      style = {styles.mainscreen}
      initialRoute={{name: this.state._initialRoute}}
      renderScene={this.renderScene.bind(this)}
      //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
      configureScene={this.configureScene.bind(this)}

      navigationBar={
      <Navigator.NavigationBar
      style={{backgroundColor : 'grey'}}
      routeMapper={NavigationBarRouteMapper} />
      }


      />
    );
  }
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:10
  },
  navBar: {
        //backgroundColor: this.getNavBarColor(),
        alignItems : 'center',
        justifyContent : 'center'
    },
});
