import { View, Text, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { WishlistContext } from '../../context/WishlistContext';

export default function Buy(props) {
    const {singleProduct, quantity} = props;
    const {shoppingCart, setShoppingCart} = useContext(WishlistContext)

    const addProductCart = () => {
        console.log("Producto añadido al carrito");
        console.log(singleProduct);
        setShoppingCart(shoppingCart => [singleProduct, ...shoppingCart])
        console.log(shoppingCart);
        console.log("Cantidad", quantity);
    }

  return (
  <View style={styles.btn}>
    <Button mode="contained" contentStyle={styles.btnBuyContent} labelStyle={styles.labelStyle} onPress={addProductCart} >Añadir al Carrito</Button>
  </View>
  );
}

const styles = StyleSheet.create({
    btnBuyContent: {
        backgroundColor: "#008fe9",
        paddingVertical: 5,
    },
    labelStyle: {
        fontSize: 15,
    },
    btn: {
        marginTop: 20,
        marginBottom: 5
    }
})