import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch } from 'react-native'
import Colors from './constants/Colors'
import { GET, POST } from './api/pi'

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

  //
  // STATE
  //

  state = {
    box: {
      cheatDays: 0,
      drinkDays: 0,
      musicHours: 0,
      isOpen: false,
      meditationDays: 0,
      meditatedToday: false
    }
  }
  
  // load in the state
  GET("", (data) => {
    this.setState({box: data})
  })
  
  //
  // ACTIONS
  // 

  completeMeditation = () => {
    POST("meditate", (data) => {
      this.setState({box: data})
    })
  }
  
  toggleBox = () => {
    POST("toggle", (data) => {
      this.setState({box: data})
    })
  }

  //
  // RENDER
  //

  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List:</Text>
 
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Music</Text>
          <Text>132/500</Text>
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Meditate</Text>
          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.completeMeditation()} value={this.state.box.meditatedToday} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Unlock</Text>
          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.toggleBox()} value={this.state.box.isOpen } />
        </View>

      </View>
    )
  }
}
