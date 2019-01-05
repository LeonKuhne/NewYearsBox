import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch, Button } from 'react-native'
import Colors from './constants/Colors'
import MusicView from './components/MusicView'
import MeditationView from './components/MeditationView'
import CheatView from './components/CheatView'
import UnlockView from './components/UnlockView'
import pi from './api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffa',
    paddingVertical: 50,
  }, 
})

export default class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      musicHours: 0,
      meditationDays: 0,
      meditatedToday: false,
      drinkDays: 0,
      cheatDays: 0,
      cheatToday: false
    }
    
    // load in the state
    pi.GET('', () => {
      this.setState(data)
    })
  }    

  //
  // RENDER
  //

  render() {
    return (
      <View style={styles.container}>
        <MusicView
          onPress={(state)=>this.setState(state)}
          title={'Music '+this.state.musicHours+'/500'}
        />
        <MeditationView
          onPress={(state)=>this.setState(state)}
          title={'Meditation '+this.state.meditationDays+'/'+(365-this.state.cheatDays)}
        />
        <CheatView
          onPress={(state)=>this.setState(state)}
          title={'Cheat '+this.state.cheatDays+'/5'}
        />
        <UnlockView
          onPress={(state)=>this.setState(state)}
          isOpen={this.state.isOpen}
        />
      </View>
    )
  }
}
