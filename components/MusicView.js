import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

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
    maxHeight: 200
  }
})

export default class MusicView extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={()=>this.addMusic(15,'min')} title="15 Min" color={Colors.button} />
          <Button onPress={()=>this.addMusic(30,'min')} title="30 Min" color={Colors.button} />
          <Button onPress={()=>this.addMusic(1,'hrs')} title="1 Hour" color={Colors.button} />
          <Button onPress={()=>this.addMusic(2,'hrs')} title="2 Hours" color={Colors.button} />
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
