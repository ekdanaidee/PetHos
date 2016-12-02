import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

class Profile extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.leftcontainer}>
            <Text style={styles.normaltext}> HN </Text>
            <Text style={styles.normaltext}> Pet name </Text>
            <Text style={styles.normaltext}> Sex </Text>
            <Text style={styles.normaltext}> Type </Text>
            <Text style={styles.normaltext}> Birthdate </Text>
            <Text style={styles.normaltext}> Owner Name </Text>
            <Text style={styles.normaltext}> Address </Text>
            <Text style={styles.normaltext}> Mobile No. </Text>
            <Text style={styles.normaltext}> Email </Text>
          </View>
          <View style={styles.rightcontainer}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
        </View>
        </View>
        <View style={styles.buttomcontainer}>

          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttontext}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttomnavcontainer}>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    borderColor:"red",
    borderWidth:1,
    marginTop:20,
  },
  normaltext:{
    padding:11.5
  },
  leftcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-end",
    borderColor:"blue",
    borderWidth:1,
  },
  rightcontainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"flex-end",
    borderColor:"blue",
    borderWidth:1,
  },
  topcontainer:{
    flex: 6,
    borderColor:"green",
    borderWidth:1,
    flexDirection:"row"
  },
  buttomcontainer:{
    flex: 2,
    borderColor:"green",
    borderWidth:1,
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
   height: 30,
   width:150,
   alignSelf:"flex-start",
   backgroundColor: '#edf2f4',
   borderRadius:5,
   margin:5
 },
  button:{
   backgroundColor: '#1ebad5',
   justifyContent:"center",
   alignItems:"center",
   width:80,
   height:40,
   borderRadius:10,
   margin:20
 },
 buttontext:{
   color:"white"
 }

});

export default Profile;
