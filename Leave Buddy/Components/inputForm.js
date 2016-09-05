import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)

import Button from '../Components/button'

class InputForm extends Component{
  render(){
    return(
      <View>

      <View style={styles.row}>
      <Text style={{marginTop : 5,marginRight : 0}}>
      <Icon name="ios-contact-outline" size={30} color="rgb(75, 73, 73)" />
      </Text>
      <TextInput style={styles.inputBox}
      placeholder="User Name or Email Address"
      />

      </View>

      <View style={styles.seperator}>
      </View>

      <View style={styles.row}>
      <Text style={{marginTop : 5,marginRight : 0}}>
      <Icon name="ios-key-outline" size={30} color="rgb(75, 73, 73)" />
      </Text>
      <TextInput style={styles.inputBox}
      placeholder="Password"
      />

      </View>

      <View style={styles.seperator}>
      </View>


      <View style={styles.row}>

      <Button text="Login" {...this.props}/>


      </View>

      </View>


    )
  }

}

export default InputForm;

const styles = StyleSheet.create({

  row : {


    flexDirection : 'row',
    width : 300,
    //borderWidth :1,
    //borderBottomColor : 'white',
    //borderBottomColor : 'white',
    borderRadius : 5,
    marginLeft : 10


  },
  inputBox : {
    width : 300,
    height : 40,
    borderWidth : 0,
    marginLeft : 20,
    borderWidth :0,


    //borderRadius : 8

  },
  seperator:{
    borderBottomColor : 'rgb(  237, 235, 243)',
    borderBottomWidth : 1,
    width : 260,
    alignSelf :'flex-end',
    marginTop : 2
  }

})
