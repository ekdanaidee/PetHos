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
  Navigator,
  StatusBar
} from 'react-native';


import Login from './Login.js';
import Profile from './ProfileV3.js';
import Option from './Option.js';
import Diagnosis from './Diagnosis.js';
import Report from './Report.js';
import ReportInfo from './ReportInfo.js';


const routes = [
  {
    title: 'Login',
    index: 0
  },
  {
    title: 'Profile',
    index: 1
  },
  {
    title: 'Option',
    index: 2
  },
  {
    title:'Diagnosis',
    index: 3
  },
  {
    title:'Report',
    index: 4
  },
  {
    title:'ReportInfo',
    index: 5
  }
]

export default class PetHos extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Navigator
           initialRoute={routes[0]}
           initialRouteStack={routes}
           renderScene={
              (route, navigator) => {
                switch (route.index) {
                  case 0: return (<Login navigator={navigator} route={routes[route.index]} {...route.passProps} ></Login>);
                  case 1: return (<Profile navigator={navigator} route={routes[route.index]} {...route.passProps}></Profile>);
                  case 2: return (<Option navigator={navigator} route={routes[route.index]} {...route.passProps}></Option>);
                  case 3: return (<Diagnosis navigator={navigator} route={routes[route.index]} {...route.passProps}></Diagnosis>);
                  case 4: return (<Report navigator={navigator} route={routes[route.index]} {...route.passProps}></Report>);
                  case 5: return (<ReportInfo navigator={navigator} route={routes[route.index]} {...route.passProps}></ReportInfo>);

                }
              }
            }
            configureScene={
             (route, routeStack) =>
               Navigator.SceneConfigs.FloatFromBottom
           }
        />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1
  },

});

AppRegistry.registerComponent('PetHos', () => PetHos);
