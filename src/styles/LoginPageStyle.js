import { StyleSheet } from "react-native";
import { TextInput } from "../../node_modules/react-native-gesture-handler/lib/typescript/index";

export const LoginPageStyle = StyleSheet.create({
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
        paddingLeft: 65,
        paddingRight: 65,
        position: 'absolute',
        bottom: 10
    },
    LoginButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 61,
        paddingRight: 61,
        margin: 5,
        alignSelf: 'center'
    },
    LoginText: {
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