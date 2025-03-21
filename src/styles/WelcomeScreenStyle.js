import { StyleSheet } from "react-native";

export const WelcomeScreenStyle = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    Welcome: {
        alignItems: 'center',
    },
    WelcomeText: {
        fontSize: 46,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'black',
    },
    HighlightBox: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 5,
    },
    HighlightText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },
    Logo: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        width: '70%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 5,
        position: 'absolute',
        bottom: 65,
        alignItems: 'center'
    },
    RegisterText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    LoginText: {
        fontSize: 16,
        textDecorationLine: 'underline',
    },
    StaticText: {
        fontSize: 16,
        position: 'absolute',
        bottom: 30,
    },
})