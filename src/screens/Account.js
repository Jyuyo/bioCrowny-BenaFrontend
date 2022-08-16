import { View, Text } from 'react-native'
import React from 'react'
import Search from '../components/Search'
import { ScrollView } from 'react-native-gesture-handler'
import StatusBar from '../components/StatusBar'
import colors from '../styles/colors'
import UserInfo from '../UserInfo'
import Menu from '../Menu'

export default function Account() {
  return (
    <>
      <StatusBar backgorundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
        <ScrollView>
          <UserInfo/>
          <Menu/>
        </ScrollView>
    </>
  )
}