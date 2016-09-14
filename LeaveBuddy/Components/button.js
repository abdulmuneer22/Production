import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from 'react-native';

const window = Dimensions.get('window');

import firebase from 'firebase';

import moment from 'moment';

class Button extends Component{

  handleButtonClick(action){
    // prop is passed by Component using Button
    switch(action){
      case 'Apply':
        //tesing moment js 
       
       
        var start = moment(this.props.startDate, "DD-MM-YYYY");
        var end   = moment(this.props.endDate, "DD-MM-YYYY");

        var numberOfDays = start.diff(end,'days') * -1
        
        if(!this.props.startDate | !this.props.endDate | numberOfDays < 1){
          alert("Please Check The Dates You Selected")
        }else{
        //alert(numberOfDays)
        // Generate LeaveID - empID+startDate+endDate
          var leaveType = "Annual Leave"
          var empID = "ppmuneer"
          var leaveID = {
            empID : "ppmuneer",
            startDate : this.props.startDate,
            endDate : this.props.endDate,
            leaveType : "Annual",
            approved : false
          }
          //var leaveID = empID+this.props.startDate +" to "+this.props.endDate + leaveType
          //alert(leaveID)

          firebase.database().ref('LeaveBuddy/users/'+empID+'/LeaveApplications').update({
          application : leaveID

          });
        }
        
        
        
        



        var _StartDate = new Date(this.props.startDate)
        var _endDate = new Date(this.props.endDate)
        
        //alert("Start Date is " + _StartDate + _endDate)
        // Manage Leave Application Request !!
        break;



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
          //console.log('Logged In')
          this.props.navigator.push({
            name:'landingPage'
          })

          var user = firebase.auth().currentUser
          AsyncStorage.setItem("userEmail",user.email)



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
        onPress={this.handleButtonClick.bind(this,this.props.text)}
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
},
ButtonText:{
    fontSize : 16,
    fontWeight : '300',
    color : 'white',
    textAlign : 'center'
}
})
