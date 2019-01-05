import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch, Button } from 'react-native'
import Colors from './constants/Colors'
import MusicView from './components/MusicView'
import MeditationView from './components/MusicView'
import pi from './api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  switchContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 15
  },
  switchLabel: {
    flex: 0
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  }
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
  // ACTIONS
  //
  
  toggleBox() {
    pi.POST("toggle", (data) => {
      this.setState(data)
    })
  }

  cheatToday() {
    pi.POST("cheat", (data) => {
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
      </View>
    )
  }
}

/*
       <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Meditate {this.state.meditationDays}/365</Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.completeMeditation()}
            value={this.state.meditatedToday}
          />
        </View>
        <Button
          onPress={()=>this.cheatToday()}
          title={"Cheat Day ("+5-this.state.cheatDays+" remaining)"}
          color={this.state.cheatToday ? Colors.cheatButton : Colors.deactivated}
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Unlock</Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.toggleBox()}
            value={ this.state.isOpen }
          />
        </View>*/
