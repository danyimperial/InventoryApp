import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { RegisterPageStyle } from '../styles/RegisterPageStyle';

const RegisterScreen = ({ navigation }) => {
    const handleHome = () => {
        navigation.navigate('HomePageScreen');
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={RegisterPageStyle.Logo}
                source={require('../assets/logo.webp')} />
            <TouchableOpacity
                style={RegisterPageStyle.RegisterButton}>
                <Text onPress={handleHome}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={RegisterPageStyle.LoginButton}>
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}


export default RegisterScreen;