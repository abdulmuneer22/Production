import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};

class SplashScreen extends Component {

  componentDidMount(){

    firebase.initializeApp(firebaseConfig)
    
    setTimeout(()=>
    {
        this.props.navigator.push({name:'login'})
    },
    3500

      );
    }


  render(){
    return(
      <View style={{backgroundColor : '#FF7E00'}}>

      <Image style = {{flex : 1,width : window.width , height : window.height}}
      resizeMode='cover'
      source={require('../Res/splashscreen.png')}/>


      </View>
    )
  }
}

export default SplashScreen

const styles = StyleSheet.create({

  container : {
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'
},
homeBgImage : {
    flex : 1

},
});
