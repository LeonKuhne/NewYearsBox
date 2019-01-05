import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const GOAL_HOURS = 500

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonContainer: {
    flex: 1,
    alignSelf: 'stretch',
    textAlign: 'center',
    flexDirection: 'row',
    height: 100
  }
})

export default class MusicView extends React.Component {
  
  render() {
    let onCourse = this.props.diff >= 0
    let ratioStr = `${this.props.hours}/${GOAL_HOURS}`

    let diffStr
    let bgColor
    if(onCourse) {
      diffStr = '+' + this.props.diff
      bgColor = Colors.bg
    } else {
      diffStr = '' + this.props.diff
      bgColor = Colors.warningBackground
    }

    let title = `Music ${ratioStr} ${diffStr}`

    return(
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <Text>{title}</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={()=>this.addMusic(15,'min')}
            title="15 Min"
            color={Colors.button}
          />
          <Button
            onPress={()=>this.addMusic(30,'min')}
            title="30 Min"
            color={Colors.button}
          />
          <Button
            onPress={()=>this.addMusic(1,'hrs')}
            title="1 Hour"
            color={Colors.button}
          />
          <Button
            onPress={()=>this.addMusic(2,'hrs')}
            title="2 Hours"
            color={Colors.button}
          />
        </View>
      </View>
    )
  }

  addMusic(amount, unit) {
    pi.POST('music', (state) => {
      this.props.onPress(state)
    }, [amount, unit])
  }
}
