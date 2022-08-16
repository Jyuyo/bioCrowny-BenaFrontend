import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';

export default function Buy(props) {
    const {singleProduct, quantity} = props;

    const addProductCart = () => {
        console.log("Producto añadido al carrito");
        console.log(singleProduct);
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