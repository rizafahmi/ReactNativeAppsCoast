import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import Video from 'react-native-video'

export default class RNAppsCoast extends Component {
  onProgress ({ currentTime }) {
    console.log(currentTime)
  }
  onEnd () {
    console.log('end')
  }
  render () {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri: 'https://api.soundcloud.com/tracks/316568736/stream?client_id=0f2c62e4540699fd850f4beb2f9583d6'
          }}
          ref='audio'
          volume={1.0}
          muted={false}
          paused={false}
          playInBackground
          playWhenInactive
          onProgress={this.onProgress}
          onEnd={this.onEnd}
          resizeMode='cover'
          repeat={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('RNAppsCoast', () => RNAppsCoast)
