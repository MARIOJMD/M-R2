import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text1: "",
      text2: ""
    }
  }
  mostrarTexto(){
    alert(this.state.text2)
    alert(this.state.text1)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/287849.jpg')} style={styles.bigBox}/>
        <TextInput
          style={styles.mediumBox} 
          onChangeText={text1=>this.setState({text1: text1})}
        />
        <TextInput
          style={styles.mediumBox}
          onChangeText={text2=>this.setState({text2: text2})}
        />
        <Button
          title="Mostrar texto"
          color="#9b9b9b"
          onPress={()=>this.mostrarTexto()}
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
