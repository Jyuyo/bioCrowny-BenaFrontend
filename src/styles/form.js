import { StyleSheet } from "react-native";
import colors from "./colors";


const formStyle = StyleSheet.create({
    input: {
        marginBottom: 20,
    },
    btnSucces: {
        backgroundColor: colors.primary,
        padding: 5,
        borderRadius: 8,
        
    },
    btnSuccesRed: {
        backgroundColor: colors.secondary,
        padding: 5,
        borderRadius: 8,
        
    },
    btnText: {
        marginTop: 10,
    },
    btnTextLabel: {
        color: colors.fontLight,
        
    },
});

export default formStyle;