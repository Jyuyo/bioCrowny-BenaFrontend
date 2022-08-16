import { View, Text, StyleSheet, SafeAreaView, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import colors from '../../styles/colors';
import { formStyle } from '../../styles';
import Buy from './Buy';

export default function Quantity(props) {
    const {quantity, setQuantity} = props; 
    // const [number, onChangeNumber] = React.useState(null);
  
    return (
      <SafeAreaView>
        {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        /> */}
        {/* <Button
            onPress={() => quantity+1}
            title="+"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        /> */}
        <View style={styles.containerMain}>
        <Text style={{ fontWeight: "bold", fontSize: 15, textAlign: 'center'}}>cantidad:</Text>
        <View style={styles.container}>
            
        <Button color="#029f00" title="+" onPress={ ()=> setQuantity( quantity + 1 ) } />
            <TextInput
            style={styles.input}
            onChangeText={(value) => {setQuantity(value)}}
            value={quantity.toString()}
            keyboardType="numeric"
            />
            <Button color="#ff5c5c" title="-" onPress={ ()=> setQuantity( quantity - 1 ) } />
            
        </View>
        </View>
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      height: 40,
      width:65,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: 0
      
    },
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start",
        marginTop: 20,
        justifyContent: 'center',
    },
    button: {
        width: 15,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        paddingTop: 10,
        backgroundColor: colors.primary
    },
    containerMain: {
        alignContent: 'center'
    }
  });
  