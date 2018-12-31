import React from 'react'
import { Platform, StatusBar, StyleSheet, View, Text, Switch } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
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
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List:</Text>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Music</Text>
          <Switch />
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Meditate</Text>
          <Switch />
        </View>

       <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Box Open</Text>
          <Switch />
        </View>

      </View>
    )
  }
}
