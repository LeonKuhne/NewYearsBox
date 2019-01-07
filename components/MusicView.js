import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const GOAL_HOURS = 500
const buttons = [
  '15 min', 
  '30 min',
  '1 hour',
  '2 hours'
]
const buttonValues = [
  {amount: 15, unit: 'min'},
  {amount: 30, unit: 'min'},
  {amount: 1, unit: 'hrs'},
  {amount: 2, unit: 'hrs'}
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'row',
  }
})

export default class MusicView extends React.Component {
 
  render() {
    let onCourse = this.props.diff >= 0
    let bgColor = onCourse ? Colors.bg : Colors.warningBackground
    let fgColor = onCourse ? Colors.text : Colors.warningText

    return(
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Text style={{color: fgColor}}>{this.getTitle()}</Text>
        <View style={styles.buttonContainer}>
          <ButtonGroup
            onPress={this.triggerButton}
            buttons={buttons}
            buttonStyle={{backgroundColor: bgColor}}
          />
        </View>
      </View>
    )
  }

  triggerButton(index) {
    addMusic(buttonValues[index])
  }

  addMusic(timeObj) {
    pi.POST('music', (state) => {
      this.props.onPress(state)
    }, [timeObj.amount, timeObj.unit])
  }

  getTitle() {
    let ratioStr = `${this.props.hours}/${GOAL_HOURS}` 
    let diffPrefix = this.props.diff < 0 ? '' : '+'
    let diffStr = `${diffPrefix}${this.props.diff}`

    return `Music ${ratioStr} ${diffStr}`
  }
}
