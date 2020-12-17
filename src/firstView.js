import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text1: "",
      text2: ""
    }
  }
  changeView(){
    Actions.secondView({text1: this.state.text1, text2: this.state.text2});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/287849.jpg')} style={styles.bigBox}/>
        <TextInput
          style={styles.mediumBox} 
          onChangeText={text1=>this.setState({text1: text1})}
        />
        <TextInput
          style={styles.mediumBox}
          onChangeText={text2=>this.setState({text2: text2})}
        />
        <Button
          title="Siguiente"
          color="#9b9b9b"
          onPress={()=>this.changeView()}
        />
      </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bigBox: {
    width: 300,
    height: 125,
 },
  mediumBox: {
    width: 300,
    height: 30,
    borderColor: "orange",
    borderWidth: 1
  }
});
