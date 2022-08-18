import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListProducts from './ListProducts'

export default function NewProducts() {
//   const [products, setProducts] = useState(null);

//   useEffect(() => {
//     (async () => {
//         const resp = await getLastProducts(12);
//         setProducts(resp);
//     })();
//   }, []); 
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nuevos Productos</Text>
      <ListProducts/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    }
})