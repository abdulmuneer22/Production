import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

class Button extends Component{

  render(){
    return(
      <View>
        <TouchableOpacity
        underlayColor={'black'}
        style={styles.Button}
        >
        <Text style={styles.ButtonText}>
        {this.props.text}
        </Text>
        </TouchableOpacity>
      </View>

    )
  }
}

export default Button

const styles = StyleSheet.create({
  Button:{
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.8,
  backgroundColor : 'rgb(  41, 39, 47)',
  height : 45,
  borderWidth : 0,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginTop : 15,
  borderRadius :7
},
ButtonText:{
    fontSize : 16,
    fontWeight : '300',
    color : 'white',
    textAlign : 'center'
}
})
