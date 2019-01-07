import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native'
import Colors from './constants/Colors'
import MusicView from './components/MusicView'
import MeditationView from './components/MeditationView'
import DrinkView from './components/DrinkView'
import CheatView from './components/CheatView'
import UnlockView from './components/UnlockView'
import pi from './api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
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
      drinkToday: false,
      cheatDays: 0,
      cheatToday: false
    }
    
    // load in the state
    pi.GET('', (data) => {
      setTimeout((data) => {
        this.setState(data)
      }, 1000)
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
          hours={this.state.musicHours}
          title={'Music '+this.state.musicHours+'/500'}
          diff={this.state.musicDiff}
        />
        <MeditationView
          onPress={(state)=>this.setState(state)}
          title={'Meditation '+this.state.meditationDays+'/'+(365-this.state.cheatDays)}
          pressed={this.state.meditatedToday}
        />
        <DrinkView
          onPress={(state)=>this.setState(state)}
          title={'Drink '+this.state.drinkDays+'/5'}
          pressed={this.state.drinkToday}
        />
        <CheatView
          onPress={(state)=>this.setState(state)}
          title={'Cheat '+this.state.cheatDays+'/5'}
          pressed={this.state.cheatToday}
        />
        <UnlockView
          onPress={(state)=>this.setState(state)}
          isOpen={this.state.isOpen}
        />
      </View>
    )
  }
}
