

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native';

class Option extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topcontainer}>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.push({index:1})}>
          <Text style={styles.buttontext}>Add New Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.push({index:3})}>
          <Text style={styles.buttontext}>Diagnosis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.props.navigator.push({index:4})}>
          <Text style={styles.buttontext}>Report</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttomcontainer}>
        <TouchableOpacity style={styles.Cancelbutton} onPress={()=>this.props.navigator.pop()}>
          <Text style={styles.buttontext}>Log Out</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // borderColor:"red",
    // borderWidth:1,
    marginTop:20,
    justifyContent:"center",

  },
  normaltext:{
    padding:11.5
  },
  topcontainer:{
    flex: 12,
    // borderColor:"green",
    // borderWidth:1,
    backgroundColor: '#1ebad5',

  },
  buttomcontainer:{
    flex: 2,
    // borderColor:"green",
    // borderWidth:1,

    backgroundColor: 'red',

  },
  buttoncontainer:{
    flex: 2,
    borderColor:"yellow",
    borderWidth:1,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",

  },
  buttomnavcontainer:{
    flex: 1,
    borderColor:"yellow",
    borderWidth:1,
  },
  input:{
   height: 35,
   width:200,
   alignSelf:"center",
   backgroundColor: '#edf2f4',
   margin:5
 },
  button:{
   justifyContent:"center",
   alignItems:"center",
   flex:1,
   borderColor:"white",
   borderTopWidth:5
 },
 Cancelbutton:{
  backgroundColor: 'red',
  justifyContent:"center",
  alignItems:"center",
  flex:1,
  borderColor:"white",
  borderTopWidth:5
},
 buttontext:{
   color:"white",
   fontSize:25
 },


});

export default Option;
