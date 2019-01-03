import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch, Button } from 'react-native'
import Colors from './constants/Colors'
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
  }
})

export default class App extends React.Component {
  
  constructor(props) {
    super(props)

    state = {
      box: {
        isOpen: false,
        musicHours: 0,
        meditationDays: 0,
        meditatedToday: false,
        drinkDays: 0,
        cheatDays: 0,
        cheatToday: false
      }
    }
    
    // load in the state
    pi.GET('', () => {
      this.setState({box: data})
    })
  }    
 
  //
  // ACTIONS
  // 

  function completeMeditation() {
    pi.POST("meditate", (data) => {
      this.setState( {box: data} )
    })
  }
  
  function toggleBox() {
    pi.POST("toggle", (data) => {
      this.setState( {box: data} )
    })
  }

  function cheatToday() {
    pi.POST("cheat", (data) => {
      this.setState( {box: data} )
    })
  }

  //
  // RENDER
  //

  render() {
    return (
      <View style={styles.container}>
        
        // Music
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Music</Text>
          <Text>{this.state.box.musicHours}/500</Text>
        </View>
        
        // Meditate
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Meditate ({this.state.box.meditationDays}/365)
          </Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.completeMeditation()}
            value={this.state.box.meditatedToday}
          />
        </View>

        // Cheat
        <Button
          onPress={()=>this.cheatToday()}
          title="Cheat Day"
          color={Colors.cheatButton}
        />

        // Open Box
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Unlock</Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.toggleBox()}
            value={this.state.box.isOpen }
          />
        </View>

      </View>
    )
  }
}
