import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import Market from "../../screens/Market";
import Whishlist from "../../screens/Whishlist";
import colors from "../../styles/colors";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AccountStack from "./AccountStack";
import ProductStack from "./ProductStack";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  
    return (
    <NavigationContainer>
        <Tab.Navigator barStyle={styles.navigation} screenOptions={{
        tabBarActiveTintColor: '#FFF',
      }}>
            <Tab.Screen name="product" component={ProductStack} options={{tabBarLabel: "Home", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={"#FFF"} size={20}/>
          ),}}
            />
            <Tab.Screen name="whishlist" component={Whishlist} options={{tabBarLabel: "Whishlist", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={"#FFF"} size={20}/>
          ),}}
            />
            <Tab.Screen name="market" component={Market} options={{tabBarLabel: "Market", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={"#FFF"} size={20}/>
          ),}}
            />
            <Tab.Screen name="perfil" component={AccountStack} options={{tabBarLabel: "Account", tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={"#FFF"} size={20}/>
          ),}}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

function setIcon(route, routeStatus){
    let iconName = "";

    switch (route.name) {
        case "home":
            iconName = "home";
            break;

        case "wishlist":
            iconName = "heart";
        break;

        case "market":
            iconName = "shopping-cart";
        break;

        case "account":
            iconName = "bars";
        break;
    
        default:
            break;
    }
    return <AwesomeIcon name={iconName} style={styles.icon} />
    console.log(route);
    console.log(routeStatus);
    console.log('first', first);
}

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgBlack,
    },
    icon: {
        fontSize: 20,
        color: colors.fontLight,
    },
});