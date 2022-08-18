import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper';
import { setWishList, } from '../../../src/components/Auth/Token';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Wishlist(props) {

    const {singleProduct} = props;
    let array = [];

    useEffect(() => {
        saveArticle("value",JSON.stringify(array))
    }, [singleProduct])
    
    const saveArticle = async (key, value) =>{
        try {
          await AsyncStorage.setItem(key, value);
        } catch (e) {
          console.log(e);
        }
      };

    const addWishList = async () => {
        console.log("añadido a lista de deseos");
        console.log(singleProduct);
        // await AsyncStorage.setItem('value', 'hollalall');
        // saveArticle("value",JSON.stringify(singleProduct));
        array.push(singleProduct);
        console.log("push array",array);
        saveArticle("value",JSON.stringify(array))
    }
  return (
  <View style={styles.btn}>
    <Button mode="contained" contentStyle={styles.btnAddFavoritesContent} labelStyle={styles.btnLabel} onPress={addWishList} >Añadir a Favoritos</Button>
   </View>
  );
}

const styles = StyleSheet.create({
    btnAddFavoritesContent: {
        backgroundColor: "#057b00",
        paddingVertical: 5,
    },
    btnLabel: {
        fontSize: 15,
    },
    btn: {
        marginTop: 20,
        marginBottom: 20
    }
});