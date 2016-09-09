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

  constructor(){
    super()
    this.state={
      startDate : '',
      endDate : '',
      userName : '',
      passWord : ''
    }
  }

  handleClick(){
    alert("You Wish to submit")
  }

  setFormType(){

    const formType = this.props.formType

    switch (formType) {
      case 'LeaveApplication':
        return(
          <View>
          <View>

          <View style={styles.row}>
          <Text style={{marginTop : 5,marginRight : 0}}>

          <Icon name="ios-calendar-outline" size={30} color="rgb(75, 73, 73)" />
          </Text>

          <TextInput
          style={styles.inputBox}
          placeholder="Start Date - DD-MM-YYYY"
          onChangeText = {(Date) => this.setState({startDate:Date})}
          value={this.state.startDate}
          />

          </View>

          <View style={styles.seperator}>
          </View>

          <View style={styles.row}>
          <Text style={{marginTop : 5,marginRight : 0}}>
          <Icon name="ios-calendar-outline" size={30} color="rgb(75, 73, 73)" />
          </Text>
          <TextInput
          style={styles.inputBox}
          placeholder="End Date - DD-MM-YYYY"
          onChangeText = {(Date) => this.setState({endDate:Date})}
          value={this.state.endDate}
          />

          </View>

          <View style={styles.seperator}>
          </View>


          <View style={styles.row}>

          <Button text="Apply" {...this.props}/>


          </View>

          <View>

          </View>

          </View>
          </View>
        )

      case 'LoginForm':
      return(

        <View>
        <View>

        <View style={styles.row}>
        <Text style={{marginTop : 5,marginRight : 0}}>

        <Icon name="ios-contact-outline" size={30} color="rgb(75, 73, 73)" />
        </Text>
        <TextInput style={styles.inputBox}
        placeholder="Enter User Name or Email"
        onChangeText = {(UserName) => this.setState({userName:UserName})}
        value={this.state.userName}
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
        onChangeText = {(Password) => this.setState({passWord:Password})}
        value={this.state.passWord}
        />

        </View>

        <View style={styles.seperator}>
        </View>


        <View style={styles.row}>

        <Button text="Login" userName = {this.state.userName} passWord = {this.state.passWord} navigator={navigator} {...this.props}/>

        </View>

        <View>

        </View>

        </View>
        </View>

      )


      default:
        return(
          <View>
          <Text>
          No Form Defined
          </Text>
          </View>
        )

    }

  }


  render(){
    return(
      <View>
      {this.setFormType()}
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
