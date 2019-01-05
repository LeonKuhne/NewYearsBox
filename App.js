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

  addMusic(amount, unit) {
    pi.POST("music", (data) => {
      this.setState(data)
    }, [amount, unit])
  }

  completeMeditation() {
    pi.POST("meditate", (data) => {
      this.setState(data)
    })
  }
  
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
        
        // Music
        //<Text>Music ({this.state.musicHours}/500):</Text>
        <View style={styles.buttonContainer}>
          
          <Button
            onPress={()=>this.addMusic(15, 'min')}
            title="15 Min"
            color={Colors.button}
          />
          
          <Button
            onPress={()=>this.addMusic(30, 'min')}
            title="30 Min"
            color={Colors.button}
          />
          
          <Button
            onPress={()=>this.addMusic(1, 'hrs')}
            title="1 Hour"
            color={Colors.button}
          />

          <Button
            onPress={()=>this.addMusic(2, 'hrs')}
            title="2 Hour"
            color={Colors.button}
          />

          //<Text>{this.state.musicHours}/500</Text>
        </View>
        
        // Meditate
        <View style={styles.switchContainer}>
          //<Text style={styles.switchLabel}>
          //  Meditate ({this.state.meditationDays}/365)
          //</Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.completeMeditation()}
            value={this.state.meditatedToday}
          />
        </View>

        // Cheat
        <Button
          onPress={()=>this.cheatToday()}
          title={"Cheat Day ("+5-this.state.cheatDays+" remaining)"}
          color={this.state.cheatToday ? Colors.cheatButton : Colors.deactivated}
        />

        // Open Box
        <View style={styles.switchContainer}>
          //<Text style={styles.switchLabel}>Unlock</Text>
          <Switch
            trackColor={{true: Colors.tintColor}}
            onValueChange={() => this.toggleBox()}
            value={this.state.isOpen }
          />
        </View>

      </View>
    )
  }
}
