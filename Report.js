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
  TextInput,
  ListView,
} from 'react-native';


import * as firebase from 'firebase';

class Report extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {HN:"",CustomerName:"",dataSource: ds.cloneWithRows([1,2])};
    this.database = firebase.database();
    this.Profile = this.database.ref('Profile');
    this.findData = this.findData.bind(this);
  }

  findData(){
    var newData = [];
    this.Profile.on('value',(snap)=>{
      snap.forEach((HNkey)=>{
        this.database.ref('Profile/'+ HNkey.key).once('value',(result)=>{
          newData.push({
            title: result.val().ownerName,
            _key: HNkey.key
          });
        })
      })
    })
    this.setState({
    dataSource: this.state.dataSource.cloneWithRows(newData)
    })
  }


  componentWillMount(){
    console.log("ComponentWillMount");
    this.findData();
  }
   componentDidMount(){
     console.log("componentDidMount");
   }
   componentWillReceiveProps(nextProps){
     console.log("componentWillReceiveProps");
   }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.Vtop}>
        <Text style={styles.welcome}>Report</Text>
      </View>
        <View style={styles.Vmiddle}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>
            <TouchableOpacity onPress = {()=>{
              this.setState({HN:rowData._key,CustomerName:rowData.title});

              this.props.navigator.push({index: 5,passProps:{HN:rowData._key}})

           }}>
              <View style={styles.li}>
                <Text style={styles.liText}>{rowData.title}</Text>
              </View>
            </TouchableOpacity>
          }
         />
        </View>
        <View style={styles.Vbottom}>
          <View style={styles.Vbottom}>
            <TouchableOpacity style={styles.topButton}>
              <Text style={styles.welcome}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Vbottom}>
        		<TouchableOpacity style={styles.topButton}>
              <Text style={styles.welcome}>Edit</Text>
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
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  headerText:{
    color:"white",
    marginRight:4,
    fontSize:16
  },
  IDHolder:{
    flexDirection:"row",
  },


});

export default Report;
