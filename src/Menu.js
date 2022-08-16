import { View, Text, StyleSheet, Alert } from 'react-native';
import React from 'react';
import { List } from 'react-native-paper';
import useAuth from './hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {

  const { logout } = useAuth();

  const logoutAccount = () => {
    Alert.alert(
        "Cerrar sesion",
        "¿Estas seguro de que quieres salir de tu cuenta?",
        [
            {
                text: "No"
            },
            {
                text: "Si",
                onPress: logout,
                
            }
        ],
        {cancelable: false}
    )
  }

  return (
    <List.Section>
      <List.Subheader>Mi Cuenta</List.Subheader>
      <List.Item title="Editar Perfil" description="Modifica datos asociados a tu cuenta" left={(props) => <List.Icon {...props} icon="account-edit" /> } />
      <List.Item title="Cambiar Idioma" description="Cambia el idioma de la aplicación" left={(props) => <List.Icon {...props} icon="earth" /> } />
      <List.Item title="Editar Direcciones" description="Guarda y modifica direcciones de envio asociadas a tu cuenta" left={(props) => <List.Icon {...props} icon="map-marker-multiple" /> } />
      <List.Item title="Editar Contraseña" description="Modifica la contraseña de la cuenta" left={(props) => <List.Icon {...props} icon="key" /> } />
      <List.Item title="Pedidos" description="Ver los pedidos de esta cuenta" left={(props) => <List.Icon {...props} icon="history" /> } />
      <List.Item title="Cerrar Sesion" description="Cierra sesion en este dispositivo" onPress={logoutAccount} left={(props) => <List.Icon {...props} icon="logout" /> } />
    </List.Section>
  );
}