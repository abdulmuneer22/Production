import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Card from '../Components/card'
import InputForm from '../Components/inputForm'
import TabView from '../Components/tabView'
import ListViewComponent from '../Components/listView'




class Home extends Component{

  render(){
    return(


      <View style={styles.container}>
      <ListViewComponent/>
      </View>

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
