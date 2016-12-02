/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyBuowEXrYF4ePFXJqtuKVG3pWMLV39JAiw",
    authDomain: "pethos-f84c9.firebaseapp.com",
    databaseURL: "https://pethos-f84c9.firebaseio.com",
    storageBucket: "pethos-f84c9.appspot.com",
    messagingSenderId: "210631686920"
  };
  firebase.initializeApp(config);



class Login extends Component {
  constructor(props){
    super(props);
    this.state = {username:'',password:''};
    this.database = firebase.database();
    this.Account = this.database.ref('Account');
    this.getAccount = this.getAccount.bind(this);

  }

  getAccount(){
    let username = this.state.username;
    let password = this.state.password;
    let userCondition = 0;
    let passCondtion = 0;
    this.Account.on('value',(snap)=>{

      snap.forEach((indexkey)=>{
        var accindex = 'Account/'+indexkey.key;
        this.indexaccount = this.database.ref(accindex);
        console.log(accindex);
        this.indexaccount.on('value',(result)=>{
          result.forEach((child)=>{
            // console.log("Checking");
            // console.log(child.key);
            // console.log(child.val());
            if(child.key == 'username' && child.val() == username){
              userCondition = 1;
              console.log("username founded");
            }
            if (child.key == 'password' && child.val() == password){
              passCondtion = 1;
              console.log("password founded");
            }
            if (passCondtion == 1 && userCondition == 1){
              console.log("Login Success");
              this.setState({username:'',password:''});
              this.props.navigator.push({index:2})
              return 1;

            }
          })
        })
      });
    });

    return 0;
  }

  render() {
    return (
      <View style={styles.outterContainer}>
        <View style={styles.containerTop}>
          <Image style={{height:200, width:200}}
          source = {require('./image/logologin.png')}/>
        </View>

        <View style={styles.containerBottom}>
          <View style={styles.inputbox}>
            <Text style={styles.logintext}>Username  </Text>
            <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(username)=>this.setState({username})}
            />

          </View>
          <View style={styles.inputbox}>
            <Text style={styles.logintext}>Password   </Text>
            <TextInput style={styles.input} secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password)=> this.setState({password})}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={this.getAccount}>
            <Text style={{color:"white"}}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  outterContainer:{
    flex:1,
  },
  containerTop: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems:"center",
    marginTop:20,
  },
  containerBottom: {
    flex: 1.22,
    justifyContent: 'flex-start',
  },
  logintext: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30
  },
  input:{
   height: 30,
   width:200,
   alignSelf:"flex-end",
   backgroundColor: '#edf2f4',
   borderRadius:5,
   paddingLeft:13
  },
  inputbox:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
   marginTop:20,
   backgroundColor: '#1ebad5',
   alignItems:"center",
   padding: 20,
   width:150,
   alignSelf:"center",
   borderRadius:20
 },
});

export default Login;
