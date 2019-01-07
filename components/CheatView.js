import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const MAX_DAYS = 5
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class CheatView extends React.Component {
  
  render() {
    let color = this.props.pressed ? Colors.deactivated : Colors.button
    let title = `Cheat ${this.props.days}/${MAX_DAYS}`

    return(
      <View style={styles.container}>
        <Button
          onPress={()=>this.addCheatDay()}
          title={title}
          color={color}
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
