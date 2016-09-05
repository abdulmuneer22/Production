import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import InputForm from '../Components/inputForm'

class ApplyLeave extends Component{
// Passed the prop to inputForm Component
  render(){
    return(

      <View style={styles.container}>
      <InputForm formType="LeaveApplication" {...this.props}/>


      </View>


    )
  }
}


export default ApplyLeave

const styles = StyleSheet.create({

  container : {
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'

  },
});
