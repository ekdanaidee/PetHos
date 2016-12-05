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

class ReportInfo extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {HN:this.props.HN,petName:"",petType:"",birthDate:"",dataSource:"",phoneNumber:"",ownerName:"",dataSource:ds.cloneWithRows([1,2])};
    this.database = firebase.database();
    this.Profile = this.database.ref('Profile/'+this.state.HN);
    this.Diagnosis = this.database.ref('Profile/'+this.state.HN+"/Diagnosis");

    console.log(this.state.HN);
    this.findHN = this.findHN.bind(this);
  }

  findHN(){
    var newData = [];
    this.Profile.on('value',(snap)=>{
    this.setState({
        petName:snap.val().petName,
        petType:snap.val().petType,
        birthDate:snap.val().birthDate,
        phoneNumber:snap.val().phoneNumber,
        ownerName:snap.val().ownerName
      })
    });


    this.Diagnosis.on('value',(diag)=>{
      diag.forEach((date)=>{
        this.database.ref('Profile/'+this.state.HN+"/Diagnosis/"+ date.key).once('value',result=>{
          newData.push({
            Diagnosis:"       Diagnosis: "+result.val().Diagnosis,
            Remask:"      Remask: "+result.val().Remark,
            Sysmpton:"      Sysmpton: "+result.val().Symptom,
            Treatment:"       Treatment: "+result.val().Treatment,
            _key:date.key
          });
        })

      })
    })
    console.log(newData)
    this.setState({
    dataSource: this.state.dataSource.cloneWithRows(newData)
    })
  }



  componentWillMount(){
    console.log("ComponentWillMount22");
    if(this.state.HN != null){
      this.findHN()
    }

  }
   componentDidMount(){
     console.log("componentDidMount22");
   }
   componentWillReceiveProps(nextProps){
     console.log("componentWillReceiveProps22");
   }

  render() {
    return (

      <View style={styles.container}>
      <View style={styles.Vtop}>
        <Text  style={styles.welcome}>Detail</Text>
      </View>
        <View style={styles.Vmiddle}>
          <View style={styles.Vleft}>
            <Text style={styles.headerText}>Customer</Text>
            <Text style={styles.headerText}>Pet name</Text>
            <Text style={styles.headerText}>Pet type</Text>
            <Text style={styles.headerText}>Pet birthDate</Text>
            <Text style={styles.headerText}>Call</Text>
          </View>

          <View style={styles.Vright}>
          <Text>{this.state.ownerName}</Text>
          <Text>{this.state.petName}</Text>
          <Text>{this.state.petType}</Text>
          <Text>{this.state.birthDate}</Text>
          <Text>{this.state. phoneNumber}</Text>

          </View>
        </View>

        <View style={styles.VunderMiddle}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>

              <View style={styles.li}>
                <Text style={styles.liText}>{rowData._key}</Text>
                <Text style={styles.liText}>{rowData.Remask}</Text>
                <Text style={styles.liText}>{rowData.Sysmpton}</Text>
                <Text style={styles.liText}>{rowData.Treatment}</Text>
              </View>

          }
         />

        </View>

        <View style={styles.Vbottom}>

          <View style={styles.Cancel}>
            <TouchableOpacity style={styles.topButton} onPress={()=>this.props.navigator.pop()}>
              <Text style={styles.welcome}>Back</Text>
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
    flex: 2,
    backgroundColor: "#1ebad5",
    justifyContent:"center",
    alignItems:"center",
  },
  Vmiddle:{
    flex:10,
    flexDirection:'row'

  },
  Vbottom:{
    flex:2,
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
  Vleft:{
    flex:0.52,

    justifyContent:"space-around",
    alignItems:"flex-end",
    backgroundColor:"#FFBB3C",
    marginRight:12
  },
  Vright:{
    flex:1,
    justifyContent:"space-around"
  },
  VunderMiddle:{
    flex:10,
  },
  Cancel:{
    flex:2,
    backgroundColor:"red"
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


});

export default ReportInfo;
