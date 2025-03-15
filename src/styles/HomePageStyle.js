import { StyleSheet } from "react-native";

export const HomePageStyle = StyleSheet.create({
    Container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    Logo: {
        width: 356,
        height: 300,
        margin: 10,
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        width: '40%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        alignItems: 'center'
    },
    LoginButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        width: '40%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 5,
        alignItems: 'center'
    }
})