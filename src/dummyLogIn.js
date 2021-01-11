import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';


export default class App extends Component {

  changeView(){
    Actions.homeView();
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/287849.jpg')} style={styles.bigBox}/>
        <Text>Iniciar Sesión</Text>
        <TextInput
          style={styles.mediumBox} 
        />
        <TextInput
          style={styles.mediumBox}
        />
        <Button
          title="Siguiente"
          color="blue"
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
    borderColor: "black",
    borderWidth: 1
  }
});
