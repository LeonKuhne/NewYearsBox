import React from 'react'
import { StyleSheet, View, Text }
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class MeditationView extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
      </View>
    )
  }

  addMeditation() {
    pi.POST('meditate', (state) => {
      this.props.onPress(state)
    })
  }
}
