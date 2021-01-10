import  { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

export default class ArtistBox extends Component<Props>{
  /*constructor(props){
    super(props)
    this.state={
      data: this.props.artist
    }
  }*/

  render(){
    //const {image, name} = this.props.artist;
    //console.log(image, name);
    //console.log(this.props.artist)
    const artist = this.props.artist;
    //let name = artist.name;
    console.log(artist)

    return(
      <View style={ styles.artistBox }>
        <Image style={ styles.image } source={{ uri: image }}/>
        <View style={ styles.info }>
          <Text style={ styles.name }>{ name }</Text>
        </View>
      </View>
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
