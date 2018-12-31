import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'

// import AppNavigator from './navigation/AppNavigator'

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
        <Text>
          Todo List:
          - Music
          - Meditate
        </Text>
        <Text>
          Open Container
        </Text>
      </View>
    )
  }
}
