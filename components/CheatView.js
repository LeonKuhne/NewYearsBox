import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class CheatView extends React.Component {
  
  render() {
    let buttonColor = this.props.pressed ? Colors.deactivated : Colors.button

    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Button
          onPress={()=>this.addCheatDay()}
          title="Cheat"
          color={buttonColor}
        />
      </View>
    )
  }

  addCheatDay() {
    pi.POST('cheat', (state) => {
      this.props.onPress(state)
    })
  }
}
