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
  TouchableOpacity,
  TextInput
} from 'react-native';

class Diagnosis extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Vtop}>
          <Text style={styles.welcome}>Diagnosis</Text>
        </View>
        <View style={styles.Vmiddle}>
          <TextInput keyboardType='numeric' placeholder="HN" style={styles.inputtext}/>
          <TextInput keyboardType='phone-pad' placeholder="Current Date" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Symptom" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Diagnosis Disease" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Treatment" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Remark" style={styles.inputtext}/>
        </View>
        <View style={styles.Vbottom}>
        <View style={styles.Vbottom}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={styles.welcome}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Vleft}>
          <TouchableOpacity style={styles.topButton} onPress={()=>this.props.navigator.pop()}>
            <Text style={styles.welcome}>Cancel</Text>
          </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  Vtop:{
    marginTop:20,
    flex: 1,
    backgroundColor: "#1ebad5",
    justifyContent:"center",
    alignItems:"center",
  },
  Vmiddle:{
    flex:10,
    paddingTop:20,
  },
  Vbottom:{
    flex:1,
    flexDirection:'row',
    backgroundColor: "#1ebad5",
  },
  topButton:{
    flex:1,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputtext:{
    marginLeft: 20,
    marginRight: 20,
    height: 60,
  },
  Vleft:{
    flex:1,
    flexDirection:'row',
    backgroundColor: "red",
  }

});

export default Diagnosis;
