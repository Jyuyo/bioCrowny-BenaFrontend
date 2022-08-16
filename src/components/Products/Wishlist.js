import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Button } from 'react-native-paper';
import { setWishList, } from '../../../src/components/Auth/Token';

export default function Wishlist(props) {

    const {singleProduct} = props;

    useEffect(() => {
      
    }, [singleProduct])
    

    const addWishList = () => {
        console.log("añadido a lista de deseos");
        console.log(singleProduct);
        setWishList(singleProduct);
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