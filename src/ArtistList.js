import ArtistBox from './ArtistBox.js';
import React, { Component } from 'react';
import { StyleSheet } from 'react';
import { FlatList } from 'react-native';

export default class ArtistList extends Component{
  constructor(props){
    super(props);
    //const ds = new FlatList.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const ds = this.props.artists;
    this.state = {
      dataSource: ds
  }
}

  componentDidMount(){
    this.updateDataSource(this.props.artists)
  }


  UNSAFE_componentWillReceiveProps(newProps){
    if(newProps.artists !== this.props.artists){
      this.updateDataSource(newProps.artists)
    }
  }

  updateDataSource = (data) => {
    this.setState({ 
      dataSource: this.state.dataSource
      //.cloneWithRows(data)
    })
  }

 renderListItem( {artist} ){
      //console.log(artist)
      return(
        <ArtistBox artist={{ artist }}/>
      );
    }

  render(){

    let artist = this.state.dataSource;
    //console.log(artist)

    /*const renderListItem = ( {artist} ) =>{
      console.log(artist)
      return(
        <ArtistBox artist={ artist }/>
      );
    }*/

    //console.log(DATA);
    return(
      <FlatList 
        data = { artist }
        //renderItem={(artist) => this.renderListItem(artist)}
        renderItem = {(artist) => this.renderListItem({artist})}
      />
    );
  }

}
