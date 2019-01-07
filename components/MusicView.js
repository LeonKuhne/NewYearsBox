import React from 'react'
import { StyleSheet, Dimensions, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const GOAL_HOURS = 500
const buttons = [
  { text: '15 min', amount: 15, unit: 'min'},
  { text: '30 min', amount: 30, unit: 'min'},
  { text: '1 hour', amount: 1, unit: 'hrs'},
  { text: '2 hours', amount: 2, unit: 'hrs'}
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

    // create the buttons
    let buttonElems = []
    for(i=0; i<buttons.length; i++) {
      let button = buttons[i]
      buttonElems.push(
        <Button
          title={button.text}
          onPress={()=>{this.addMusic(button)}}
          color={bgColor}
        />
      )
    }

    return(
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Text style={{color: fgColor}}>{this.getTitle()}</Text>
        <View style={styles.buttonContainer}>
          {buttonElems}
        </View>
      </View>
    )
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
