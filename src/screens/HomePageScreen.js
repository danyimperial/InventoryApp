import React from 'react';
import {
    Text,
    ImageBackground,
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
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={HomePageStyle.Background}
        >
            <View style={HomePageStyle.Background}>
                <Image
                    style={HomePageStyle.Logo}
                    source={require('../assets/logo.webp')} />
        
                {/* Register Button */}
                <TouchableOpacity
                    style={HomePageStyle.RegisterButton}>
                    <Text onPress={handleRegister}>
                        REGISTER
                    </Text>
                </TouchableOpacity>

                {/* Login Button */}
                <TouchableOpacity
                    style={HomePageStyle.LoginButton}>
                    <Text onPress={handleLogin}>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


export default HomePageScreen;