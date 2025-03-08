import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderColor: '#8ACE00',
        borderWidth: 10,
    },
    Image: {
        borderWidth: 1,
        borderColor: '#8ACE00',
        width: 100,
        height: 100,
        marginBottom: 15
    },
    GeneralFont: {
        fontFamily: 'sans-serif-medium',
    },
    TextInput: {
        borderWidth: 1,
        borderColor: '#000',
        width: 150,
        fontSize: 18,
        color: '#000',
        marginBottom: 15
    },
    Text: {
        borderWidth: 1,
        borderColor: '#000',
    }
})