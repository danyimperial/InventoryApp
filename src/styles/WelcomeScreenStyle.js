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
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#333',
    },
    HighlightBox: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 5,
    },
    HighlightText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
    },
    Logo: {
        width: 220,
        height: 180,
        margin: 10,
        // position: 'absolute',
        // bottom: 125,
    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        backgroundColor: 'black',
        width: '70%',
        fontSize: 36,
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
        fontSize: 18, 
        // textDecorationLine: 'underline',
    }, 
    StaticText: {
        fontSize: 18,
        position: 'absolute',
        bottom: 30,
    },
})