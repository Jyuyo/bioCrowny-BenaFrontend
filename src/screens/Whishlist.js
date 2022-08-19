import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../components/StatusBar';
import colors from '../styles/colors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from 'react-native-paper';
import SerumCreceAmbar from '../../assets/img/ACEITEMARIGREEN.png';
import miel from '../../assets/img/JALEAEXFOLIANTEDEMIEL.png';
import CremaCaballero from '../../assets/img/CREMAANTIAGECABALLERO20.png';
import { useNavigation } from '@react-navigation/native';



export default function Whishlist() {
  const [wishlist, setWishlist] = useState([]);
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  
  useEffect(() => {
    getAllData();
}, [true])
  
const getAllData = async () =>{
   const value = await AsyncStorage.getItem("value");
   const mapValue = JSON.parse(value);
  setWishlist(mapValue);
  console.log("wishlist",wishlist);
  // AsyncStorage.getAllKeys().then((keys) => {
  //   return AsyncStorage.multiGet(keys)
  //     .then((result) => {
  //       console.log(result);
  //     }).catch((e) =>{
  //       console.log(e);
  //     });
  // });
}
// const goToProduct0 = () => {
//   navigation.push("singleProduct", {idProduct: 0})
// }

// const goToProduct1 = () => {
//   navigation.push("singleProduct", {idProduct: 1})
// }

const Ocultar = () => {
  setShow(false);
  // navigation.push("singleProduct", {idProduct: 2})


}

const Ocultar1 = () => {
  setShow1(false);
  // navigation.push("singleProduct", {idProduct: 2})


}
const Ocultar2 = () => {
  setShow2(false);
  // navigation.push("singleProduct", {idProduct: 2})


}

  return (
    <>
      <StatusBar backgorundColor={colors.bgDark} barStyle="light-content" />
      <Search/>
        <ScrollView contentContainerStyle={styles.container}>

          <Button mode="contained" contentStyle={styles.btnAddFavoritesContent} labelStyle={styles.btnLabel} onPress={getAllData} >Recargar lista de favoritos</Button>
          <Text style={styles.title} >Lista de Favoritos</Text>
          {wishlist.length != 0  ? 
          <View>
            {show ? 
            <View style={styles.product}>
            
            <View style={styles.containerImage}>
              <Image style={styles.image} source={miel} /> 
            </View>
            <View>
              <View>
                <Text style={styles.name}>JALEA MIEL (250 gr)</Text>
              </View>
              <View>
                <Text style={styles.prices}>Price Mayoreo $ 84</Text>
                <Text style={styles.prices}>Price Menudeo $ 126</Text>
              </View>
            </View>
            <View>
              <Button style={styles.btnVer} onPress={Ocultar} >X wishlist</Button>
            </View>
            </View>
            
            : null}
            
            {show1 ?
            <View style={styles.product}>
            
            <View style={styles.containerImage}>
              <Image style={styles.image} source={CremaCaballero} /> 
            </View>
            <View>
              <View>
                <Text style={styles.name}>CREMA CABALLERO 50+ (30 gr)</Text>
              </View>
              <View>
                <Text style={styles.prices}>Price Mayoreo $ 86.62</Text>
                <Text style={styles.prices}>Price Menudeo $ 129.93</Text>
              </View>
            </View>
            <View>
              <Button style={styles.btnVer} onPress={Ocultar1} >X wishlist</Button>
            </View>
            </View>
            : null}
            
            {show2 ?
            <View style={styles.product}>
            
            <View style={styles.containerImage}>
              <Image style={styles.image} source={SerumCreceAmbar} /> 
            </View>
            <View>
              <View>
                <Text style={styles.name}>ACEITE MARIGREEN (30 ml)</Text>
              </View>
              <View>
                <Text style={styles.prices}>Price Mayoreo $ 82.29</Text>
                <Text style={styles.prices}>Price Menudeo $ 123.44</Text>
              </View>
            </View>
            <View>
              <Button style={styles.btnVer} onPress={Ocultar2} >X wishlist</Button>
            </View>
            </View>
            : null}
          </View>
          
          
        
          
          
          // wishlist.map((val, index) => {
          //   return (
          //     <div key={index}>
          //       { val }
          //     </div>
          //   );
          // })
          : <Text>No hay nada agregado a la lista de deseos</Text>}
          
        </ScrollView>
    </> 
  )
}

const styles = StyleSheet.create({
  btnAddFavoritesContent: {
      backgroundColor: colors.primary,
      paddingVertical: 5,
  },
  btnLabel: {
      fontSize: 15,
  },
  btn: {
      marginTop: 20,
      marginBottom: 20,
  },
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 5,
    marginTop: 10
  },
  product: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 15,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#dadde1",
  },
 
  containerImage: {
    width: "20%",
    height: 200,
    backgroundColor: colors.primary,
    padding: 5,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
    left: -65
  },
  info: {
    padding: 10,
    width: "60%",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 10,
    fontWeight: 'bold'
  },
  prices: {
    fontSize: 16,
    marginTop: 5,
    // alignItems: "flex-end",
    textAlign: 'center'
  },
  currentPrice: {
    fontSize: 22,
  },
  oldPrice: {
    marginLeft: 7,
    fontSize: 14,
    color: "#747474",
    textDecorationLine: "line-through",
  },
  btnsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    width: "100%",
  },
  btnDelete: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    margin: 0,
    width: 60,
    height: 32,
  },
  loading: {
    backgroundColor: "#000",
    opacity: 0.4,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 5,
    justifyContent: "center",
  },
  
});