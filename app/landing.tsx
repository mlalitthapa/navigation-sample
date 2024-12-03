import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const LandingScreen = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text>This is landing screen</Text>
    </View>
  )
}

export default LandingScreen