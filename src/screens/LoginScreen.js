import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { LoginPageStyle } from '../styles/LoginPageStyle';

const LoginScreen = ({ navigation }) => {
    const handleHome = () => {
        navigation.navigate('HomePageScreen');
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={LoginPageStyle.Logo}
                source={require('../assets/logo.webp')} />
            <TouchableOpacity
                style={LoginPageStyle.HomeButton}>
                <Text onPress={handleHome}>
                    HOME
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={LoginPageStyle.LoginButton}>
                <Text
                    style={LoginPageStyle.LoginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default LoginScreen;