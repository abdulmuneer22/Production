
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator,
  TouchableOpacity
} from 'react-native';

import SplashScreen from  './APP/Screens/SplashScreen'
import Register from './APP/Screens/register'
import LogIn from './APP/Screens/login'
import MainScreen from './APP/Screens/mainScreen'
import UpdateAddress from './APP/Screens/updateAddress'
import WaterCan from './APP/Screens/watercan'
import MyCart from './APP/Screens/myCart'

// Laundry imports
import LPrices from './APP/Screens/Laundry/LPrices'


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
            Login</Text>
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

class UrbanServices extends Component {
 


renderScene(route,navigator){

  if(route.name == 'mainScreen'){
      return <MainScreen  navigator={navigator} />
    }

  if(route.name == 'SplashScreen'){
      return <SplashScreen navigator={navigator} />
    }


  if(route.name == 'root'){
      return <Root  navigator={navigator}/>
    }

  if(route.name == 'home'){
      return <Landingpage  navigator={navigator}/>
    }


  if(route.name == 'register'){
      return <Register  navigator={navigator}/>
    }

  if(route.name == 'login'){
    return <LogIn  navigator={navigator}/>
  }

  if(route.name == 'myaccount'){
    return <MyAccount  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'categories'){
    return <Categories  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'watercan'){
    return <WaterCan  navigator={navigator} {...route.passProps} />
  }

if(route.name == 'navbar'){
    return <NavBar  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'myCart'){
    return <MyCart  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'updateAddress'){
    return <UpdateAddress  navigator={navigator} {...route.passProps} />
  }


if(route.name == 'testview'){
    return <TestView  navigator={navigator} {...route.passProps} />
  }

if(route.name == 'LPrices'){
    return <LPrices  navigator={navigator} {...route.passProps} />
  }


}

configureScene(route){

  let fromleft = Navigator.SceneConfigs.FloatFromLeft

  switch(route.name){
    case 'login':
      return Navigator.SceneConfigs.FloatFromBottom

    case 'myaccount':
      return Navigator.SceneConfigs.FloatFromLeft

    case 'register':
      return Navigator.SceneConfigs.VerticalDownSwipeJump

     case 'categories':
      return Navigator.SceneConfigs.HorizontalSwipeJump

      case 'watercan':
      return fromleft

      case 'mainScreen':
      return Navigator.SceneConfigs.FadeAndroid

       case 'myCart':
      return Navigator.SceneConfigs.FadeAndroid


       case 'updateAddress':
      return Navigator.SceneConfigs.FadeAndroid


       case 'LPrices':
      return Navigator.SceneConfigs.FadeAndroid



  }




}







  render() {
    return (
      <Navigator
      style = {styles.mainscreen}
      initialRoute={{name: 'SplashScreen'}}
      renderScene={this.renderScene.bind(this)}
      //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}
      configureScene={this.configureScene.bind(this)}

      navigationBar={
      <Navigator.NavigationBar
      style={{backgroundColor : "green"}}
      routeMapper={NavigationBarRouteMapper} />
      }


      />
    );
  }
}

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

AppRegistry.registerComponent('UrbanServices', () => UrbanServices);
