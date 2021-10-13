import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import DemoClass from './DemoClass'
import DemoFunctional from './DemoFunctional'

const Spacer = () => <View style={styles.spacer}></View>

class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
        <Spacer/>
        <DemoClass/>
        <Spacer/>
        <DemoFunctional/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacer: {
    marginVertical: 30
  }
})

export default App
