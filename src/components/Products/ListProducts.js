import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Aceite from '../../../assets/img/ACEITEMARIGREEN.png';
import CremaCaballero from '../../../assets/img/CREMAANTIAGECABALLERO20.png';
import CremaDama from '../../../assets/img/CREMAANTIAGEDAMA20.png';
import CremaDepilatoria from '../../../assets/img/CREMADEPILATORIA2.png';
import CremaExpoliante from '../../../assets/img/CREMAEXFOLIANTEACLARANTEARROZ.png';
import FijadorMaquillaje from '../../../assets/img/FIJADORDEMAQUILLAJE.png';
import JabonAlgas from '../../../assets/img/JABONALGASMARINASYROMERO.png';
import JabonConcha from '../../../assets/img/JABONCONCHANACAR3.png';
import JaleaExfoliante from '../../../assets/img/JALEAEXFOLIANTEDEMIEL.png';
import LocionKeratina from '../../../assets/img/LOCIONKERATINAPREMIUM.png';
import SerumAcido from '../../../assets/img/SERUMACIDOHIALURONICO.png';
import SerumColageno from '../../../assets/img/SERUMCOLAGENO.png';
import SerumCreceAmbar from '../../../assets/img/SERUMCRECEPESTANASAMBAR.png';
import SerumCreceNegro from '../../../assets/img/SERUMCRECEPESTANASNEGRO.png';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function ListProducts() {
    const navigation = useNavigation();

    const goToProduct0 = () => {
        navigation.push("singleProduct", {idProduct: 0})
    }

    const goToProduct1 = () => {
        navigation.push("singleProduct", {idProduct: 1})
    }
    const goToProduct2 = () => {
        navigation.push("singleProduct", {idProduct: 2})
    }
    const goToProduct3 = () => {
        navigation.push("singleProduct", {idProduct: 3})
    }
    const goToProduct4 = () => {
        navigation.push("singleProduct", {idProduct: 4})
    }
    const goToProduct5 = () => {
        navigation.push("singleProduct", {idProduct: 5})
    }
    const goToProduct6 = () => {
        navigation.push("singleProduct", {idProduct: 6})
    }
    const goToProduct7 = () => {
        navigation.push("singleProduct", {idProduct: 7})
    }
    const goToProduct8 = () => {
        navigation.push("singleProduct", {idProduct: 8})
    }
    const goToProduct9 = () => {
        navigation.push("singleProduct", {idProduct: 9})
    }
    const goToProduct10 = () => {
        navigation.push("singleProduct", {idProduct: 10});
    }
    const goToProduct11 = () => {
        navigation.push("singleProduct", {idProduct: 11});
    }
    const goToProduct12 = () => {
        navigation.push("singleProduct", {idProduct: 12});
    }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={goToProduct3} >
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={JabonConcha}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Concha Nacar (100 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct4}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={SerumCreceAmbar}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Delineador Crece Pestañas Ambar (10 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct5}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={SerumCreceNegro}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Delineador Crece Pestañas Negro (10 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct6}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={CremaExpoliante}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Crema Exfoliadora Aclarante Arroz (250 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      
      <Text style={styles.title}>Lociones, Aceites y Fijadores</Text>


      <TouchableWithoutFeedback onPress={goToProduct12}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={LocionKeratina}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Locion Keratina Premium (125 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      
      <TouchableWithoutFeedback onPress={goToProduct8}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={SerumAcido}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Serum Acido Hialuronico (30 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct9}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={SerumColageno}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Serum Colageno Puro (30 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct10}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={Aceite}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Aceite Marigreen (30 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={goToProduct11}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={FijadorMaquillaje}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Fijador De Maquillaje (125 ml)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>

      <Text style={styles.title}>Productos del cuidado de la piel</Text>

      <TouchableWithoutFeedback onPress={goToProduct7}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={JaleaExfoliante}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Jalea miel (250 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>
      
      <TouchableWithoutFeedback onPress={goToProduct0}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={CremaDama}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Crema Dama 20+ (30 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={goToProduct1}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={CremaCaballero}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Crema Caballero 50+ (30 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={goToProduct2}>
        <View style={styles.containerProduct}>
            <View style={styles.product}>
                <Image style={styles.image} source={JabonAlgas}/>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">Algas Marinas (100 gr)</Text>
            </View>
        </View>
      </TouchableWithoutFeedback>


    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        margin: -3,
    },
    containerProduct: {
        width: "50%",
        padding: 3,
    },
    product: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        width: 180,
    },
    image: {
        height: 150,
        width: 180
    },
    name: {
        marginTop: 15,
        fontSize: 14
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 30,
    },
    
});