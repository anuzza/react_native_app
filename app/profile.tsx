import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const profile = () => {
  return (
    <View style = {styles.container}>
      <Text>profile</Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})