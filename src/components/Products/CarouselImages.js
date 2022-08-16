import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

export default function CarouselImages(props) {
  const { images } = props;

  console.log(images);

  // const renderItem = ({item}) => {
  //   return <Image style={style.carousel} source={{uri: `../../../assets/img/${item.IMAGEURL}`}}/>;
  // }

  return (
    <>
      <Image style={styles.carousel} source={{uri: `../../../assets/img/${images}`}}/>;
    </>
  );
}

const styles = StyleSheet.create({
  carousel: {
    width: 300,
    height: 600,
    resizeMode: "contain",
  },
})