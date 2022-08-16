import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function UserInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cuenta de:</Text>
      <Text style={styles.titleName}>Kevin Cobian</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
    },
    titleName: {
        fontSize: 20,
        fontWeight: "bold"
    }
})