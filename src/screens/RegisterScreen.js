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
                style={RegisterPageStyle.HomeButton}>
                <Text onPress={handleHome}>
                    HOME
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={RegisterPageStyle.RegisterButton}>
                <Text
                    style={RegisterPageStyle.RegisterText}>
                    REGISTER
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default RegisterScreen;