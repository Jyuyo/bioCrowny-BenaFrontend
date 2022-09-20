import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Search from '../components/Search';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBar from '../components/StatusBar';
import colors from '../styles/colors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { WishlistContext } from '../context/WishlistContext';
import { images } from '../../assets/img/images';
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

  const imga = {
  'CremaDama': {img: CremaDama},
  'CremaCaballero': {img: CremaCaballero},
  'JabonAlgas': {img: JabonAlgas},
  'JabonConcha': {img: JabonConcha},
  'SerumCreceAmbar': {img: SerumCreceAmbar},
  'SerumCreceNegro': {img: SerumCreceNegro},
  'CremaExpoliante': {img: CremaExpoliante},
  'JaleaExfoliante': {img: JaleaExfoliante},
  'SerumAcido': {img: SerumAcido},
  'SerumColageno': {img: SerumColageno},
  'Aceite': {img: Aceite},
  'FijadorMaquillaje': {img: FijadorMaquillaje},
  'LocionKeratina': {img: LocionKeratina},
  'CremaDepilatoria': {img: CremaDepilatoria},
  }

export default function Whishlist() {
  const { wishlist, setWishlist } = useContext(WishlistContext)
  const navigation = useNavigation();
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  useEffect(() => {
    getAllData();
  }, [true])
  console.log("wishlist", wishlist);

  const getAllData = async () => {
    const value = await AsyncStorage.getItem("value");
    const mapValue = JSON.parse(value);
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

  const Ocultar = (index) => {
    var array = [...wishlist]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setWishlist(array);
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

        <Button mode="contained" contentStyle={styles.btnAddFavoritesContent} labelStyle={styles.btnLabel} onPress={getAllData} >Recargar lista de favoritos</Button>
        <Text style={styles.title} >Lista de Favoritos</Text>
        {wishlist.length != 0 ?
          <View>
            {wishlist.map((product, index) => {

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
                  <Button style={styles.btnVer} onPress={() => Ocultar(index)} >X wishlist</Button>
                </View>
              </View>

            })

            }


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