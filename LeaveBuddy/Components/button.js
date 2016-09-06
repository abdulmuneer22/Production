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

import firebase from 'firebase';

class Button extends Component{

  handleButtonClick(){
    // prop is passed by Component using Button
    switch(this.props.text){
      case 'Apply':
        alert("Apply")
        // Manage Leave Application Request !!



      case 'Login':
        //alert("Login")
        // Manage Login Request !!
        var userName = this.props.userName
        var passWord = this.props.passWord

        //userName and passWord are passed through Button Props in InputForm
        //alert(userName + " " + passWord)

        firebase.auth().signInWithEmailAndPassword(userName,passWord)
        .then((result) =>
        {
          console.log('Logged In')
          this.props.navigator.push({name:'landingPage'})
        },
        (error)=>{
          alert(error)
        });




    }

    }



  render(){
    return(
      <View>
        <TouchableOpacity
        underlayColor={'black'}
        style={styles.Button}
        onPress={this.handleButtonClick.bind(this)}
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
