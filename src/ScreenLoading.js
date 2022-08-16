import { StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export default function ScreenLoading(props) {
    const {text, size, color} = props;
  return (
    <SafeAreaView>
        <ActivityIndicator size={size} color={color} style={style.loading} />
      <Text style={style.title} >{text}</Text>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    loading: {marginBottom: 10},
    title: {
        fontSize: 18
    } 
});

ScreenLoading.defaultProps = {
    text: "Cargando...",
    color: "#000"
}