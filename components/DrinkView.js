import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import Colors from '../constants/Colors'
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class DrinkView extends React.Component {
  
  render() {
    return(
      <View style={styles.container}>
        <Text>{this.props.title}</Text>
        <Button onPress={()=>this.drink()} title="Drink" color={Colors.button} />
      </View>
    )
  }

  drink() {
    pi.POST('drink', (state) => {
      this.props.onPress(state)
    })
  }
}
