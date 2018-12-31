import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { WebBrowser } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center'
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7'
  },
  welcomeText: {
    fontSize: 21,
    fontWeight: '700'
  }
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  return (
        <Text style={styles.developmentModeText}>
              Todo List
              - Music
              - Meditate
        </Text>
      )
  }

  handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
          </View>

          <View style={styles.getStartedContainer}>
            {this.renderDevelopmentModeWarning()}
          </View>
        </ScrollView>
      </View>
    )
  }
}
