import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import colors from './styles/colors';
import Search from './components/Search';
import ScreenLoading from './ScreenLoading';
import StatusBarCustom from './components/StatusBar';
import CarouselImages from './components/Products/CarouselImages';
import Aceite from '../assets/img/ACEITEMARIGREEN.png';
import CremaCaballero from '../assets/img/CREMAANTIAGECABALLERO20.png';
import CremaDama from '../assets/img/CREMAANTIAGEDAMA20.png';
import CremaDepilatoria from '../assets/img/CREMADEPILATORIA2.png';
import CremaExpoliante from '../assets/img/CREMAEXFOLIANTEACLARANTEARROZ.png';
import FijadorMaquillaje from '../assets/img/FIJADORDEMAQUILLAJE.png';
import JabonAlgas from '../assets/img/JABONALGASMARINASYROMERO.png';
import JabonConcha from '../assets/img/JABONCONCHANACAR3.png';
import JaleaExfoliante from '../assets/img/JALEAEXFOLIANTEDEMIEL.png';
import LocionKeratina from '../assets/img/LOCIONKERATINAPREMIUM.png';
import SerumAcido from '../assets/img/SERUMACIDOHIALURONICO.png';
import SerumColageno from '../assets/img/SERUMCOLAGENO.png';
import SerumCreceAmbar from '../assets/img/SERUMCRECEPESTANASAMBAR.png';
import SerumCreceNegro from '../assets/img/SERUMCRECEPESTANASNEGRO.png';
import Price from './components/Products/Price';
import Quantity from './components/Products/Quantity';
import Buy from './components/Products/Buy';
import Wishlist from './components/Products/Wishlist';

export default function SingleProduct(props) {
    const [quantity, setQuantity] = useState(1);
    const {route} = props;
    const {params} = route;

    const [singleProduct, setSingleProduct] = useState(null);
    

    console.log(quantity);

    useEffect(() => {
      ( async () => {
            const response = await getProductApi(params.idProduct);
            console.log(response);
            setSingleProduct(response);
      }) ()
    }, [params])
    
  return (
    <>
        <StatusBarCustom backgroundColor={colors.bgBlack} barStyle="light-content" />
        <Search/>
        {!singleProduct ? (
            <ScreenLoading text="Cargando Producto" size="large" />
        ) : (
            <ScrollView style={styles.container} >
                <Text style={styles.title} >{singleProduct.NOMBRE}</Text>
                {/* <Image style={styles.carousel} source={{uri: `../../../assets/img/${singleProduct.IMAGEURL}`}}/>; */}
                {/* <Image style={styles.carousel} source={require("../assets/img/CREMAANTIAGEDAMA20.png")}/>; */}
                {singleProduct.NOMBRE == "CREMA DAMA 20+ (30 gr)" ? <Image source={CremaDama} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "CREMA CABALLERO 50+ (30 gr)" ? <Image source={CremaCaballero} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "ALGAS MARINAS (100 gr)" ? <Image source={JabonAlgas} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "CONCHA NACAR (100 gr)" ? <Image source={JabonConcha} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "DELINEADOR CRECE PESTAÑAS AMBAR (10 ml)" ? <Image source={SerumCreceAmbar} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "DELINEADOR CRECE PESTAÑAS NEGRO (10 ml)" ? <Image source={SerumCreceNegro} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "CREMA EXFOLIADOREA ACLARANTE ARROZ (250 gr)" ? <Image source={CremaExpoliante} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "JALEA MIEL (250 gr)" ? <Image source={JaleaExfoliante} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "SERUM ACIDO HIALURONICO (30 ml)" ? <Image source={SerumAcido} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "SERUM COLÁGENO PURO (30 ml)" ? <Image source={SerumColageno} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "ACEITE MARIGREEN (30 ml)" ? <Image source={Aceite} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "FIJADOR DE MAQUILLAJE (125 ml)" ? <Image source={FijadorMaquillaje} style={{ width: 400, height: 400 }}/> : null}
                {singleProduct.NOMBRE == "LOCION KERATINA PREMIUM (125 ml)" ? <Image source={LocionKeratina} style={{ width: 400, height: 400 }}/> : null}
                <Text style={styles.titlePrice} >Precio: ${singleProduct.MENUDEO} por menudeo</Text>
                <Text style={styles.titlePrice} >Precio: ${singleProduct.MAYOREO} por mayoreo</Text>
                <View style={styles.containerView}>
                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                    <Buy singleProduct={singleProduct} quantity={quantity}/>   
                    <Wishlist singleProduct={singleProduct}/>   
                    <Text >Descripción: {singleProduct.DESCRIPCION} por mayoreo</Text>  
                    
                </View>
                
                {/* <Price price={singleProduct.MENUDEO} /> */}
            </ScrollView>
        )}
    </>
    
  )
}

function getProductApi(id) {
    let objProduct = {};
    switch (id) {
        case 0:
            objProduct = {"NOMBRE": "CREMA DAMA 20+ (30 gr)",
            "DESCRIPCION": "Enriquecida con vitamina A, D, E y F. Hidrata, Suaviza y ayuda a mantener la elasticidad y flexibilidad de la piel, previene la deshidratación y el envejecimiento prematuro de la piel.",
            "CAJA": 24,
            "REPRESENTANTE": 48.17,
            "MAYOREO": 60.22,
            "MENUDEO": 90.33,
            "CATEGORIA": "CREMAS EDAD",
            "IMAGEURL": "CremaDama"}
            
        break;

        case 1:
            objProduct = {"NOMBRE": "CREMA CABALLERO 50+ (30 gr)",
            "DESCRIPCION": "Hidrata y ayuda a combatir los principales signos de edad; piel seca y opaca, falta de luminosidad, manchas, perdida de elasticidad y firmeza, aumento del número y profundidad de las líneas de expresión.",
            "CAJA": 24,
            "REPRESENTANTE": 69.29,
            "MAYOREO": 86.62,
            "MENUDEO": 129.93,
            "CATEGORIA": "CREMAS EDAD",
            "IMAGEURL": "CremaCaballero"}
            
        break;

        case 2:
            objProduct = {"NOMBRE": "ALGAS MARINAS (100 gr)",
            "DESCRIPCION": "Ayuda a tonificar los tejidos y contribuye a eliminar la celulitis o piel de naranja. Aporta propiedades anti-inflamatorias y emolientes, estando especialmente indicado para tratar los problemas circulatorios en piernas cansadas.",
            "CAJA": 60,
            "REPRESENTANTE": 11,
            "MAYOREO": 11,
            "MENUDEO": 16.5,
            "CATEGORIA": "JABONES DE TOCADOR",
            "IMAGEURL": "JabonAlgas"}
            
        break;

        case 3:
            objProduct = {"NOMBRE": "CONCHA NACAR (100 gr)",
            "DESCRIPCION": "Logra balancear el tono real de la piel, además que combate el exceso de grasa, así que también colabora con la limpieza ideal de tu cutis.",
            "CAJA": 60,
            "REPRESENTANTE": 14.8,
            "MAYOREO": 14.8,
            "MENUDEO": 22.2,
            "CATEGORIA": "JABONES DE TOCADOR",
            "IMAGEURL": "JabonConcha"}
            
        break;

        case 4:
            objProduct = {"NOMBRE": "DELINEADOR CRECE PESTAÑAS AMBAR (10 ml)",
            "DESCRIPCION": "Estimula el crecimiento de pestañas. Esta fórmula transformará tus pestañas desde la raíz, dejándolas más largas, gruesas y abundantes. Ha sido examinado y es seguro para usarse en el área de la piel alrededor de ojos.",
            "CAJA": 50,
            "REPRESENTANTE": 46.74,
            "MAYOREO": 58.42,
            "MENUDEO": 89.64,
            "CATEGORIA": "CRECE PESTAÑAS",
            "IMAGEURL": "SerumCreceAmbar"}
            
        break;

        case 5:
            objProduct = {"NOMBRE": "DELINEADOR CRECE PESTAÑAS NEGRO (10 ml)",
            "DESCRIPCION": "Estimula el crecimiento de pestañas. Esta fórmula transformará tus pestañas desde la raíz, dejándolas más largas, gruesas y abundantes. Ha sido examinado y es seguro para usarse en el área de la piel alrededor de ojos.",
            "CAJA": 50,
            "REPRESENTANTE": 46.74,
            "MAYOREO": 58.42,
            "MENUDEO": 87.64,
            "CATEGORIA": "CRECE PESTAÑAS",
            "IMAGEURL": "SerumCreceNegro"}
            
        break;

        case 6:
            objProduct = {"NOMBRE": "CREMA EXFOLIADOREA ACLARANTE ARROZ (250 gr)",
            "DESCRIPCION": "Elimina las células muertas, logrando que la piel quede limpia y tonificada. Previene el envejecimiento, activa la circulación y favorece la oxigenación, estimula la liberación de toxinas a través de los poros de la piel, devuelve a la piel un aspecto más uniforme y suave, ayuda a evitar la formación de vellos enquistados por la depilación. Además, hará que tu color se vea más intenso y uniforme, sin manchas ni zonas oscuras.",
            "CAJA": 18,
            "REPRESENTANTE": 58.3,
            "MAYOREO": 72.87,
            "MENUDEO": 126,
            "CATEGORIA": "EXFOLIANTES FACIALES Y CORPORALES",
            "IMAGEURL": "CremaExpoliante"}
            
        break;

        case 7:
            objProduct = {"NOMBRE": "JALEA MIEL (250 gr)",
            "DESCRIPCION": "Remueve la suciedad y piel muerta, dando un aspecto más luminoso. Proporciona una piel limpia, suave e hidratada. Ayuda a disminuir acné y puntos negros.",
            "CAJA": 18,
            "REPRESENTANTE": 67.2,
            "MAYOREO": 84,
            "MENUDEO": 126,
            "CATEGORIA": "EXFOLIANTES FACIALES Y CORPORALES",
            "IMAGEURL": "JaleaExfoliante"}
            
        break;

        case 8:
            objProduct = {"NOMBRE": "SERUM ACIDO HIALURONICO (30 ml)",
            "DESCRIPCION": "Suero facial de rápida absorción, que hidrata, estimula la piel para que luzca más flexible, suave y radiante. Su textura es ligera y sin aceite.",
            "CAJA": 48,
            "REPRESENTANTE": 43.52,
            "MAYOREO": 54.41,
            "MENUDEO": 81.61,
            "CATEGORIA": "SERUM",
            "IMAGEURL": "SerumAcido"}
            
        break;

        case 9:
            objProduct = {"NOMBRE": "SERUM COLÁGENO PURO (30 ml)",
            "DESCRIPCION": "Ayuda a mejorar la apariencia de tu rostro, pues se encargan de rellenar las arrugas y líneas finas de la cara. Asimismo, ayuda a que retienen una buena cantidad de humedad y tu piel no se sienta acortada o seca.",
            "CAJA": 48,
            "REPRESENTANTE": 62.72,
            "MAYOREO": 78.41,
            "MENUDEO": 117.61,
            "CATEGORIA": "SERUM",
            "IMAGEURL": "SerumColageno"}
            
        break;

        case 10:
            objProduct = {"NOMBRE": "ACEITE MARIGREEN (30 ml)",
            "DESCRIPCION": "Es rico en antioxidantes. Hidrata profundamente, promoviendo una piel suave, flexible y de apariencia más saludable. Aligera las manchas oscuras y las bolsas debajo de los ojos. Además, ayuda a relajar la piel.",
            "CAJA": 48,
            "REPRESENTANTE": 65.83,
            "MAYOREO": 82.29,
            "MENUDEO": 123.44,
            "CATEGORIA": "CUIDADO FACIAL",
            "IMAGEURL": "Aceite"}
            
        break;

        case 11:
            objProduct = {"NOMBRE": "FIJADOR DE MAQUILLAJE (125 ml)",
            "DESCRIPCION": "Prolonga tu maquillaje durante más tiempo, formula innovadora resistente a la intemperie y el sudor, colores más vivos y resistentes, ligera sin aceite que dan un acabado mate",
            "CAJA": 24,
            "REPRESENTANTE": 27.58,
            "MAYOREO": 34.47,
            "MENUDEO": 51.7,
            "CATEGORIA": "CUIDADO FACIAL",
            "IMAGEURL": "FijadorMaquillaje"}
            
        break;

        case 12:
            objProduct = {"NOMBRE": "LOCION KERATINA PREMIUM (125 ml)",
            "DESCRIPCION": "Poderoso tratamiento nutritivo regenerador de la cutícula del cabello, repara las fibras y reestructura cada cabello desde el interior devolviéndole vitalidad, fuerza y brillo. Tratamiento sin enjuagar de acción inmediata y progresiva.",
            "CAJA": 24,
            "REPRESENTANTE": 37.79,
            "MAYOREO": 47.23,
            "MENUDEO": 70.85,
            "CATEGORIA": "CUIDADO CAPILAR",
            "IMAGEURL": "LocionKeratina"}
            
        break;
    
        default:
        break;
    }
    return objProduct;
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 50,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20
    },
    titlePrice: {
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    carousel: {
        width: 300,
        height: 600,
        resizeMode: "contain",
      },
      containerData: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5
      },
      dataText: {
        width: "45%",
        fontSize: 15
      },
      containerView: {
        padding: 10,
        // paddingBottom: 200,
      }
});