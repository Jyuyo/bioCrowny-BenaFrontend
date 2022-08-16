import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Search from '../components/Search';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../components/StatusBar';
import colors from '../styles/colors';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Whishlist() {
  const [wishlist, setWishlist] = useState(null);
  const response = AsyncStorage.getItem("wishlist");
  console.log(response);
  return (
    <>
      <StatusBar backgorundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
        <ScrollView>
          <Text></Text>
        </ScrollView>
    </> 
  )
}