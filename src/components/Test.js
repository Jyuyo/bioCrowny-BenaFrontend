import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Test() {
  return (
    <View>
      <Text>Estoy en Test</Text>
      <Button onPress={() => console.log("Hola")} mode="contained">Click Me</Button>
    </View>
  )
}