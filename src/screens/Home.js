import { View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { ScrollView } from 'react-native-gesture-handler'
import StatusBar from '../components/StatusBar'
import colors from '../styles/colors'
import NewProducts from '../components/Products/NewProducts'

export default function Home() {
  return (
    <>
      <StatusBar backgorundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
        <ScrollView>
          <NewProducts/>
        </ScrollView>
    </>
  )
}