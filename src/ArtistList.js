import ArtistBox from './ArtistBox';
import React, { Component } from 'react';
import { StyleSheet } from 'react';
import { FlatList } from 'react-native';
import ListView from 'deprecated-react-native-listview';

export default class ArtistList extends Component<Props>{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(data) })
  }

  render(){

    return(
      <ListView
        enableEmptySections = { true }
        dataSource = { this.state.dataSource }
        renderRow = {( artist )=>{
          return(
              <ArtistBox artist = { artist }/>
          )
        }}
      />
    );
  }

}
