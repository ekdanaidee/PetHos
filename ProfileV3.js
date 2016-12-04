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
  Modal,
  Picker,
  TouchableHighlight
} from 'react-native';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state = {modalVisible:false,petType:"Dog"};
  }


  render() {
    return (
      <View style={styles.container}>



      <View style={styles.Vtop}>
        <Text style={styles.welcome}>Profile</Text>
      </View>
        <View style={styles.Vmiddle}>
          <TextInput keyboardType='numeric' placeholder="HN" style={styles.inputtext}/>
          <TextInput keyboardType='phone-pad' placeholder="Pet name" style={styles.inputtext}/>
          <TouchableHighlight style={styles.typeSelectbutton}onPress={() => {
            this.setState({modalVisible:true});
          }}>
            <Text>Select Pet Type</Text>
          </TouchableHighlight>
          <TextInput keyboardType='default' placeholder="Birthdate" style={styles.inputtext}/>

          <TextInput keyboardType='default' placeholder="Owner name" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Address" style={styles.inputtext}/>
          <TextInput keyboardType='default' placeholder="Mobile number" style={styles.inputtext}/>
		      <TextInput keyboardType='default' placeholder="Email" style={styles.inputtext}/>
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
  }
});

export default Profile;
