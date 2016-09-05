import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import InputForm from '../Components/inputForm'

class Login extends Component{
// Passed the prop to inputForm Component , inputForm will handle this form
  render(){
    return(

      <View style={styles.container}>
      <InputForm formType="LoginForm" {...this.props}/>


      </View>


    )
  }
}


export default Login

const styles = StyleSheet.create({

  container : {
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'

  },


});
