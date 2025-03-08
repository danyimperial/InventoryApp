import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
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
            <TextInput
                style={RegisterPageStyle.InputEmail}
                placeholder="Email"
            />
            <TextInput
                style={RegisterPageStyle.InputPassword}
                placeholder="Password"
            />
            <TouchableOpacity
                style={RegisterPageStyle.RegisterButton}>
                <Text
                    style={RegisterPageStyle.RegisterText}>
                    REGISTER
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={RegisterPageStyle.BackButton}>
                <Text onPress={handleHome}>
                    Back
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default RegisterScreen;