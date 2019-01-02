import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch } from 'react-native'
import Colors from './constants/Colors'

const PI_URL = 'http://192.168.1.3:7272'

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
  state = {
    isMeditationDone: false,
    isBoxOpen: false
  }

  completeMeditation = () => {
    console.log('Toggling Meditation')
    this.setState({isMeditationDone: !this.state.isMeditationDone}, ()=>{
      console.log('Meditation has been toggled.')
    })
  }
  
  toggleBox = () => {
    // send a post request to open the box
  fetch(PI_URL + '/toggle', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: ''
    })
    .then((res) => res.json())
    .then((data)=>{
      this.setState({isBoxOpen: data.isOpen})
    })
    .catch((err)=>{
      console.log('Error opening box: ' + err)
    })
  }

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
          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.completeMeditation()} value={this.state.isMeditationDone} />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Unlock</Text>
          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.toggleBox()} value={this.state.isBoxOpen } />
        </View>

      </View>
    )
  }
}
