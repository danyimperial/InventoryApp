import { StyleSheet } from "react-native";

export const HomePageStyle = StyleSheet.create({
    View: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        // backgroundImage: "url('../assets/background.jpeg')",
    },
    Logo: {
        width: 356,
        height: 300,
        margin: 10

    },
    RegisterButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 49,
        paddingRight: 49,
        margin: 5,
    },
    LoginButton: {
        borderWidth: 1,
        borderColor: '1D1616',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        margin: 5,
        alignSelf: 'center'
    }
})