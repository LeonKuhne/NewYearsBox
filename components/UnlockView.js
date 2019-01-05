import React from 'react'
import { StyleSheet, View, Text, Switch } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class UnlockView extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <Text>Unlock</Text>
        <Switch
          trackColor={{true: Colors.tintColor}}
          onValueChange={()=>this.toggleBox()}
          value={this.state.isOpen}
        />
      </View>
    )
  }

  toggleBox() {
    pi.POST('toggle', (state) => {
      this.props.onPress(state)
    })
  }
}
