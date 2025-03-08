import { StyleSheet } from "react-native";

export const RegisterPageStyle = StyleSheet.create({
    Logo: {
        width: 356,
        height: 300,
        marginBottom: 10
    },
    BackButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 61,
        paddingRight: 61,
        margin: 5,
        position: 'absolute',
        bottom: 10
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 49,
        paddingRight: 49,
        margin: 5,
        alignSelf: 'center',
    },
    RegisterText: {
        color: 'white'
    },
    InputEmail: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 63,
        paddingRight: 63,
        margin: 5,
        alignSelf: 'center'
    },
    InputPassword: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 49,
        paddingRight: 49,
        margin: 5,
        alignSelf: 'center'
    },
})