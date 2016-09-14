

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight,
  Dimensions,
  AsyncStorage
} from 'react-native';

import GiftedSpinner from 'react-native-gifted-spinner';

import Icon from 'react-native-vector-icons/Ionicons';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};
const window = Dimensions.get('window');

class ListViewComponent extends Component{

  constructor(props){
  super(props);

      this.state={
      dataSource : new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      spinnerVisible : true,
      _rowDataTitle : ''
      }
  }

componentWillMount(){
//firebase.initializeApp(firebaseConfig)
this.getListItems()
}


async getUser(){
  let User =  await AsyncStorage.getItem('userEmail')
  if(!User){
    //alert("No User")
    this.props.navigator.push({name:'login'})
  }
  else {
    //alert(User)
    this.props.navigator.push({name:'applyLeave'})



  }
}


handleButtonClick(rowData){
  // prop is passed by Component using Button
  //alert(rowData.Title)
  switch(rowData.routeName){
    case 'applyLeave':
          //Chekc if user is logged in

          this.getUser()

          //Checks if user is logged in , redirects him to login page if not




          break;
    case 'checkLeaveApplication':
          console.log("Leave Application Status")
          break;

    case 'checkLeaveBalance':
          console.log("Leave Balance")
          break;

    case 'checkTeamsAttendance':
          console.log("Check Teams Attendance Status")
          break;

  }

  }

getListItems(){
// Method to fetc list from Firebase
var EndPoint = 'urbanservices/LeaveBuddy'
var Ref = firebase.database().ref('LeaveBuddy/Functions')
//var CanRef = firebase.database().ref('LeaveBuddy/')

//CanRef.on('value',(can)=>{console.log(can.val());})
Ref.on('value',(list)=>{
//Store Product Information to array items = []
//console.log(list.val())
var items = []
// Iterate through the list and store it as key => value to items = []
      list.forEach((child)=>
        {
            items.push(
              {
                Title : child.val().Title,
                LeftIconName : child.val().LeftIconName,
                RightIconName : child.val().RightIconName,
                routeName : child.val().routeName


            }
          );
       }
    );

//Upate Items Object to state ,to access it while rendering ListView


this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});

//Hide Spinner ,becuase list items are laoded
this.setState({spinnerVisible:false})
})

}

render(){
return(

<View style={styles.container}>

<View
style={{
  //borderWidth : 1,
  //borderColor : 'black',
  //height : window.height-50,
  alignItems : 'center',
  justifyContent : 'center',

  //flexDirection : 'row'


}}
>



<ScrollView showsVerticalScrollIndicator = {false} style={{}}>
    {this.state.spinnerVisible?

    <View>
    <GiftedSpinner size={'large'} color={'#00bcd4'}/>
    <Text style={{justifyContent:'center',textAlign:'center',color : '#00bcd4',marginTop : 10}}>Please Wait..!!</Text>
    </View>
    :

    <ListView
    dataSource = {this.state.dataSource}
    renderRow = {
            (rowData)=>


            <View>


              <View style={{

                borderColor :'rgb(255,255,255)',
                borderWidth : 1,
                borderRadius : 8,
                width : 300,
                margin : 10,
                padding : 10,
                flexDirection: 'row',
                flex :1,
                backgroundColor :'rgb( 255, 255, 255)'

              }}>



              <View style={{ flex : 1}}>
                <Icon name={rowData.LeftIconName} size={30} color="rgb(75, 73, 73)" />
              </View>


              <Text style={{
                flex : 3,
                marginTop :5,
                fontSize : 16}}
                onPress={this.handleButtonClick.bind(this,rowData)}
              >
              {rowData.Title}
              </Text>

              <View style={{alignSelf : 'flex-end', flex : 1}}>
                <Icon name={rowData.RightIconName} size={30} color="rgb(75, 73, 73)" />
              </View>


              </View>

            </View>



            }


    />

    }






</ScrollView>
</View>

</View>

)
}
}


export default ListViewComponent;


const styles = StyleSheet.create({
container:{
  backgroundColor : 'rgb(243,245,246)',
  flex : 1,
  alignItems : 'center',
  justifyContent :'center'
}
});
