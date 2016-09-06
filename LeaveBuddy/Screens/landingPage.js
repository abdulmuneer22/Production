import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ListViewComponent from '../Components/listView'

class LandingPage extends Component{
// Passed the prop to inputForm Component
  render(){
    return(

      <View style={styles.container}>
      <ListViewComponent navigator={navigator} {...this.props}/>


      </View>


    )
  }
}


export default LandingPage

const styles = StyleSheet.create({

  container : {
    backgroundColor : 'rgb(243,245,246)',
    flex :1,
    alignItems : 'center',
    justifyContent : 'center'

  },
});
