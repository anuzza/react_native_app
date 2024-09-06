import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const _layout = () => {
  return (
    <View style = {styles.container}>
      <Text>Aora!</Text>
      <StatusBar style = "auto"></StatusBar>
      <Link href="/profile" style={{color: 'blue'}}>Go to profile</Link>
    </View>
  )
}

export default _layout

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }

})