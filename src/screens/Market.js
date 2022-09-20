import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../components/StatusBar';
import colors from '../styles/colors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import CremaDama from '../../assets/img/CREMAANTIAGEDAMA20.png';
import CremaCaballero from '../../assets/img/CREMAANTIAGECABALLERO20.png';
import JabonAlgas from '../../assets/img/JABONALGASMARINASYROMERO.png';
import JabonConcha from '../../assets/img/JABONCONCHANACAR3.png';
import SerumCreceAmbar from '../../assets/img/SERUMCRECEPESTANASAMBAR.png';
import SerumCreceNegro from '../../assets/img/SERUMCRECEPESTANASNEGRO.png';
import CremaExpoliante from '../../assets/img/CREMAEXFOLIANTEACLARANTEARROZ.png';
import JaleaExfoliante from '../../assets/img/JALEAEXFOLIANTEDEMIEL.png';
import SerumAcido from '../../assets/img/SERUMACIDOHIALURONICO.png';
import SerumColageno from '../../assets/img/SERUMCOLAGENO.png';
import Aceite from '../../assets/img/ACEITEMARIGREEN.png';
import FijadorMaquillaje from '../../assets/img/FIJADORDEMAQUILLAJE.png';
import LocionKeratina from '../../assets/img/LOCIONKERATINAPREMIUM.png';
import CremaDepilatoria from '../../assets/img/CREMADEPILATORIA2.png';
import { WishlistContext } from '../context/WishlistContext';

const imga = {
  'CremaDama': { img: CremaDama },
  'CremaCaballero': { img: CremaCaballero },
  'JabonAlgas': { img: JabonAlgas },
  'JabonConcha': { img: JabonConcha },
  'SerumCreceAmbar': { img: SerumCreceAmbar },
  'SerumCreceNegro': { img: SerumCreceNegro },
  'CremaExpoliante': { img: CremaExpoliante },
  'JaleaExfoliante': { img: JaleaExfoliante },
  'SerumAcido': { img: SerumAcido },
  'SerumColageno': { img: SerumColageno },
  'Aceite': { img: Aceite },
  'FijadorMaquillaje': { img: FijadorMaquillaje },
  'LocionKeratina': { img: LocionKeratina },
  'CremaDepilatoria': { img: CremaDepilatoria },
}


export default function Market() {
  const [wishlist, setWishlist] = useState([]);
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const { shoppingCart, setShoppingCart } = useContext(WishlistContext)

  useEffect(() => {
    getAllData();
  }, [true])

  const getAllData = async () => {
    const value = await AsyncStorage.getItem("value");
    const mapValue = JSON.parse(value);
    setWishlist(mapValue);
    console.log("shppingCart", shoppingCart);
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
    var array = [...shoppingCart]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setShoppingCart(array);
    }
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
      <Search />
      <ScrollView contentContainerStyle={styles.container}>

        <Button mode="contained" contentStyle={styles.btnAddFavoritesContent} labelStyle={styles.btnLabel} onPress={getAllData} >Checkout</Button>
        <Text style={styles.title} >Lista del Carrito </Text>
        {shoppingCart.length != 0 ?
          <View>
            {shoppingCart.map((product, index) => {

              const img = product["IMAGEURL"]
              console.log(img);

              return <View style={styles.product} key={index}>

                <View style={styles.containerImage}>
                  <Image style={styles.image} source={imga[img].img} />
                </View>
                <View>
                  <View>
                    <Text style={styles.name}>{product['NOMBRE']}</Text>
                  </View>
                  <View>
                    <Text style={styles.prices}>Price Mayoreo $ {product['MAYOREO']}</Text>
                    <Text style={styles.prices}>Price Menudeo $ {product['MENUDEO']}</Text>
                  </View>
                </View>
                <View>
                  <Button style={styles.btnVer} color="#f18485" onPress={Ocultar} >X Carrito</Button>
                </View>
              </View>

            })

            }

          </View>

          : <Text>No hay nada agregado al carrito de compras</Text>}

      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  btnAddFavoritesContent: {
    backgroundColor: colors.secondary,
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
    backgroundColor: colors.secondary,
    padding: 5,
  },
  image: {
    height: "100%",
    resizeMode: "contain",
    left: -65,
    width: 600,

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
    backgroundColor: colors.secondary,
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