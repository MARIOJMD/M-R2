import  { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import SingleArtist from './SingleArtist.js';
import {Actions, Scene, Router} from 'react-native-router-flux';

export default class ArtistBox extends Component{

  tap({ image, name }){
    let iname = name;
    Actions.SingleArtist({ image, iname });
}

  render(){
    const {image, name} = this.props.artist.artist.item;

    return(
      <TouchableOpacity style={ styles.artistBox } onPress={ () => this.tap({ image, name }) }>
        <Image style={ styles.image } source={{ uri: image }}/>
        <View style={ styles.info } >
          <Text style={ styles.name }>{ name }</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  artistBox: {
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .1,
    shadowOffset: {
      height: 1,
      width: -2
    },
    elevation: 2
  },
  image: {
    width: 150,
    height: 150
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    color: 'black',
  }
})
