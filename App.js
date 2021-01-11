import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import dummyLogIn from './src/dummyLogIn.js';
import homeView from './src/homeView.js';
import SingleArtist from './src/SingleArtist.js';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="dummyLogIn" component={ dummyLogIn } hideNavBar/>
    <Scene key="homeView" component={ homeView } title="Artistas" />
    <Scene key="SingleArtist" component={ SingleArtist } title="Detalles"/>
  </Scene>
);

export default class App extends Component{
  render(){
    return <Router scenes={scenes}></Router>
  }
}
