import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} from 'react-native';

import Card from '../Components/card'
import InputForm from '../Components/inputForm'
import ListViewComponent from '../Components/listView'
import ApplyLeave from './applyLeave'
import Login from './login'
import SplashScreen from './splashScreen'
import LandingPage from './landingPage'


import Icon from 'react-native-vector-icons/Ionicons';

const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
    switch(route.name){
      case 'login':
            return (
            <TouchableOpacity
            underlayColor="transparent"
            style={{marginTop : 15,marginLeft : 10}}
            onPress={() => { if (index > 0) { navigator.push({name:'landingPage'}) } }}
            >
            <Icon name='ios-close' size={28} color={'white'} style={{marginLeft : 20}} />
            </TouchableOpacity>)

      case 'splashScreen':
            return (null)

      case 'applyLeave':
            return (
              <TouchableOpacity
              underlayColor="transparent"
              style={{marginTop : 15,marginLeft : 10}}
              onPress={() => { if (index > 0) { navigator.pop()} }}
              >
              <Icon name='ios-arrow-back' size={28} color={'white'} />
              </TouchableOpacity>

            )

      case 'landingPage':
            return (
              <TouchableOpacity
              underlayColor="transparent"
              style={{marginTop : 15,marginLeft : 10}}
              onPress={() => { alert("Settings Modal") }}
              >
              <Icon name='ios-menu' size={28} color={'white'} />
              </TouchableOpacity>

            )

      default :
            return (
            <TouchableOpacity
            underlayColor="transparent"
            style={{marginTop : 15,marginLeft : 10}}
            onPress={() => { if (index > 0) { navigator.pop() } }}>
            <Icon name='ios-arrow-back' size={25} color={'white'} />

            </TouchableOpacity>)

    }

  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableOpacity>
      </TouchableOpacity>
    )
  },
  Title(route, navigator, index, navState) {


    switch(route.name){

      case 'login':
            return(
            <Text style={{
              marginTop : 15,
              color : 'white',
              fontSize: 18,
              fontWeight:'300',
              justifyContent : 'center',
              //borderColor:'black',
              //borderWidth: 1
            }}>
            Login
            </Text>);

      case 'splashScreen':
              return(<Text style={{
              marginTop : 15,
              color : 'white',
              fontSize: 18,
              fontWeight:'300',
              justifyContent : 'center',
            //borderColor:'black',
            //borderWidth: 1
              }}>
              Leave Buddy
            </Text>);

      case 'applyLeave':
              return(<Text style={{
              marginTop : 15,
              color : 'white',
              fontSize: 18,
              fontWeight:'300',
              justifyContent : 'center',
            //borderColor:'black',
            //borderWidth: 1
              }}>
              Select Date
            </Text>);

      default:
              return(<Text style={{
              marginTop : 15,
              color : 'white',
              fontSize: 18,
              fontWeight:'300',
              justifyContent : 'center',
            //borderColor:'black',
            //borderWidth: 1
              }}>
              Leave Buddy
            </Text>);



  }}
}






class Home extends Component{

  configureScene(route){
    switch(route.name){

    case 'splashScreen':
    return Navigator.SceneConfigs.FloatFromBottom

    default :
    return Navigator.SceneConfigs.FloatFromLeft
  }}

  renderScene(route,navigator){

    switch(route.name){

    case 'splashScreen':
    return <SplashScreen  navigator={navigator} />

    case 'login':
    return <Login  navigator={navigator} />

    case 'applyLeave':
    return <ApplyLeave  navigator={navigator} />

    case 'landingPage':
    return <LandingPage  navigator={navigator} />



  }
}



  render(){
    return(

      <Navigator
      style = {styles.mainscreen}
      initialRoute={{name: 'splashScreen'}}
      renderScene={this.renderScene.bind(this)}
      configureScene={this.configureScene.bind(this)}

      navigationBar={
      <Navigator.NavigationBar
      style={{backgroundColor : '#455A64'}}
      routeMapper={NavigationBarRouteMapper} />
      }
      />










    )
  }
}


const styles = StyleSheet.create({

  container : {
    //margin : 20,
    //borderWidth : 1,
    //borderColor : 'black',
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'

  },


  row : {

    margin : 5,
    flexDirection : 'row',

    width : 300,

  }

});

export default Home;
