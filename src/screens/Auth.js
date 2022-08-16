import { View, Text, SafeAreaView, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import logoLogin from '../../assets/logo.png';
import logoRegister from '../../assets/l.png';
import { layoutStyle } from '../styles';
import RegisterForm from '../components/Auth/RegisterForm';
import LoginForm from '../components/Auth/LoginForm';

export default function Auth(props) {
  const [showLogin, setLogin] = useState(false);

  
  const { login } = props;
  const changeForm = () => setLogin(!showLogin)
  

  return (
    <View style={layoutStyle.container}>
      {showLogin ? <Image style={styles.logo} source={logoLogin} /> : <Image style={styles.logo} source={logoRegister} />}
        
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': 'height'}>
            {showLogin ? <LoginForm changeForm={changeForm}/> : <RegisterForm changeForm={changeForm} login={login}/>}
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
    logo: {
        width: "100%",
        
        // height: 50,
        resizeMode: "contain",
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
});