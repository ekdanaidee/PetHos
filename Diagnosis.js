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
  Modal,
  TouchableHighlight,

} from 'react-native';

import * as firebase from 'firebase';
import DatePicker from 'react-native-datepicker'


class Diagnosis extends Component {
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {modalVisible:false,HN:"",Currentdate:"",Symptom:"",Diagnosis:"",Treatment:"",Remark:"",dataSource: ds.cloneWithRows([1,2]),CustomerName:"",petName:"Pet Name"};
    this.database = firebase.database();
    this.Profile = this.database.ref('Profile');
    this.findHN = this.findHN.bind(this);
    this.writeDB = this.writeDB.bind(this);
  }

  findHN(){
    var newData = [];
    this.Profile.on('value',(snap)=>{
      snap.forEach((HNkey)=>{
        this.database.ref('Profile/'+ HNkey.key).once('value',(result)=>{
          newData.push({
            title: result.val().ownerName,
            nameofPet: result.val().petName,
            _key: HNkey.key

          });
        })
        console.log(newData)
      })
    })
    this.setState({
    dataSource: this.state.dataSource.cloneWithRows(newData)
    })
  }

  writeDB(){
    firebase.database().ref('Profile/'+this.state.HN+'/Diagnosis/'+this.state.Currentdate).set({
      Symptom:this.state.Symptom,
      Diagnosis:this.state.Diagnosis,
      Treatment:this.state.Treatment,
      Remark:this.state.Remark,
    });
    this.props.navigator.pop()
  }

  componentWillMount(){
    console.log("ComponentWillMount");
    this.findHN();
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

      <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.ModalContainer}>
         <View style={styles.ModalStatus}>
           <Text style={styles.welcome}>Customer List</Text>
         </View>
          <View style={styles.ModalList}>
          <ListView
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData)=>
              <TouchableOpacity onPress = {()=>{
                  this.setState({modalVisible:false,HN:rowData._key,CustomerName:rowData.title,petName:rowData.nameofPet});
              }}>
                <View style={styles.li}>
                  <Text style={styles.liText}>{rowData.title}</Text>
                </View>
              </TouchableOpacity>
            }
           />
          </View>
         </View>
        </Modal>

        <View style={styles.Vtop}>
          <Text style={styles.welcome}>Diagnosis</Text>
        </View>
        <View style={styles.Vmiddle}>

        <View style={styles.Vleft}>
          <Text style={styles.headerText}>Custom Name</Text>
          <Text style={styles.headerText}>Pet name</Text>
          <Text style={styles.headerText}>Dianose Date</Text>
          <Text style={styles.headerText}>Symptom</Text>
          <Text style={styles.headerText}>Dianosis</Text>
          <Text style={styles.headerText}>Treatment</Text>
          <Text style={styles.headerText}>Remask</Text>

        </View>

        <View style={styles.Vright}>
          <View style={styles.IDHolder}>
          <Text style={{flex:1}}>{this.state.CustomerName}</Text>
          <TouchableOpacity style={{flex:1}} onPress={() => {
            this.setState({modalVisible:true});
          }}>
            <Text>Select</Text>
          </TouchableOpacity>

          </View>
          <Text>{this.state.petName}</Text>
          <DatePicker style={{width: 200}} date={this.state.Currentdate} mode="date" placeholder="select date" format="YYYY-MM-DD" minDate="1990-01-01" maxDate="2016-12-05" confirmBtnText="Confirm"
                  cancelBtnText="Cancel" customStyles={{ dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                  }}
                  onDateChange={(date)=>{this.setState({Currentdate:date})}}
                  />
          <TextInput value={this.state.Symptom} onChangeText={(Symptom)=>this.setState({Symptom})} keyboardType='default' placeholder="Symptom" style={styles.inputtext}/>
          <TextInput value={this.state.Diagnosis} onChangeText={(Diagnosis)=>this.setState({Diagnosis})} keyboardType='default' placeholder="Diagnosis Disease" style={styles.inputtext}/>
          <TextInput value={this.state.Treatment} onChangeText={(Treatment)=>this.setState({Treatment})} keyboardType='default' placeholder="Treatment" style={styles.inputtext}/>
          <TextInput value={this.state.Remark} onChangeText={(Remark)=>this.setState({Remark})} keyboardType='default' placeholder="Remark" style={styles.inputtext}/>
          </View>
        </View>

        <View style={styles.Vbottom}>
        <View style={styles.Vbottom}>
          <TouchableOpacity style={styles.topButton} onPress={this.writeDB}>
            <Text style={styles.welcome}>Save</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Cancel}>
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
    flexDirection:'row'
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
    height:30
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
  Cancel:{
    flex:1,
    backgroundColor:"red"
  },
  ModalContainer:{
    marginTop:20,
    flex:1
  },
  ModalStatus:{
    flex:1,
    backgroundColor: "#1ebad5",
    justifyContent:"center",
    alignItems:"center",
  },
  ModalList:{
    flex:11
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
  }
});

export default Diagnosis;
