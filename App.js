import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import firstView from './src/firstView.js';
import secondView from './src/secondView.js';
import {Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="firstView" component={firstView} hideNavBar/>
    <Scene key="secondView" component={secondView} hideNavBar />
  </Scene>
);

export default class App extends Component{
  render(){
    return <Router scenes={scenes}></Router>
  }
}
