import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setTokenApi(token) {
    try {
        await AsyncStorage.setItem("token", token.email);
        return true;
    } catch (error) {
        return null;
    }
}

export async function setWishList(token) {
    try {
        await AsyncStorage.setItem("wishlist", token.email);
        return true;
    } catch (error) { 
        return null;
    }
}

export async function removeTokenApi() {
    try {
        await AsyncStorage.removeItem("token");
        return true;
    } catch (error) {
        return null;
    }
}