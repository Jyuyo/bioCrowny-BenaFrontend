import { View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { ScrollView } from 'react-native-gesture-handler'
import StatusBar from '../components/StatusBar'
import colors from '../styles/colors'

export default function Market() {
  return (
    <>
      <StatusBar backgorundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
        <ScrollView>
          <Text>Market</Text>
        </ScrollView>
    </>
  )
}