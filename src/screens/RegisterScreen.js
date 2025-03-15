import React from 'react';
import { useState } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from "react-native";
import { RegisterPageStyle } from '../styles/RegisterPageStyle';

const RegisterScreen = ({ navigation }) => {
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
        <View style={RegisterPageStyle.Container}>
            <Image
                style={RegisterPageStyle.Logo}
                source={require('../assets/logo.webp')} />

            {/* Email Input */}
            <TextInput
            style={[RegisterPageStyle.InputEmail, emailError ? RegisterPageStyle.ErrorHandler : null]}
                placeholder="Email"
                value={email}
                onChangeText={validEmail}
                keyboardType="Email-Address"
            />
            {emailError ? <Text style={RegisterPageStyle.ErrorHandler}>{emailError}</Text> : null}

            {/* Password Input */}
            <TextInput
                style={[RegisterPageStyle.InputPassword, passError ? RegisterPageStyle.ErrorHandler : null]}
                placeholder="Password"
                value={password}
                onChangeText={validPass}
                keyboardType="Password"
            />
            {passError ? <Text style={RegisterPageStyle.ErrorHandler}>{passError}</Text> : null}

            {/* Register Button */}
            <TouchableOpacity
                style={RegisterPageStyle.RegisterButton}>
                <Text
                    style={RegisterPageStyle.RegisterText}>
                    REGISTER
                </Text>
            </TouchableOpacity>

            {/* Back Button */}
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