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
    let buttonColor = this.props.pressed ? Colors.deactivated : Colors.button
    let bgColor = this.props.pressed ? Colors.bg : Colors.warningBackground
    let fgColor = this.props.pressed ? Colors.text : Colors.warningText

    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Button
          onPress={()=>this.addMeditation()}
          title="Meditate"
          color={buttonColor}
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
