import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class MeditationView extends React.Component {
  
  render() {
    let color = this.props.done ? Colors.deactivated : Colors.button
    let title = `Meditate ${this.props.days}/${this.props.totalDays}`

    return(
      <View style={styles.container}>
        <Button
          onPress={()=>this.addMeditation()}
          title={title}
          color={color}
        />
      </View>
    )
  }

  addMeditation() {
    pi.POST('meditate', (state) => {
      this.props.onPress(state)
    })
  }
}
