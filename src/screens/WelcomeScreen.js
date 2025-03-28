import React from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TouchableOpacity
} from "react-native";
import { WelcomeScreenStyle } from '../styles/WelcomeScreenStyle';

const WelcomeScreen = ({ navigation }) => {
    // Navigation
    const handleLogin = () => {
        navigation.navigate('LoginScreen');
    };
    const handleRegister = () => {
        navigation.navigate('RegisterScreen');
    };

    return (
        <View style={WelcomeScreenStyle.Container}>
            <ImageBackground
                source={require('../assets/lab.jpg')}
                style={WelcomeScreenStyle.Container}
            >
                <View style={WelcomeScreenStyle.Welcome}>
                    <Text style={WelcomeScreenStyle.WelcomeText}>WELCOME TO</Text>
                    <View style={WelcomeScreenStyle.HighlightBox}>
                        <Text style={WelcomeScreenStyle.HighlightText}>RHINE LAB.LLC.</Text>
                    </View>
                    <Image
                        style={WelcomeScreenStyle.Logo}
                        source={require('../assets/Rhine_Lab.webp')}
                    />
                </View>

                    {/* Register Button */}
                    <TouchableOpacity
                        style={WelcomeScreenStyle.RegisterButton}
                        onPress={handleRegister}
                    >
                        <Text style={WelcomeScreenStyle.RegisterText}>
                            GET STARTED
                        </Text>
                    </TouchableOpacity>

                    {/* Login Button */}
                    <Text style={WelcomeScreenStyle.StaticText}>
                        Already Have An Account?{" "}
                        <Text
                            style={WelcomeScreenStyle.LoginText}
                            onPress={handleLogin}
                        > Login</Text>
                    </Text>
            </ImageBackground>
        </View>
    )
}


export default WelcomeScreen;