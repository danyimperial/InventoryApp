import { StyleSheet } from "react-native";

export const LoginPageStyle = StyleSheet.create({
    Container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    Logo: {
        width: 250, 
        height: 250, 
        margin: 5
    },
    BackButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        position: 'absolute',
        bottom: 10,
        alignItems: 'center'
    },
    BackText: {
        fontSize: 18,
    },
    LoginButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: 'center'
    },
    LoginText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    InputEmail: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        fontSize: 18,
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: 'center'
    },
    InputPassword: {
        borderWidth: 1,
        borderColor: '1D1616',
        color: 'black',
        fontSize: 18,
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        alignItems: 'center'
    },
    ErrorHandler: {
        color: 'red',
        marginBottom: 8,
    },
    RegisterText: {
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    StaticText: {
        fontSize: 16,
    },
    WelcomeText: {
        fontSize: 26,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'black',
    }
})