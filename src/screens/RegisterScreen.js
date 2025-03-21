import React, { useState } from 'react';
import {
    Text,
    ImageBackground,
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
            setPassError("Password must at least be 8 characters long.");
        } else {
            setPassError("");
        }
    };

    // Error Handling => Confirm Password
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const validConfirmPass = (text) => {
        setConfirmPassword(text);
        if (text !== password) {
            setConfirmPassError("Passwords do not match.");
        } else {
            setConfirmPassError("");
        }
    };

    const [inputError, setInputError] = useState("");

    const handleRegister = () => {
        setInputError("");
        if (emailError || passError || !email || !password || !confirmPassword) {
            if (!password) {
                setInputError("Password is required.");
            }
            if (!email) {
                setInputError("Email is required.");
            }
            if (!confirmPassword) {
                setInputError("Please confirm your password.");
            }
            return;
        }

        const userData = {
            email: email,
            password: password,
            role: 'user'
        };
        navigation.navigate('LoginScreen', { userData });
    };

    // Navigation @ HomePageScreen.js
    const handleHome = () => {
        navigation.navigate('HomePageScreen');
    };

    return (
        <ImageBackground
            source={require('../assets/background.jpeg')}
            style={RegisterPageStyle.Container}
            blurRadius={20}
        >
            <View style={RegisterPageStyle.Container}>
                <Image
                    style={RegisterPageStyle.Logo}
                    source={require('../assets/logo.webp')}
                />

                {/* Email Input */}
                <TextInput
                    style={[ 
                        RegisterPageStyle.InputEmail,
                        emailError ? RegisterPageStyle.ErrorHandler : null,
                        { borderColor: emailError ? 'red' : 'black' }
                    ]}
                    placeholder="Email"
                    value={email}
                    onChangeText={validEmail}
                    keyboardType="email-address"
                />
                {emailError ? <Text style={RegisterPageStyle.ErrorHandler}>{emailError}</Text> : null}

                {/* Password Input */}
                <TextInput
                    secureTextEntry={true}
                    style={[ 
                        RegisterPageStyle.InputPassword,
                        passError ? RegisterPageStyle.ErrorHandler : null,
                        { borderColor: passError ? 'red' : 'black' }
                    ]}
                    placeholder="Password"
                    value={password}
                    onChangeText={validPass}
                    keyboardType="default"
                />
                {passError ? <Text style={RegisterPageStyle.ErrorHandler}>{passError}</Text> : null}

                {/* Confirm Password Input */}
                <TextInput
                    secureTextEntry={true}
                    style={[ 
                        RegisterPageStyle.InputPassword,
                        confirmPassError ? RegisterPageStyle.ErrorHandler : null,
                        { borderColor: confirmPassError ? 'red' : 'black' }
                    ]}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={validConfirmPass}
                    keyboardType="default"
                />
                {confirmPassError ? <Text style={RegisterPageStyle.ErrorHandler}>{confirmPassError}</Text> : null}

                {/* Register Button */}
                <TouchableOpacity
                    style={RegisterPageStyle.RegisterButton}
                    onPress={handleRegister}
                >
                    <Text style={RegisterPageStyle.RegisterText}>REGISTER</Text>
                </TouchableOpacity>
                {inputError ? <Text style={RegisterPageStyle.ErrorHandler}>{inputError}</Text> : null}

                {/* Back Button */}
                <TouchableOpacity
                    style={RegisterPageStyle.BackButton}
                    onPress={handleHome}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default RegisterScreen;
