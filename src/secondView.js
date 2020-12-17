import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  back(){
    Actions.pop();
  }

  render() {
    const data1 = this.props.text1;
    const data2 = this.props.text2;
    
    return (
      <View style={styles.container}>
        <Image source={require('../assets/287849.jpg')} style={styles.bigBox}/>
        <Text>{data1}</Text>
        <Text>{data2}</Text>
        <Button 
          title="Atrás"
          onPress={()=>this.back()} 
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
