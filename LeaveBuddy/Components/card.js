import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class Card extends Component{
  render(){
    return(

      <View style={styles.row}>
      <Text>
      Test
      </Text>
      </View>
    )
  }

}

export default Card;

const styles = StyleSheet.create({

  row : {

    margin : 5,
    flexDirection : 'row',

    width : 300,

  }

})
