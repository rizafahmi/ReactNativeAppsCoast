import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Button, View } from 'react-native'
import Video from 'react-native-video'

import CLIENT_ID from './secret'

export default class RNAppsCoast extends Component {
  constructor (props) {
    super(props)

    this.state = {
      paused: false
    }
  }
  onProgress ({ currentTime }) {
    console.log(currentTime)
  }
  onEnd () {
    console.log('end')
  }
  togglePlay () {
    this.setState({
      paused: !this.state.paused
    })
  }
  render () {
    let title = this.state.paused ? 'Pause' : 'Play'
    return (
      <View style={styles.container}>
        <Button onPress={() => this.togglePlay()} title={title} />
        <Video
          source={{
            uri: `https://api.soundcloud.com/tracks/316568736/stream?client_id=${CLIENT_ID}`
          }}
          ref='audio'
          volume={1.0}
          muted={false}
          paused={this.state.paused}
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
