/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //Version1.0
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Picker,
  TouchableHighlight
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import * as firebase from 'firebase';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {modalVisible:false,HN:"",petName:"",petType:"Dog",birthDate:"",ownerName:"",address:"",phoneNumber:"",email:""};
    this.database = firebase.database();
    this.Profile = this.database.ref('Profile');
    this.writeDB = this.writeDB.bind(this);
    this.findHN = this.findHN.bind(this);
  }
  findHN(){
    var newHN = 0;
    this.Profile.on('value',(snap)=>{
      snap.forEach((HNkey)=>{
        var intHN = parseInt(HNkey.key,10);
        if(intHN > newHN){
          newHN = intHN;
          console.log(intHN);
        }
      })
    })
    newHN = newHN+1;
    newHN = newHN.toString();
    this.setState({HN:newHN});
  }
  writeDB(){
    firebase.database().ref('Profile/'+this.state.HN).set({
      petName:this.state.petName,
      petType:this.state.petType,
      birthDate:this.state.birthDate,
      ownerName:this.state.ownerName,
      address:this.state.address,
      phoneNumber:this.state.phoneNumber,
      email:this.state.email,
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
      <View style={styles.Vtop}>
        <Text style={styles.welcome}>Profile</Text>
      </View>


        <View style={styles.Vmiddle}>
          <View style={styles.Vleft}>
            <Text style={styles.headerText}>Custom ID</Text>
            <Text style={styles.headerText}>Pet Name</Text>
            <Text style={styles.headerText}>Pet Type</Text>
            <Text style={styles.headerText}>Birthdate</Text>
            <Text style={styles.headerText}>Owner Name</Text>
            <Text style={styles.headerText}>Address</Text>
            <Text style={styles.headerText}>Phone Number</Text>
            <Text style={styles.headerText}>Email</Text>
          </View>

          <View style={styles.Vright}>
          <Text style={{fontSize:20}}>{this.state.HN}</Text>
          <TextInput value={this.state.petName} onChangeText={(petName)=>this.setState({petName})} keyboardType='default' placeholder="Pet name" style={styles.inputtext}/>
          <TouchableHighlight  style={styles.typeSelectbutton}onPress={() => {
            this.setState({modalVisible:true});
          }}>
            <Text>{this.state.petType}</Text>
          </TouchableHighlight>
          <DatePicker style={{width: 200}} date={this.state.birthDate} mode="date" placeholder="select date" format="YYYY-MM-DD" minDate="1990-01-01" maxDate="2016-12-05" confirmBtnText="Confirm"
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
                  onDateChange={(date)=>{this.setState({birthDate:date})}}
                  />
          <TextInput value={this.state.ownerName} onChangeText={(ownerName)=>this.setState({ownerName})} keyboardType='default' placeholder="Owner name" style={styles.inputtext}/>
          <TextInput value={this.state.address} onChangeText={(address)=>this.setState({address})} keyboardType='default' placeholder="Address" style={styles.inputtext}/>
          <TextInput value={this.state.phoneNumber} onChangeText={(phoneNumber)=>this.setState({phoneNumber})} keyboardType='default' placeholder="Mobile number" style={styles.inputtext}/>
		      <TextInput value={this.state.email} onChangeText={(email)=>this.setState({email})} keyboardType='default' placeholder="Email" style={styles.inputtext}/>
        </View>

        </View>





        <View style={styles.Vbottom}>
        <View style={styles.Vbottom}>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={style= styles.ModalHolder}>
          <View style = {style = styles.PickerHolder}>
          <Picker
            selectedValue={this.state.petType}
            onValueChange={(pet) => this.setState({petType: pet})}
          >

              <Picker.Item label = "Dog" value = "Dog" />
              <Picker.Item label = "Cat" value = "Cat" />

          </Picker>
          </View>
          <View style = {style = styles.modalButtonHolder}>
              <TouchableOpacity onPress={()=>{this.setState({modalVisible:false})}}>
                <Text>Select</Text>
              </TouchableOpacity>
          </View>
         </View>
        </Modal>
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

    height: 30,
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
  PickerHolder:{
    backgroundColor:"white",
  },
  ModalHolder:{
    flex:1,
    justifyContent:"flex-end",
  },
  modalButtonHolder:{
    backgroundColor:"white",
    alignItems:"center",
    padding:20
  },
  typeSelectbutton:{
    marginLeft: 20,
    marginRight: 20,
  },
  headerText:{
    color:"white",
    marginRight:4,
    fontSize:16
  }
});
export default Profile;
