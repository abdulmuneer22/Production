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
    AsyncStorage,
    TouchableOpacity
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


  class MyInventory extends Component{

    constructor(props){
    super(props);

        this.state={
        dataSource : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
        }),
        spinnerVisible : true,
        _rowDataTitle : '',
        skuButtonBg : "rgb(138, 134, 133)",
        waterCansAvailable : 0
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

  var VendorID =  'testVendor'
  var EndPoint = 'urbanservices/vendors/testVendor/productsAvailable/waterCan'
  var Ref = firebase.database().ref(EndPoint)

  Ref.on('value',(list)=>{
  //Store Product Information to array items = []
  console.log(list.val())
  var items = []
  // Iterate through the list and store it as key => value to items = []
        list.forEach((child)=>
          {
              items.push(
                {
                  Price : child.val().Price,
                  SKU : child.val().SKU,
                  name : child.val().Name,
                  buttonColor : child.val().buttonColor

              }


            );

            if(child.val().buttonColor === 'green'){
              //alert("Green")
              var _waterCansAvailable = this.state.waterCansAvailable+1
              this.setState({waterCansAvailable:_waterCansAvailable})

            }


         }
      );

  //Upate Items Object to state ,to access it while rendering ListView


  this.setState({dataSource: this.state.dataSource.cloneWithRows(items)});

  //Hide Spinner ,becuase list items are laoded
  this.setState({spinnerVisible:false})
  })

  }


  upDateStockWaterCan(SKU){
    //Changes Color Of WaterCan Button to show it is available
    var currentSKU = SKU
    firebase.database().ref('urbanservices/vendors/testVendor/productsAvailable/waterCan/'+currentSKU).update({
    buttonColor: 'grey'
    });


    alert("Stock has been successfully removed from your inventory, If you wish to update the inventory, Please Contact Customer Care")

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

      <View>
      <View>


        <View style={{

          borderColor :'rgb(255,255,255)',
          borderWidth : 1,
          borderRadius : 8,
          width : window.width*0.7,
          margin : 10,
          padding : 10,
          flexDirection: 'row',
          flex :1,
          backgroundColor :'rgb( 255, 255, 255)'

        }}>



        <View style={{ flex : 1}}>
          <Icon name="ios-water-outline" size={30} color="rgb(75, 73, 73)" />
        </View>


        <Text style={{
          flex : 3,
          marginTop :5,
          fontSize : 16}}

        >
        Water Can
        </Text>

        <View style={{alignSelf : 'flex-end', flex : 1}}>
          <Icon name="ios-arrow-dropdown-outline" size={30} color="rgb(75, 73, 73)" />
        </View>


        </View>

      </View>


      <ListView
      dataSource = {this.state.dataSource}
      renderRow = {
              (rowData)=>
              <View>

                  <TouchableOpacity style={styles.Button}>
                        <TouchableHighlight
                        style={[styles.Button,{backgroundColor : rowData.buttonColor}]}
                        onPress = {this.upDateStockWaterCan.bind(this,rowData.SKU)}
                        >
                        <Text style={styles.ButtonText}>{rowData.name}</Text>
                        </TouchableHighlight>
                  </TouchableOpacity>

              </View>

              }


      />
      <Text style={{marginTop : 20,textAlign :'center'}}>You Have {this.state.waterCansAvailable} Types Of Water Cans {"\n"}Available With You</Text>
      </View>

      }






  </ScrollView>
  </View>

  </View>

  )
  }
  }


  export default MyInventory;


  const styles = StyleSheet.create({
  container:{
    backgroundColor : 'rgb(243,245,246)',
    flex : 1,
    alignItems : 'center',
    justifyContent :'center'
  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width : window.width*0.7,
  margin : 10,
  height : 50,
  borderRadius : 8,
  justifyContent : 'center',
  padding : 10


},
ButtonText:{

  textAlign : 'left',
  color : 'white'
}
  });
