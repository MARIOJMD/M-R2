import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
import { getMusicData } from './api-client.js';
import ArtistList from './ArtistList.js';

export default class homeView extends Component {
  constructor(props){
    super(props);
    this.state = {
      artists: null
    }
  }
  

  back(){
    Actions.pop();
  }

  componentDidMount(){
    getMusicData().then(data=>this.setState({ artists: data }));
  }

  render() {
  const artists = this.state.artists;
    return (
      <View style={styles.container}>
        { artists && <ArtistList artists={ artists }/> }
      </View>
    );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
