import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch } from 'react-native'
import Colors from './constants/Colors'

const PI_URL = '192.168.1.18:7272'

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
    console.log('finished meditation')
    //this.setState({isMeditationDone: !this.state.isMeditationDone})
  }
  
  openBox = () => {
    // send a post request to open the box
    fetch(PI_URL + '/open', {
      method: 'post',
    })
    .then((res)=>{
      console.log('opened the box')
      //this.setState({this.state.isBoxOpen: true})
    })
    .catch((err)=>{
      console.error('Error opening box: ' + err)
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
          <Text style={styles.switchLabel}>Open Box</Text>
          <Switch trackColor={{true: Colors.tintColor}} onValueChange={() => this.openBox()} value={this.state.isBoxOpen } />
        </View>

      </View>
    )
  }
}
