import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo List:</Text>
        <Switch value="Music" />
        <Switch value="Meditate" />
        <Switch value="Open Container"/>
      </View>
    )
  }
}
