import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { HomePageStyle } from '../styles/HomePageStyle';
const HomePageScreen = ({ navigation }) => {
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    };
    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    };
    return (
        <View style={HomePageStyle.View}>
            <Image
                style={HomePageStyle.Logo}
                source={require('../assets/logo.webp')} />
            <TouchableOpacity
                style={HomePageStyle.RegisterButton}>
                <Text onPress={handleRegister}>
                    REGISTER
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={HomePageStyle.LoginButton}>
                <Text onPress={handleLogin}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default HomePageScreen;