import React from 'react';
import { useState } from 'react';
import {
    Text,
    ImageBackground,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import { LoginPageStyle } from '../styles/LoginPageStyle';

const LoginScreen = ({ navigation }) => {
    // Error Handling => Email
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const validEmail = (text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailError("Please enter a valid email address.");
        } else {
            setEmailError("");
        }
    };

    // Error Handling => Password
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const validPass = (text) => {
        setPassword(text);
        if (text.length < 8) {
            setPassError("Password must at least be 8 characters long.")
        } else {
            setPassError("");
        }
    };

    // Navigation @ HomePageScreen.js
    const handleHome = () => {
        navigation.navigate('HomePageScreen');
    };
    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={LoginPageStyle.Container}
            blurRadius={20}
        >
            <View style={LoginPageStyle.Container}>
                <Image
                    style={LoginPageStyle.Logo}
                    source={require('../assets/logo.webp')} />
                {/* Email Input */}
                <TextInput
                    style={[LoginPageStyle.InputEmail, emailError ? LoginPageStyle.ErrorHandler : null]}
                    placeholder="Email"
                    value={email}
                    onChangeText={validEmail}
                    keyboardType="Email-Address"
                />
                {emailError ? <Text style={LoginPageStyle.ErrorHandler}>{emailError}</Text> : null}

                {/* Password Input */}
                <TextInput
                    style={[LoginPageStyle.InputPassword, passError ? LoginPageStyle.ErrorHandler : null]}
                    placeholder="Password"
                    value={password}
                    onChangeText={validPass}
                    keyboardType="Password"
                />
                {passError ? <Text style={LoginPageStyle.ErrorHandler}>{passError}</Text> : null}

                {/* Register Button */}
                <TouchableOpacity
                    style={LoginPageStyle.LoginButton}>
                    <Text
                        style={LoginPageStyle.LoginText}>
                        LOGIN
                    </Text>
                </TouchableOpacity>

                {/* Back Button */}
                <TouchableOpacity
                    style={LoginPageStyle.BackButton}>
                    <Text onPress={handleHome}>
                        Back
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}


export default LoginScreen;