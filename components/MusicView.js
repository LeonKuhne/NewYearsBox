import React from 'react'
import pi from '../api/pi'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class MusicView extends React.Component {
  
  render() {
    return(
      <View style{styles.container}>
        <Text>{this.props.title}</Text>
        <Button onPress={()=>this.addMusic(15,'min')} title="15 Min" color={Colors.button} />
      </View>
    )
  }

  addMusic(amount, unit) {
    pi.POST('music', (state) => {
      this.props.onPress(state)
    })
  }
}
