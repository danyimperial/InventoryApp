import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
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
            <TextInput
                style={LoginPageStyle.InputEmail}
                placeholder="Email"
            />
            <TextInput
                style={LoginPageStyle.InputPassword}
                placeholder="Password"
            />
            <TouchableOpacity
                style={LoginPageStyle.LoginButton}>
                <Text
                    style={LoginPageStyle.LoginText}>
                    LOGIN
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={LoginPageStyle.BackButton}>
                <Text onPress={handleHome}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default LoginScreen;