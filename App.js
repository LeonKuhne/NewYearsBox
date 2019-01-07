import React from 'react'
import { Platform, StatusBar, StyleSheet, Dimensions, View} from 'react-native'
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
    flexDirection: 'column',
    backgroundColor: Colors.bg,
    height: Dimensions.get('window').height
  } 
})

export default class App extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
      musicHours: 0,
      musicDiff: 0,
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
          diff={this.state.musicDiff}
        />
        <MeditationView
          onPress={(state)=>this.setState(state)}
          done={this.state.meditatedToday}
          days={this.state.meditationDays}
          totalDays={365-this.state.cheatDays}
        />
        <DrinkView
          onPress={(state)=>this.setState(state)}
          pressed={this.state.drinkToday}
          days={this.state.drinkDays}
        />
        <CheatView
          onPress={(state)=>this.setState(state)}
          pressed={this.state.cheatToday}
          days={this.state.cheatDays}
        />
        <UnlockView
          onPress={(state)=>this.setState(state)}
          isOpen={this.state.isOpen}
        />
      </View>
    )
  }
}
