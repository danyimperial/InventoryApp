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
        color: '#333',
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
        width: 200,
        height: 163,
        margin: 10,
        // position: 'absolute',
        // bottom: 125,
    },
    Touchable: { 
    width: "100%",
    paddingTop: 40,  
    paddingBottom: 50,  // Increased padding for better spacing
    paddingHorizontal: 20,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    },
    RegisterButton: {
        // borderWidth: 1,
        // borderColor: '1D1616',
        // backgroundColor: 'black',
        // width: '70%',
        // fontSize: 36,
        // paddingVertical: 10,
        // paddingHorizontal: 20,
        // margin: 5,
        // position: 'absolute',
        // bottom: 65,
        // alignItems: 'center'
        backgroundColor: 'black', // Use a color that matches the theme
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        width: "90%",  // Make it more responsive
        alignItems: "center",
        marginBottom: 15,
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